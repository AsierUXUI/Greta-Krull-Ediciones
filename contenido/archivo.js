/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  GRETA KRULL EDICIONES — Archivo                                        ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║                                                                          ║
 * ║  📰 CÓMO USAR ESTE ARCHIVO                                              ║
 * ║                                                                          ║
 * ║  Aquí se gestionan las entradas del Archivo (fotos, vídeos).            ║
 * ║  Las entradas más recientes van primero.                                 ║
 * ║                                                                          ║
 * ║  Para añadir una entrada nueva → copiar la PLANTILLA del final          ║
 * ║                                                                          ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  TIPOS DE ENTRADA                                                        ║
 * ║                                                                          ║
 * ║   "foto"   → imagen + texto                                              ║
 * ║   "video"  → vídeo incrustado + texto                                    ║
 * ║   "mixto"  → imagen + vídeo + texto                                      ║
 * ║                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

var ARCHIVO = [

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 1 · Retrato de Prevel — HÉROE del tag "prevel"
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "foto",
    numero:   "N.º 1",
    fecha:    "Marzo 2026",
    etiqueta: "Fotografía · N.º 1",
    titulo:   "El retrato de Prevel: historia de una imagen",
    texto:    "La imagen de Jacques Prevel que abre el cuaderno fue localizada en los fondos del archivo de la Bibliothèque nationale de France. Un retrato tardío, de finales de los cuarenta, cuando Prevel ya llevaba años en la órbita de Artaud. La decisión de incluirlo no fue ornamental.",
    imagen:   "./images/artaud-portrait.jpg",
    enlace:   null,
    tags:     ["prevel"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 2 · Conversación en vídeo — HÉROE del tag "proceso-editorial"
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "video",
    numero:   "N.º 1",
    fecha:    "Próximamente",
    etiqueta: "Vídeo · N.º 1",
    titulo:   "«Artaud y Prevel no son una anécdota» — Conversación con Miguel Vega Manrique",
    texto:    "El editor del primer cuaderno explica las razones que llevaron a elegir a Prevel como punto de partida de la colección, y el proceso de traducción de los <em>Dix Poèmes Mortels</em>.",
    // Cuando el vídeo esté disponible, pegar aquí el enlace de YouTube o Vimeo:
    // Ejemplo YouTube: "https://www.youtube.com/embed/ID_DEL_VIDEO"
    // Ejemplo Vimeo:   "https://player.vimeo.com/video/ID_DEL_VIDEO"
    videoUrl: null,
    enlace:   null,
    tags:     ["proceso-editorial"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 3 · Retrato de Artaud — HÉROE del tag "teatro-crueldad"
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "foto",
    numero:   "N.º 1",
    fecha:    "Marzo 2026",
    etiqueta: "Fotografía · N.º 1",
    titulo:   "[PLACEHOLDER] Artaud: el cuerpo como escenario",
    texto:    "Texto de ejemplo. La fotografía muestra a Antonin Artaud en una de las exposiciones múltiples que documentaron su pensamiento sobre la presencia física en el teatro.",
    imagen:   "./images/artaud-portrait.jpg",
    imageAlt: "Retrato múltiple de Antonin Artaud",
    enlace:   null,
    tags:     ["teatro-crueldad"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 4 · El opio — ESTÁNDAR del tag "proceso-editorial"
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "foto",
    numero:   "N.º 1",
    fecha:    "Febrero 2026",
    etiqueta: "Documento · N.º 1",
    titulo:   "[PLACEHOLDER] Papaver Somniferum: el opio como materia y metáfora",
    texto:    "Texto de ejemplo. El frasco de Opium d'Egypte aparece como uno de los objetos documentales que enmarcan la investigación sobre la adicción en el cuaderno.",
    imagen:   "./images/artaud-cover.jpg",
    imageAlt: "Frasco farmacéutico de Opium d'Egypte, Papaver Somniferum",
    enlace:   null,
    tags:     ["proceso-editorial"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 5 · Vídeo — ESTÁNDAR del tag "teatro-crueldad"
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "video",
    numero:   "N.º 1",
    fecha:    "Próximamente",
    etiqueta: "Vídeo · N.º 1",
    titulo:   "[PLACEHOLDER] La crueldad como sistema: lectura del primer manifiesto",
    texto:    "Texto de ejemplo para una entrada de vídeo dentro del clúster teatro-crueldad.",
    videoUrl: null,
    enlace:   null,
    tags:     ["teatro-crueldad"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 6 · Referencia cruzada (TAMAÑO REF — 2 tags)
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "foto",
    numero:   "N.º 1",
    fecha:    "Enero 2026",
    etiqueta: "Fotografía · N.º 1",
    titulo:   "[PLACEHOLDER] Las primeras galeradas: proceso y corrección",
    texto:    "Texto de ejemplo para una entrada de referencia cruzada. Aparece más pequeña porque tiene dos tags: conecta dos temas del archivo.",
    imagen:   "./images/artaud-portrait.jpg",
    imageAlt: "Referencia cruzada",
    enlace:   null,
    tags:     ["prevel", "proceso-editorial"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 7 · Referencia cruzada (TAMAÑO REF — 2 tags)
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:     "foto",
    numero:   "N.º 1",
    fecha:    "Enero 2026",
    etiqueta: "Documento · N.º 1",
    titulo:   "[PLACEHOLDER] El lenguaje de Artaud en los márgenes de Prevel",
    texto:    "Texto de ejemplo para una referencia cruzada entre teatro-crueldad y prevel.",
    imagen:   "./images/artaud-cover.jpg",
    imageAlt: "Referencia cruzada Artaud-Prevel",
    enlace:   null,
    tags:     ["teatro-crueldad", "prevel"],
    cuadernoId: 1
  }

  /*
  ╔══════════════════════════════════════════════════════════════════════════╗
  ║  PLANTILLA PARA NUEVA ENTRADA — copiar desde la coma de abajo           ║
  ╚══════════════════════════════════════════════════════════════════════════╝

  // ── Fotografía ──
  ,{
    tipo:     "foto",
    numero:   "N.º 1",           // número del cuaderno relacionado
    fecha:    "Abril 2026",
    etiqueta: "Fotografía · N.º 1",
    titulo:   "Título de la entrada",
    texto:    "Descripción de la fotografía.",
    imagen:   "./images/nombre-del-archivo.jpg",
    imageAlt: "Descripción breve de la imagen",
    enlace:   null,
    tags:     ["nombre-del-tema"], // agrupación interna — invisible al usuario
    cuadernoId: 1                  // id del libro relacionado (1, 2, 3…)
  }

  // ── Vídeo ──
  ,{
    tipo:     "video",
    numero:   "N.º 2",
    fecha:    "Mayo 2026",
    etiqueta: "Vídeo · N.º 2",
    titulo:   "Título del vídeo",
    texto:    "Descripción del vídeo.",
    videoUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO",
    enlace:   null,
    tags:     ["nombre-del-tema"],
    cuadernoId: 2
  }

  // ── Mixto (imagen + vídeo) ──
  ,{
    tipo:     "mixto",
    numero:   "N.º 1",
    fecha:    "Junio 2026",
    etiqueta: "Documento · N.º 1",
    titulo:   "Título de la entrada",
    texto:    "Descripción.",
    imagen:   "./images/nombre-del-archivo.jpg",
    imageAlt: "Descripción de la imagen",
    videoUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO",
    enlace:   null,
    tags:     ["nombre-del-tema"],
    cuadernoId: 1
  }
  */

];
