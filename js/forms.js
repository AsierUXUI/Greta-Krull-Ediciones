// ─── Toast ───────────────────────────────────────────────────────────────────
function showToast(msg) {
  var t = document.getElementById('toast-el');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}

// ─── Copy subject ────────────────────────────────────────────────────────────
function copySubject(el) {
  var textEl = el.querySelector('.dist-subject-text');
  var text = textEl ? textEl.textContent : el.textContent;
  navigator.clipboard.writeText(text).then(function() {
    el.classList.add('copied');
    if (textEl) { var orig = textEl.textContent; textEl.textContent = '¡Copiado!'; setTimeout(function() { textEl.textContent = orig; el.classList.remove('copied'); }, 1500); }
  });
}
