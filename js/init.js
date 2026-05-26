// ─── Ink trail ───────────────────────────────────────────────────────────────
(function () {
  if (window.matchMedia('(hover:none)').matches) return;
  var canvas = document.getElementById('ink-trail');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var pts = [];
  var maxAge = 280;

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', function () { resize(); pts = []; });

  document.addEventListener('mousemove', function (e) {
    pts.push({ x: e.clientX, y: e.clientY, t: Date.now() });
    if (pts.length > 18) pts.shift();
  });

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var now = Date.now();
    pts = pts.filter(function (p) { return now - p.t < maxAge; });
    if (pts.length < 2) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (var i = 1; i < pts.length; i++) {
      var p0 = pts[i - 1], p1 = pts[i];
      var age = now - p1.t;
      var ratio = 1 - age / maxAge;
      ctx.strokeStyle = 'rgba(140,26,19,' + (ratio * 0.07) + ')';
      ctx.lineWidth = ratio * 1.1;
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }
  }
  draw();
})();

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
