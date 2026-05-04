// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('keydown', function(e) {
  if (document.getElementById('flipbook-overlay').classList.contains('open')) {
    if (e.key === 'ArrowRight') bookFlip(1);
    if (e.key === 'ArrowLeft') bookFlip(-1);
    if (e.key === 'Escape') closeBookFlipbook();
    return;
  }
  if (e.key === 'Escape') { closePurchaseModal(null); arcCloseAll(); }
});
renderHomeHero();
renderHomeGrid();
renderCatalog();
renderContactSelect();
renderArchivo();
(function() {
  var hash = location.hash.slice(1);
  var name = 'home', bookId = null;
  if (hash) {
    var parts = hash.split('/');
    if (PAGES.indexOf(parts[0]) !== -1) {
      name = parts[0];
      bookId = parts[1] ? parseInt(parts[1]) : null;
    }
  }
  history.replaceState({ page: name, bookId: bookId }, '', '#' + name + (bookId ? '/' + bookId : ''));
  go(name, bookId, true);
})();
