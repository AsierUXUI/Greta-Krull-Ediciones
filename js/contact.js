// ─── Contact select ──────────────────────────────────────────────────────────
function onMotivoChange(val) {
  var isCompra = val === 'Comprar un ejemplar';
  document.getElementById('cf-titulo').style.display = isCompra ? '' : 'none';
  document.getElementById('cf-pais').style.display = isCompra ? '' : 'none';
}

function renderContactSelect() {
  var sel = document.getElementById('contact-title-select');
  if (!sel) return;
  var html = '<option value="">Seleccionar título</option>';
  BOOKS.forEach(function(book) {
    var label = book.num + ' · ' + book.title + ' — ' + book.authors[0].name + (book.status !== 'available' ? ' (en prep.)' : '');
    html += '<option value="' + label + '">' + label + '</option>';
  });
  sel.innerHTML = html;
}

function preSelectContactBook(bookId) {
  var book = BOOKS.find(function(b) { return b.id === bookId; });
  if (!book) return;
  var motivo = document.getElementById('contact-motivo-select');
  if (motivo) { motivo.value = 'Comprar un ejemplar'; onMotivoChange('Comprar un ejemplar'); }
  var sel = document.getElementById('contact-title-select');
  if (!sel) return;
  var label = book.num + ' · ' + book.title + ' — ' + book.authors[0].name + (book.status !== 'available' ? ' (en prep.)' : '');
  sel.value = label;
}

// ─── Form submission (Formspree) ─────────────────────────────────────────────
var FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgodvwbd';
function submitForm(e, type) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }
  var data = {};
  new FormData(form).forEach(function(val, key) { if (key !== '_subject') data[key] = val; });
  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  }).then(function(r) {
    var label = type === 'consulta' ? 'Enviar consulta' : 'Enviar solicitud';
    if (btn) { btn.disabled = false; btn.textContent = label; }
    return r.json().then(function(d) {
      if (r.ok && d.ok !== false) {
        showToast(type === 'consulta' ? 'Consulta enviada — respondemos en 48 h.' : 'Solicitud enviada — respondemos en 48 h.');
        form.reset();
      } else {
        var msg = (d.errors && d.errors.map(function(x){return x.message;}).join(', ')) || d.error || 'Error al enviar.';
        showToast(msg);
      }
    }).catch(function() {
      if (r.ok) {
        showToast(type === 'consulta' ? 'Consulta enviada — respondemos en 48 h.' : 'Solicitud enviada — respondemos en 48 h.');
        form.reset();
      } else {
        showToast('Error al enviar.');
      }
    });
  }).catch(function() {
    if (btn) { btn.disabled = false; btn.textContent = type === 'consulta' ? 'Enviar consulta' : 'Enviar solicitud'; }
    showToast('Error de conexión. Inténtelo de nuevo.');
  });
}
