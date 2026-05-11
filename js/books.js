// ─── Helpers ────────────────────────────────────────────────────────────────
var currentBookId = 1;

function bookById(id) {
  for (var i = 0; i < BOOKS.length; i++) { if (BOOKS[i].id === id) return BOOKS[i]; }
  return null;
}
function statusLabel(book) {
  if (book.status === 'available') return 'Disponible';
  if (book.status === 'upcoming')  return 'En preparación';
  return 'Anunciado';
}

// ─── Home hero ──────────────────────────────────────────────────────────────
function renderHomeHero() {
  var book = null;
  for (var i = 0; i < BOOKS.length; i++) { if (BOOKS[i].status === 'available') { book = BOOKS[i]; break; } }
  if (!book) book = BOOKS[0];
  var el = document.getElementById('home-hero-book');
  if (!el) return;
  el.setAttribute('onclick', 'go(\'detail\',' + book.id + ')');
  var heroBookInner = book.coverImage
    ? '<img src="' + book.coverImage + '" alt="Portada ' + book.title + '" loading="lazy">'
    : '<div class="book-obj-b1"></div><div class="book-obj-b2"></div><div class="book-obj-txt">' + book.coverHtml + '</div>';
  el.innerHTML =
    '<div class="hero-book-area">' +
      '<div class="book-obj' + (book.coverImage ? ' has-real-img' : '') + '">' +
        '<div class="book-obj-spine"></div>' + heroBookInner +
      '</div>' +
    '</div>' +
    '<div class="hero-caption">' +
      '<div class="hero-cap-num">' + book.num + ' · ' + (book.status === 'available' ? 'Disponible' : 'En preparación') + '</div>' +
      '<div class="hero-cap-title">' + book.title + '</div>' +
      '<div class="hero-cap-author">' + book.authorByline + '</div>' +
    '</div>';
}

// ─── Home grid ──────────────────────────────────────────────────────────────
function renderGridBook(book) {
  var dim = book.status !== 'available' ? ' dim' : '';
  var click = book.status === 'available' ? ' onclick="go(\'detail\',' + book.id + ')"' : '';
  var coverBg = book.status !== 'available' ? ' style="background:#eeeae0"' : '';
  var coverInner = book.coverImage
    ? '<img src="' + book.coverImage + '" alt="Portada ' + book.title + '" loading="lazy">'
    : '<div class="grid-cover-b"></div><div class="grid-cover-txt">' + book.coverHtmlSmall + '</div>';
  return '<div class="grid-book' + dim + '"' + click + '>' +
    '<div class="grid-cover-wrap">' +
      '<div class="grid-cover' + (book.coverImage ? ' has-real-img' : '') + '"' + (book.coverImage ? '' : coverBg) + '>' +
        coverInner +
      '</div>' +
    '</div>' +
    '<div class="grid-num">' + book.num + ' · ' + book.date + '</div>' +
    '<div class="grid-title">' + book.title + '</div>' +
    '<div class="grid-author">' + book.authorByline + '</div>' +
    '<div class="grid-excerpt">' + book.descShort + '</div>' +
    '<div class="grid-tag">' + statusLabel(book) + '</div>' +
  '</div>';
}

function renderHomeGrid() {
  var el = document.getElementById('home-grid');
  if (!el) return;
  var html = '';
  BOOKS.slice(0, 4).forEach(function(book) { html += renderGridBook(book); });
  el.innerHTML = html;
}

// ─── Catalog ────────────────────────────────────────────────────────────────
function renderCatalog() {
  var el = document.getElementById('catalog-rows');
  if (!el) return;
  var published = BOOKS.filter(function(b) { return b.status === 'available'; });
  var upcoming  = BOOKS.filter(function(b) { return b.status === 'upcoming'; });
  var announced = BOOKS.filter(function(b) { return b.status === 'announced'; });
  var html = '';

  function catRow(book) {
    var dim = book.status === 'upcoming' ? ' dim' : book.status === 'announced' ? ' dimmer' : book.status === 'available' ? ' av' : '';
    var click = book.status === 'available' ? ' onclick="go(\'detail\',' + book.id + ')"' : '';
    var coverBg = book.status !== 'available' ? ' style="background:#eeeae0"' : '';
    var rightCol = '';
    if (book.status === 'available') {
      rightCol =
        '<div class="cat-right">' +
          '<div class="cat-badge">Disponible</div>' +
          '<div class="cat-avail">Ejemplares únicos<br>Sin reimpresión</div>' +
        '</div>';
    } else {
      rightCol = '<div class="cat-right"><div class="cat-avail" style="font-style:italic">En preparación</div><div class="cat-avail">Sin reimpresión</div></div>';
    }
    var catCoverInner = book.coverImage
      ? '<img src="' + book.coverImage + '" alt="Portada ' + book.title + '" loading="lazy">'
      : '<div class="cat-cover-b"></div><div class="cat-cover-txt">' + book.coverHtmlSmall + '</div>';
    return '<div class="cat-row' + dim + '"' + click + '>' +
      '<div class="cat-cover' + (book.coverImage ? ' has-real-img' : '') + '"' + (book.coverImage ? '' : coverBg) + '>' + catCoverInner + '</div>' +
      '<div>' +
        '<div class="cat-num">' + book.num + ' · ' + book.date + '</div>' +
        '<div class="cat-title">' + (book.titleCatalog || book.title) + '</div>' +
        '<div class="cat-author">' + book.authorByline + '</div>' +
        '<div class="cat-desc">' + book.descCatalog + '</div>' +
        (book.quote ? '<div class="cat-quote">' + book.quote + '</div>' : '') +
      '</div>' +
      rightCol +
    '</div>';
  }

  if (published.length) {
    html += '<div class="cat-section"><span>Publicados</span><span>' + published.length + ' título' + (published.length > 1 ? 's' : '') + '</span></div>';
    html += '<div class="cat-grid">';
    published.forEach(function(b) { html += renderGridBook(b); });
    html += '</div>';
  }
  if (upcoming.length || announced.length) {
    html += '<div class="cat-section" style="margin-top:.5rem"><span>Próximamente</span><span>Publicación mensual aproximada</span></div>';
    upcoming.forEach(function(b)  { html += catRow(b); });
    announced.forEach(function(b) { html += catRow(b); });
  }
  el.innerHTML = html;
}

// ─── Detail page ────────────────────────────────────────────────────────────
function renderDetail(bookId) {
  var book = bookById(bookId);
  var el = document.getElementById('page-detail');
  if (!el || !book) return;

  // Previous / next books
  var idx = BOOKS.indexOf(book);
  var prev = idx > 0 ? BOOKS[idx - 1] : null;
  var next = idx < BOOKS.length - 1 ? BOOKS[idx + 1] : null;

  var specsHtml = '';
  if (book.specs) {
    book.specs.forEach(function(s) {
      specsHtml += '<div class="spec-row"><span class="spec-k">' + s.k + '</span><span class="spec-v">' + s.v + '</span></div>';
    });
  }

  var authorsHtml = '';
  book.authors.forEach(function(a) {
    authorsHtml += '<div class="detail-author-row"><span class="detail-author-name">' + a.name + '</span><span class="detail-author-role">' + a.role + '</span></div>';
  });

  var synopsisHtml = '';
  if (book.synopsis) {
    book.synopsis.forEach(function(p, i) {
      synopsisHtml += '<p style="' + (i < book.synopsis.length - 1 ? 'margin-bottom:1.5rem' : '') + '">' + p + '</p>';
    });
  }

  var contentsHtml = '';
  if (book.contents) {
    contentsHtml = '<div class="contents-label">Contenido del volumen</div>';
    book.contents.forEach(function(c) {
      contentsHtml += '<div class="contents-item"><div class="contents-n">' + c.n + '</div><div><div class="contents-t">' + c.title + '</div><div class="contents-sub">' + c.sub + '</div></div></div>';
    });
  }

  var leftButtons = '';
  if (book.status === 'available') {
    leftButtons = '<button class="btn-primary" onclick="openPurchaseModal()">Solicitar ejemplar</button>' +
                  '<button class="btn-ghost" onclick="go(\'consulta\')">Consulta &rarr;</button>';
  }

  var copiesHtml = '';

  var prevCard = prev
    ? '<div class="booknav-card" onclick="go(\'detail\',' + prev.id + ')"><div class="booknav-label">Anterior</div><div class="booknav-title">' + prev.title + '</div><div class="booknav-author">' + prev.authorByline + ' · ' + prev.num + ' &larr;</div></div>'
    : '<div class="booknav-card off"><div class="booknav-label">Anterior</div><div class="booknav-title" style="color:#ccc">—</div></div>';

  var nextCard = next
    ? '<div class="booknav-card" onclick="go(\'detail\',' + next.id + ')"><div class="booknav-label">Próximo en la colección</div><div class="booknav-title">' + next.title + '</div><div class="booknav-author">' + next.authorByline + ' · ' + next.num + ' &rarr;</div></div>'
    : '<div class="booknav-card off"><div class="booknav-label">Próximo</div><div class="booknav-title" style="color:#ccc">—</div></div>';

  el.innerHTML =
    '<div class="breadcrumb">' +
      '<span onclick="go(\'home\')">Inicio</span><span class="sep">&rsaquo;</span>' +
      '<span onclick="go(\'catalog\')">Catálogo</span><span class="sep">&rsaquo;</span>' +
      '<span onclick="go(\'catalog\')">' + book.collection + '</span><span class="sep">&rsaquo;</span>' +
      '<span style="color:var(--ink);cursor:default">' + book.num + '</span>' +
    '</div>' +
    '<div class="detail-layout">' +
      '<div class="detail-left">' +
        (function(){
          var hasPreview = book.previewPages && book.previewPages.length > 0;
          var cls = 'detail-cover' + (book.coverImage ? ' has-real-img' : '') + (hasPreview ? ' previewable' : '');
          var onclick = hasPreview ? ' onclick="openBookFlipbook(' + book.id + ')"' : '';
          return '<div class="' + cls + '"' + onclick + '>' +
            '<div class="dc-spine"></div>' +
            (book.coverImage
              ? '<img src="' + book.coverImage + '" alt="Portada ' + book.title + '" loading="lazy">'
              : '<div class="dc-b1"></div><div class="dc-b2"></div><div class="dc-txt">' + book.coverHtml + '</div>') +
          '</div>';
        })() +
        '<div class="detail-caption">' + book.collection + ' · ' + book.num + '</div>' +
        copiesHtml +
        leftButtons +
        (specsHtml ? '<div class="detail-specs">' + specsHtml + '</div>' : '') +
      '</div>' +
      '<div class="detail-right">' +
        '<div class="detail-eyebrow">' + book.collection + ' · ' + book.num + ' · ' + book.date + '</div>' +
        '<h1 class="detail-h1">' + book.title + '</h1>' +
        (book.subtitle ? '<div class="detail-subtitle">' + book.subtitle + '</div>' : '') +
        '<div class="detail-authors">' + authorsHtml + '</div>' +
        (synopsisHtml ? '<div class="detail-synopsis">' + synopsisHtml + '</div>' : '') +
        contentsHtml +
        (book.colophon ? '<div class="colophon">' + book.colophon + '</div>' : '') +
      '</div>' +
    '</div>' +
    '<div class="booknav">' + prevCard + nextCard + '</div>';
}

// ─── Purchase modal ──────────────────────────────────────────────────────────
function renderPurchaseModal(bookId) {
  var book = bookById(bookId);
  var el = document.getElementById('modal-body');
  if (!el || !book) return;
  var onlineOption = '';
  if (book.purchaseUrl) {
    onlineOption =
      '<a class="purchase-option featured" href="' + book.purchaseUrl + '" target="_blank" rel="noopener">' +
        '<div class="po-left">' +
          '<div class="po-badge">Compra en línea · Recomendado</div>' +
          '<div class="po-name">' + book.purchaseLabel + '</div>' +
          '<div class="po-desc">' + book.purchaseDesc + '</div>' +
        '</div>' +
        '<div class="po-arrow">&#8599;</div>' +
      '</a>' +
      '<div class="purchase-divider">o bien</div>';
  }
  el.innerHTML =
    '<div class="modal-intro">' + book.title + ' &middot; ' + book.num + '</div>' +
    onlineOption +
    '<div class="purchase-option" onclick="closePurchaseModal(null);go(\'contact\',' + bookId + ')" style="cursor:pointer">' +
      '<div class="po-left"><div class="po-badge">Solicitud directa</div><div class="po-name">Escribir a la editorial</div><div class="po-desc">Respondemos en 48 horas. Pago por transferencia.</div></div>' +
      '<div class="po-arrow">&rarr;</div>' +
    '</div>' +
    '<div class="purchase-option" onclick="closePurchaseModal(null);go(\'distrib\')" style="cursor:pointer">' +
      '<div class="po-left"><div class="po-badge">Distribución</div><div class="po-name">Librerías y bibliotecas</div><div class="po-desc">Para libreros, distribuidores e instituciones.</div></div>' +
      '<div class="po-arrow">&rarr;</div>' +
    '</div>';
}

// ─── Modal ───────────────────────────────────────────────────────────────────
function openPurchaseModal() {
  renderPurchaseModal(currentBookId);
  var m = document.getElementById('purchase-modal');
  if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closePurchaseModal(e) {
  var m = document.getElementById('purchase-modal');
  if (!m) return;
  if (e && e.target !== m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}
