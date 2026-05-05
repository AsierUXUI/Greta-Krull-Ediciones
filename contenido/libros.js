/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  GRETA KRULL EDICIONES — Catálogo de libros                            ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║                                                                          ║
 * ║  📖 CÓMO USAR ESTE ARCHIVO                                              ║
 * ║                                                                          ║
 * ║  Este es el archivo principal para gestionar el catálogo de libros.     ║
 * ║  Solo hay que editarlo cuando:                                           ║
 * ║    · Se añade un libro nuevo                                             ║
 * ║    · Cambia el número de ejemplares disponibles                          ║
 * ║    · Se actualiza un enlace de compra                                    ║
 * ║    · Se añade información (sinopsis, índice, etc.) a un libro            ║
 * ║                                                                          ║
 * ║  Para añadir un libro nuevo → copiar la PLANTILLA del final del archivo  ║
 * ║                                                                          ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  ESTADOS POSIBLES DE UN LIBRO                                           ║
 * ║                                                                          ║
 * ║   "available"  → publicado y disponible para compra                      ║
 * ║   "upcoming"   → en preparación (próximamente)                           ║
 * ║   "announced"  → anunciado, sin fecha confirmada                         ║
 * ║                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

var BOOKS = [

  // ─────────────────────────────────────────────────────────────────────────
  // N.º 1 · Artaud y Prevel
  // ─────────────────────────────────────────────────────────────────────────
    ,{
    id:   1,
    num:  "N.º 1",
    date: "Marzo 2026",
    status: "available",

    title:  "Artaud y Prevel",
    authors: [
      { name: "Miguel Vega Manrique", role: "Ensayo" },
      { name: "Jacques Prevel", role: "Poemas · traducción del francés" }
    ],
    authorByline: "Miguel Vega Manrique · Jacques Prevel",

    descShort:   "Primera edición en español de la poesía de Jacques Prevel, con ensayo crítico sobre la dramática de la adicción.",
    descCatalog: "Ensayo sobre la dramática de la adicción seguido de la primera edición bilingüe en español de <em>Diez Poemas Mortales</em>. Garamond. Papel verjurado ahuesado. Rústica encolada.",

    coverImage: "./images/artaud-cover.jpg",

    collection:  "Cuadernos Poesía y Traducción",
    subtitle:    "Un paseo por la dramática de la adicción",
    subtitleSub: null,

    copiesTotal:     100,
    copiesRemaining: 66,

    quote:    "«Prevel no era un epígono de Artaud. Era su interlocutor extremo.»",
    synopsis: null,
    contents: null,
    specs:    null,
    colophon: null,

    purchaseUrl:   "https://www.iberlibro.com/primera-edicion/ARTAUD-PREVEL-paseo-dram%C3%A1tica-adicci%C3%B3n-MIGUEL/32408732281/bd",
    purchaseLabel: "IberLibro",
    purchaseDesc:  "Compra directa. Envío internacional disponible.",

    previewPages: null,

    titleCatalog:   "Artaud y Prevel",
    coverHtml:      '<div class="bo">— □□□ —</div><div class="bt">Artaud y<br>Prevel</div><div class="bo">—</div><div class="bi">Manrique</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">Artaud y<br>Prevel</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Manrique</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // N.º 2 · Carta contra la Cábala
  // ─────────────────────────────────────────────────────────────────────────
    ,{
    id:   2,
    num:  "N.º 2",
    date: "2026",
    status: "upcoming",

    title:  "Carta contra la Cábala",
    authors: [
      { name: "Antonin Artaud", role: "Ensayo" },
      { name: "Miguel Vega Manrique", role: "Traductor" }
    ],
    authorByline: "Antonin Artaud · Miguel Vega Manrique",

    descShort:   "Edición bilingüe anotada. Incluye estudio preliminar.",
    descCatalog: "Edición bilingüe anotada. Primera traducción al español de este escrito desconocido de Antonin Artaud, exhumado desde la correspondencia con quien fuera su interlocutor privilegiado, Jacques Prevel.",

    coverImage: null,

    collection:  "Cuadernos Poesía y Traducción",
    subtitle:    "Dirigida a Jacques Prevel",
    subtitleSub: null,

    copiesTotal:     100,
    copiesRemaining: null,

    quote:    null,
    synopsis: null,
    contents: null,
    specs:    null,
    colophon: null,

    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    previewPages: null,

    titleCatalog:   "Carta contra la Cábala",
    coverHtml:      '<div class="bo">— □□□ —</div><div class="bt">Carta contra<br>la Cábala</div><div class="bo">—</div><div class="bi">Artaud</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">Carta contra<br>la Cábala</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Artaud</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // N.º 3 · Veinte cartas sobre la poesía
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    num: "N.º 3",
    date: "2026",
    collection: "Cuadernos Poesía y Traducción",
    status: "upcoming",

    title: "Veinte cartas sobre la poesía",
    titleCatalog: "Veinte cartas sobre la poesía",
    subtitle: null,
    subtitleSub: null,

    authors: [{ name: "Stéphane Mallarmé", role: "" }],
    authorByline: "Stéphane Mallarmé",

    copiesTotal:     100,
    copiesRemaining: null,

    descShort:   "Traducción y estudio de las cartas poéticas de Mallarmé. Edición bilingüe.",
    descCatalog: "Traducción y estudio de las cartas poéticas de Mallarmé. Edición bilingüe francés–español.",
    quote:       null,
    synopsis:    null,
    contents:    null,
    specs:       null,
    colophon:    null,
    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    coverHtml: '<div class="bo">— □□□ —</div><div class="bt">Veinte cartas<br>sobre la poesía</div><div class="bo">—</div><div class="bi">Mallarmé</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">Veinte cartas<br>sobre la poesía</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Mallarmé</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // N.º 4 · La última alegría de Baudelaire
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    num: "N.º 4",
    date: "2026",
    collection: "Cuadernos Poesía y Traducción",
    status: "announced",

    title: "La última alegría de Baudelaire",
    titleCatalog: "La última alegría de Charles Baudelaire",
    subtitle: null,
    subtitleSub: null,

    authors: [{ name: "Philippe Muray", role: "" }],
    authorByline: "Philippe Muray",

    copiesTotal:     100,
    copiesRemaining: null,

    descShort:   "Ensayo crítico. Primera traducción al español.",
    descCatalog: "Ensayo crítico. Primera traducción al español.",
    quote:       null,
    synopsis:    null,
    contents:    null,
    specs:       null,
    colophon:    null,
    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    coverHtml: '<div class="bo">— □□□ —</div><div class="bt">La última alegría<br>de Baudelaire</div><div class="bo">—</div><div class="bi">Philippe Muray</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">La última alegría<br>de Baudelaire</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Philippe Muray</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
  }

  /*
  ╔══════════════════════════════════════════════════════════════════════════╗
  ║  PLANTILLA — NUEVO LIBRO                                                ║
  ║                                                                          ║
  ║  1. Selecciona desde ▼ INICIO COPIA hasta FIN COPIA ▲ (inclusive)      ║
  ║  2. Copia y pega justo encima de la línea   ];   del final              ║
  ║  3. Rellena solo los campos marcados como OBLIGATORIO                   ║
  ║  4. Sube la imagen de portada a la carpeta images/                      ║
  ║  5. Guarda, commitea y pushea — aparece automáticamente                 ║
  ╚══════════════════════════════════════════════════════════════════════════╝

  ▼ INICIO COPIA ─────────────────────────────────────────────────────────────
  ,{
    // ── OBLIGATORIO ──────────────────────────────────────────────────────

    id:   5,                          // número correlativo: 5, 6, 7…
    num:  "N.º 5",                    // igual que id pero con formato
    date: "2026",                     // año de publicación o "Próximamente"

    status: "upcoming",
    // "available"  → publicado, se puede solicitar
    // "upcoming"   → en preparación, visible pero no disponible
    // "announced"  → solo anunciado, sin fecha

    title:  "Título del libro",
    authors: [
      { name: "Nombre Apellido", role: "Ensayo" },
      // si hay más autores, añadir más líneas iguales
    ],
    authorByline: "Nombre Apellido",  // nombres separados por · para listados

    descShort:   "Una frase breve que aparece en la cuadrícula de inicio.",
    descCatalog: "Descripción más completa para la página de catálogo.",

    coverImage: "./images/nombre-portada.jpg",
    // Sube la imagen a images/ con este mismo nombre exacto

    // ── OPCIONAL — rellenar cuando esté disponible ────────────────────────

    collection: "Cuadernos Poesía y Traducción",  // nombre de la colección
    subtitle:    null,                // subtítulo corto o null
    subtitleSub: null,                // subtítulo secundario o null

    copiesTotal:     100,             // tirada total
    copiesRemaining: null,            // ejemplares que quedan (actualizar al vender)

    quote:    null,                   // cita destacada (texto entrecomillado) o null
    synopsis: null,                   // array de párrafos: ["párrafo 1", "párrafo 2"]
    contents: null,                   // índice: [{ n: "I", title: "Capítulo", sub: "subtítulo" }]
    specs:    null,                   // ficha técnica: [{ k: "Páginas", v: "96" }]
    colophon: null,                   // nota de pie de edición o null

    purchaseUrl:   null,              // enlace externo de compra o null
    purchaseLabel: null,              // nombre del enlace, ej: "IberLibro"
    purchaseDesc:  null,              // descripción breve del enlace o null

    previewPages:  null,              // páginas para el visor: ["./images/p1.jpg", ...]

    titleCatalog:   "Título del libro",  // igual que title (puede incluir <br>)
    coverHtml:      '<div class="bo">— □□□ —</div><div class="bt">Título<br>del libro</div><div class="bo">—</div><div class="bi">Apellido</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">Título<br>del libro</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Apellido</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
  }
  ▲ FIN COPIA ─────────────────────────────────────────────────────────────────
  */

];