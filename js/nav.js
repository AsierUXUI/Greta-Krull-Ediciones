// ─── Mobile nav toggle ────────────────────────────────────────────────────────
function toggleNav() {
  var links = document.querySelector('.nav-links');
  var btn = document.getElementById('nav-toggle-btn');
  if (!links) return;
  var open = links.classList.toggle('open');
  if (btn) btn.textContent = open ? '✕ Cerrar' : '☰ Menú';
}
