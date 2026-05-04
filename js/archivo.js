// ─── Archivo Canvas ───────────────────────────────────────────────────────────
var arcInited = false;
var arcState = { panX:0, panY:0, startX:0, startY:0, dragging:false, moved:false };

// Mobile: absolute positions relative to canvas origin — designed to fit all cards
// in the initial 375×547 viewport without panning (right edge ≤ 52px for 136px card)
var ARC_MOBILE_OFFSETS = [
  [-55, -140],
  [-60,  -50],
  [ 40, -120],
  [ 40,   40],
  [-50,   60],
  [ 45,  -20],
  [-30,  150],
];

// Offsets within a cluster: hero at [0,0], std entries spread around it
// Values sized so that after innerScale (~0.62) cards touch/barely overlap (~30px)
var ARC_CLUSTER_OFFSETS = [
  [   0,   0],
  [ 370, -40],
  [-350,  65],
  [  90, 355],
  [-100,-340],
  [ 375, 295],
  [-360,-270],
  [  45, 385],
  [-380,  35],
];

// Small jitter so multiple ref-cards sharing a midpoint don't stack
var ARC_REF_JITTER = [
  [  0,  0], [ 38,-28], [-32, 36], [ 28, 32], [-38,-22], [ 45, 10], [-18, 44]
];

function arcComputePositions(items) {
  var mobile = window.innerWidth < 768;

  // Collect unique primary tags in order of first appearance
  var tagList = [], tagIndex = {};
  items.forEach(function(e) {
    var p = (e.tags && e.tags.length) ? e.tags[0] : '__';
    if (!(p in tagIndex)) { tagIndex[p] = tagList.length; tagList.push(p); }
  });

  // Cluster centres on a circle — radius scales with number of clusters
  var n = tagList.length || 1;
  var clusterR  = mobile ? 150 : Math.max(360, n * 90);
  var innerScale = mobile ? 0.42 : 0.62;
  var centers = {};
  tagList.forEach(function(tag, i) {
    var a = (2 * Math.PI * i / n) - Math.PI / 2; // top-first
    centers[tag] = { x: Math.round(clusterR * Math.cos(a)), y: Math.round(clusterR * Math.sin(a)) };
  });

  var heroSeen = {}, tagCount = {}, stdCount = {}, refCount = {};
  items.forEach(function(e, i) {
    var p = (e.tags && e.tags.length) ? e.tags[0] : '__';
    var isRef = e.tags && e.tags.length > 1;

    // Size + orientation
    if (isRef) {
      e._size = 'sz-ref'; e._orient = e.orient || 'arc-portrait';
    } else if (!heroSeen[p]) {
      e._size = 'sz-hero'; e._orient = e.orient || 'arc-landscape'; heroSeen[p] = true;
    } else {
      e._size = 'sz-std';
      if (!stdCount[p]) stdCount[p] = 0;
      e._orient = e.orient || ((stdCount[p] % 2 === 0) ? 'arc-landscape' : 'arc-portrait');
      stdCount[p]++;
    }

    // Position — mobile uses fixed positions designed to fit the viewport
    if (mobile) {
      var mo = ARC_MOBILE_OFFSETS[i % ARC_MOBILE_OFFSETS.length];
      e._x = mo[0]; e._y = mo[1];
    } else if (isRef) {
      var c1 = centers[e.tags[0]] || { x: 0, y: 0 };
      var c2 = centers[e.tags[1]] || c1;
      var key = e.tags[0] + '|' + e.tags[1];
      if (!refCount[key]) refCount[key] = 0;
      var j = ARC_REF_JITTER[refCount[key] % ARC_REF_JITTER.length];
      refCount[key]++;
      e._x = Math.round((c1.x + c2.x) / 2 + j[0]);
      e._y = Math.round((c1.y + c2.y) / 2 + j[1]);
    } else {
      var c = centers[p] || { x: 0, y: 0 };
      if (!tagCount[p]) tagCount[p] = 0;
      var off = ARC_CLUSTER_OFFSETS[tagCount[p] % ARC_CLUSTER_OFFSETS.length];
      tagCount[p]++;
      e._x = c.x + Math.round(off[0] * innerScale);
      e._y = c.y + Math.round(off[1] * innerScale);
    }
  });
}

function arcBuildPanelHTML(e) {
  var c = '';
  c += '<div class="arc-panel-tag">' + e.etiqueta + '</div>';
  c += '<div class="arc-panel-date">' + e.fecha + '</div>';
  c += '<h2 class="arc-panel-title">' + e.titulo + '</h2>';
  if ((e.tipo === 'foto' || e.tipo === 'mixto') && e.imagen) {
    c += '<img class="arc-panel-img" src="' + e.imagen + '" alt="' + (e.imageAlt||e.titulo||'') + '" loading="lazy">';
  }
  if ((e.tipo === 'video' || e.tipo === 'mixto') && e.videoUrl) {
    c += '<div class="arc-panel-video"><iframe src="' + e.videoUrl + '" allowfullscreen></iframe></div>';
  }
  c += '<p class="arc-panel-text">' + e.texto + '</p>';
  return c;
}

function arcBuildPanelFooter(e) {
  var f = '';
  if (false && typeof BOOKS !== 'undefined' && e.cuadernoId) {
    var book = bookById(e.cuadernoId);
    if (book) {
      f += '<div style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-light);margin-bottom:.75rem">Cuaderno relacionado</div>';
      f += '<button class="arc-cuaderno-btn" onclick="arcCloseAll();go(\'detail\',' + book.id + ')">';
      f += '<div><div class="arc-cuaderno-btn-label">' + book.num + '</div>';
      f += '<div class="arc-cuaderno-btn-title">' + book.title + '</div></div>';
      f += '<span class="arc-cuaderno-btn-arrow">&#8594;</span>';
      f += '</button>';
    }
  }
  return f;
}

function renderArchivo() {
  var canvas = document.getElementById('arc-canvas');
  if (!canvas || typeof ARCHIVO === 'undefined') return;
  arcComputePositions(ARCHIVO);
  var html = '';
  ARCHIVO.forEach(function(e, i) {
    var x = e._x || 0, y = e._y || 0;
    var sz = e._size || 'sz-std', or = e._orient || 'arc-portrait';
    var style = 'left:' + x + 'px;top:' + y + 'px';
    var oc = 'arcOpen(' + i + ')';
    if (e.tipo === 'foto' || e.tipo === 'mixto') {
      html += '<div class="arc-card arc-card-foto ' + sz + ' ' + or + '" style="' + style + '" onclick="' + oc + '">';
      html += '<div class="arc-hover-overlay"></div>';
      if (e.imagen) html += '<img src="' + e.imagen + '" alt="' + (e.imageAlt||'') + '" loading="lazy">';
      if (e.tipo === 'mixto') html += '<div style="position:absolute;bottom:8px;right:8px;background:rgba(17,16,16,.6);color:#fff;font-size:9px;letter-spacing:.12em;padding:3px 6px;text-transform:uppercase">&#9654; Video</div>';
      html += '</div>';
    } else if (e.tipo === 'video') {
      html += '<div class="arc-card arc-card-video ' + sz + ' ' + or + '" style="' + style + '" onclick="' + oc + '">';
      html += '<div class="arc-hover-overlay"></div>';
      html += '<div class="arc-card-video-inner">';
      html += '<span class="arc-card-play">&#9654;</span>';
      html += '<span class="arc-card-vlabel">' + e.etiqueta + '</span>';
      html += '</div></div>';
    }
  });
  canvas.innerHTML = html;
  arcBindPan();
}

function arcBindPan() {
  if (arcInited) return;
  arcInited = true;
  var page = document.getElementById('page-archivo');
  if (!page) return;
  page.addEventListener('mousedown', function(e) {
    if (e.target.closest('.arc-sidebar,.arc-overlay')) return;
    if (document.getElementById('arc-sidebar').classList.contains('open')) return;
    arcState.dragging = true;
    arcState.moved = false;
    arcState.startX = e.clientX - arcState.panX;
    arcState.startY = e.clientY - arcState.panY;
  });
  window.addEventListener('mousemove', function(e) {
    if (!arcState.dragging) return;
    var nx = e.clientX - arcState.startX;
    var ny = e.clientY - arcState.startY;
    if (Math.abs(nx - arcState.panX) > 4 || Math.abs(ny - arcState.panY) > 4) arcState.moved = true;
    arcState.panX = nx; arcState.panY = ny;
    arcApply();
  });
  window.addEventListener('mouseup', function() { arcState.dragging = false; });
  page.addEventListener('wheel', function(e) {
    if (document.getElementById('arc-sidebar').classList.contains('open')) return;
    e.preventDefault();
    arcState.panX -= e.deltaX;
    arcState.panY -= e.deltaY;
    arcApply();
  }, {passive:false});
  var t0 = null;
  page.addEventListener('touchstart', function(e) {
    if (e.target.closest('.arc-modal')) return;
    if (document.getElementById('arc-modal').classList.contains('open')) return;
    if (e.touches.length !== 1) return;
    t0 = e.touches[0]; arcState.moved = false;
  }, {passive:true});
  page.addEventListener('touchmove', function(e) {
    if (e.target.closest('.arc-modal')) return;
    if (document.getElementById('arc-modal').classList.contains('open')) return;
    if (!t0 || e.touches.length !== 1) return;
    var t = e.touches[0];
    var dx = t.clientX - t0.clientX, dy = t.clientY - t0.clientY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      arcState.moved = true;
      arcState.panX += dx; arcState.panY += dy;
      arcApply(); t0 = t;
      e.preventDefault();
    }
  }, {passive:false});
  page.addEventListener('touchend', function() { t0 = null; });
}

function arcCenterCanvas() {
  arcState.panX = window.innerWidth / 2;
  arcState.panY = (window.innerHeight - 60) / 2;
  arcApply();
}

function arcApply() {
  var c = document.getElementById('arc-canvas');
  if (c) c.style.transform = 'translate(' + arcState.panX + 'px,' + arcState.panY + 'px)';
}

function arcOpen(idx) {
  if (arcState.moved) return;
  var e = ARCHIVO[idx];
  if (!e) return;
  var content = arcBuildPanelHTML(e);
  var footer  = arcBuildPanelFooter(e);
  if (window.innerWidth < 768) {
    document.getElementById('arc-modal-inner').innerHTML = content;
    document.getElementById('arc-modal-footer').innerHTML = footer;
    document.getElementById('arc-modal').classList.add('open');
    document.getElementById('arc-modal-overlay').classList.add('show');
  } else {
    document.getElementById('arc-sidebar-inner').innerHTML = content;
    document.getElementById('arc-sidebar-footer').innerHTML = footer;
    document.getElementById('arc-sidebar').classList.add('open');
    document.getElementById('arc-overlay').classList.add('show');
  }
}

function arcCloseAll() { arcCloseSidebar(); arcCloseModal(); }

function arcCloseSidebar() {
  document.getElementById('arc-sidebar').classList.remove('open');
  document.getElementById('arc-overlay').classList.remove('show');
}

function arcCloseModal() {
  document.getElementById('arc-modal').classList.remove('open');
  document.getElementById('arc-modal-overlay').classList.remove('show');
}
