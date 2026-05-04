// ─── Flipbook ────────────────────────────────────────────────────────────────
var flipbookPF = null;
var flipbookSpread = 0;
var flipbookPages = [];
var flipbookTotal = 0;
var flipbookCurrentBookId = null;

function isPortraitMobile() {
  return window.innerWidth < 768 && window.innerHeight > window.innerWidth;
}

function flipbookInit() {
  var container = document.getElementById('flipbook-pf');
  container.innerHTML = '';
  var portrait = isPortraitMobile();
  // Overhead: top-bar padding + controls + thumbs strip (hidden on mobile)
  var overhead = portrait ? 80 : 210;
  var containerH = window.innerHeight - overhead;
  var containerW = portrait ? window.innerWidth * 0.96 : window.innerWidth * 0.90;
  var pageW = portrait ? containerW : Math.min(containerW / 2, 700);
  var pageH = Math.min(containerH, pageW * (2126 / 1418));
  var totalW = Math.round(portrait ? pageW : pageW * 2);
  var totalH = Math.round(pageH);

  // Give the container explicit pixel dimensions so PageFlip can measure it
  container.style.width = totalW + 'px';
  container.style.height = totalH + 'px';

  flipbookPF = new St.PageFlip(container, {
    width: Math.round(pageW),
    height: totalH,
    size: 'fixed',
    usePortrait: portrait,
    showCover: true,
    maxShadowOpacity: 0.4,
    mobileScrollSupport: false,
    swipeDistance: 20
  });
  flipbookPF.loadFromImages(flipbookPages);
  flipbookPF.on('flip', function(e) {
    var perSpread = portrait ? 1 : 2;
    flipbookSpread = portrait ? e.data : (e.data % 2 === 0 ? e.data : e.data - 1);
    flipbookUpdateThumbs();
    var li = flipbookSpread;
    var ri = portrait ? li : li + 1;
    var ll = li < flipbookTotal ? li + 1 : '';
    var rl = (!portrait && ri < flipbookTotal) ? ri + 1 : '';
    document.getElementById('flipbook-indicator').textContent =
      ((ll && rl) ? (ll + ' – ' + rl) : (ll || rl)) + ' / ' + flipbookTotal;
    document.getElementById('flipbook-btn-prev').disabled = flipbookSpread <= 0;
    document.getElementById('flipbook-btn-next').disabled =
      portrait ? flipbookSpread + 1 >= flipbookTotal : flipbookSpread + 2 >= flipbookTotal;
  });
  if (flipbookSpread > 0) flipbookPF.flip(flipbookSpread);
}

function openBookFlipbook(bookId) {
  var book = bookById(bookId);
  if (!book || !book.previewPages || !book.previewPages.length) return;
  flipbookCurrentBookId = bookId;
  flipbookPages = book.previewPages;
  flipbookTotal = flipbookPages.length;
  flipbookSpread = 0;

  document.getElementById('flipbook-title-bar').textContent = book.title;
  document.getElementById('flipbook-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  flipbookBuildThumbs();
  // Delay init so the overlay is fully painted before PageFlip measures the container
  setTimeout(flipbookInit, 60);
}

function closeBookFlipbook() {
  if (flipbookPF) { flipbookPF.destroy(); flipbookPF = null; }
  document.getElementById('flipbook-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function bookFlip(dir) {
  if (!flipbookPF) return;
  if (dir === 1) flipbookPF.flipNext();
  else flipbookPF.flipPrev();
}

function flipbookBuildThumbs() {
  var strip = document.getElementById('flipbook-thumbs');
  strip.innerHTML = '';
  for (var i = 0; i < flipbookTotal; i++) {
    (function(idx) {
      var t = document.createElement('div');
      t.className = 'fbk-th';
      t.id = 'fbkth' + idx;
      var img = document.createElement('img');
      img.src = flipbookPages[idx];
      img.style.width = '100%';
      img.style.display = 'block';
      t.appendChild(img);
      var n = document.createElement('div');
      n.className = 'fbk-thn';
      n.textContent = idx + 1;
      t.appendChild(n);
      t.addEventListener('click', function() { if (flipbookPF) flipbookPF.flip(idx); });
      strip.appendChild(t);
    })(i);
  }
}

function flipbookUpdateThumbs() {
  for (var i = 0; i < flipbookTotal; i++) {
    var t = document.getElementById('fbkth' + i);
    if (t) t.classList.toggle('ac', i === flipbookSpread || i === flipbookSpread + 1);
  }
  var a = document.getElementById('fbkth' + flipbookSpread);
  if (a) a.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// Reinit flipbook on orientation change so portrait/landscape mode switches
window.addEventListener('resize', (function() {
  var t;
  return function() {
    clearTimeout(t);
    t = setTimeout(function() {
      if (!flipbookPF || !flipbookCurrentBookId) return;
      flipbookInit();
    }, 250);
  };
})());
