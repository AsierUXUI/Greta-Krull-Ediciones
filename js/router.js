// ─── Page navigation ────────────────────────────────────────────────────────
var PAGES = ['home','about','catalog','detail','distrib','contact','consulta','archivo'];
var NAV_MAP = {home:null,about:'nl-about',catalog:'nl-catalog',detail:'nl-catalog',distrib:'nl-distrib',contact:'nl-contact',consulta:'nl-contact',archivo:'nl-archivo'};

function go(name, bookId, _noHistory) {
  PAGES.forEach(function(p) {
    var el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
  });
  if (name === 'detail') {
    if (bookId) currentBookId = bookId;
    renderDetail(currentBookId);
  }
  if (name === 'contact') {
    var motivo = document.getElementById('contact-motivo-select');
    if (motivo) { motivo.value = ''; onMotivoChange(''); }
    if (bookId) { setTimeout(function() { preSelectContactBook(bookId); }, 0); }
  }
  document.documentElement.classList.toggle('archivo-active', name === 'archivo');
  document.body.classList.toggle('archivo-active', name === 'archivo');
  var footer = document.getElementById('site-footer');
  if (footer) footer.style.display = (name === 'archivo') ? 'none' : '';
  if (name === 'archivo') { setTimeout(arcCenterCanvas, 16); }
  var pg = document.getElementById('page-' + name);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
  var nid = NAV_MAP[name];
  if (nid) { var nel = document.getElementById(nid); if (nel) nel.classList.add('active'); }
  window.scrollTo(0, 0);
  // Close mobile nav on navigation
  var links = document.querySelector('.nav-links');
  var btn = document.getElementById('nav-toggle-btn');
  if (links) links.classList.remove('open');
  if (btn) btn.textContent = '☰ Menú';
  if (!_noHistory) {
    var bid = (name === 'detail') ? (bookId || currentBookId) : null;
    var hash = '#' + name + (bid ? '/' + bid : '');
    history.pushState({ page: name, bookId: bid }, '', hash);
  }
}

window.addEventListener('popstate', function(e) {
  var s = e.state;
  if (s && s.page) { go(s.page, s.bookId || null, true); }
  else { go('home', null, true); }
});
