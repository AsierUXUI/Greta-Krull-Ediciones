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
  {
    id: 1,
    num: "N.º 1",
    date: "Marzo 2026",
    collection: "Cuadernos Poesía y Traducción",
    status: "available",         // ← cambiar a "upcoming" o "announced" si procede

    title: "Artaud y Prevel",
    titleCatalog: "Artaud y Prevel",
    subtitle: "Un paseo por la dramática de la adicción",
    subtitleSub: "Jacques Prevel: Diario y poemas",

    authors: [
      { name: "Miguel Vega Manrique", role: "Ensayo" },
      { name: "Jacques Prevel",        role: "Poemas · traducción del francés" },
    ],
    authorByline: "Miguel Vega Manrique · Jacques Prevel",

    copiesTotal:     100,
    copiesRemaining: 66,         // ← actualizar cuando cambien los ejemplares disponibles

    descShort:   "Primera edición en español de la poesía de Prevel, con ensayo crítico sobre la dramática de la adicción.",
    descCatalog: "Ensayo sobre la dramática de la adicción seguido de la primera edición bilingüe en español de <em>Diez Poemas Mortales</em>. Garamond. Papel verjurado ahuesado. Rústica encolada.",
    quote:       "«Prevel no era un epígono de Artaud. Era su interlocutor extremo.»",

    synopsis: [
      "El primer número de Cuadernos Poesía y Traducción inaugura el catálogo de Greta Krull Ediciones con una apuesta de recuperación y lectura crítica: la figura de Jacques Prevel (1915–1951), poeta francés de posguerra cuya obra poética permanece todavía inédita en lengua española.",
      "El volumen contiene, en la primera parte, un ensayo que aborda la lectura del diario <em>En compagnie d'Antonin Artaud</em>, situando a Prevel en el contexto de los últimos años de Artaud en París tras su salida del hospital psiquiátrico de Rodez. Lejos de reducirse a la condición de testigo, Prevel emerge como conciencia paralela, figura limítrofe cuya escritura dialoga con la experiencia radical del teatro de la crueldad, la enfermedad, la marginalidad y la supervivencia literaria.",
      "La segunda parte del libro presenta, por primera vez en español, una antología bilingüe de diez poemas de <em>Poèmes Mortels</em> (1945), el primer libro publicado por Prevel. Esta edición enfrenta el texto francés con su traducción española, respetando ritmo, disposición y tensión original.",
      "Cuidada en todos sus aspectos materiales —compuesta en Garamond, impresa en papel verjurado ahuesado y encuadernada en rústica— esta primera entrega inaugura una colección que aspira a tender puentes entre poesía y traducción desde el rigor filológico, la exigencia crítica y el respeto absoluto por la singularidad de cada obra.",
      "Greta Krull Ediciones inicia así un proyecto que combina investigación, recuperación y edición literaria con vocación de permanencia."
    ],

    contents: [
      { n: "I",  title: "Artaud y Prevel: un paseo por la dramática de la adicción", sub: "Ensayo · Miguel Vega Manrique" },
      { n: "II", title: "Diez Poemas Mortales / Dix Poèmes Mortels (1945)",           sub: "Edición bilingüe · Jacques Prevel · Con retrato de Gustaf Bolin" }
    ],

    specs: [
      { k: "Colección",      v: "Cuadernos Poesía y Traducción" },
      { k: "Número",         v: "N.º 1 · Marzo 2026" },
      { k: "Tipografía",     v: "<em>Garamond</em>" },
      { k: "Papel",          v: "<em>Verjurado ahuesado</em>" },
      { k: "Encuadernación", v: "Rústica encolada" },
      { k: "Edición",        v: "Bilingüe fr.–es." },
    ],

    colophon: "Impreso en Madrid. Primera edición, marzo de 2026.<br>100 ejemplares numerados a mano. No se prevé reimpresión.<br>Primera traducción al español de la poesía de Jacques Prevel.",

    purchaseUrl:   "https://www.iberlibro.com/primera-edicion/ARTAUD-PREVEL-paseo-dram%C3%A1tica-adicci%C3%B3n-MIGUEL/32408732281/bd",
    purchaseLabel: "IberLibro",
    purchaseDesc:  "Compra directa. Envío internacional disponible.",

    // Imagen de portada real (ruta relativa desde la raíz del sitio)
    coverImage: "./images/artaud-cover.jpg",

    // Páginas para la previsualización en flipbook
    previewPages: [
      "./images/preview/artaud-preview-p03.jpg",
      "./images/preview/artaud-preview-p05.jpg",
      "./images/preview/artaud-preview-p27.jpg",
      "./images/preview/artaud-preview-p29.jpg",
      "./images/preview/artaud-teaser-01.jpg",
      "./images/preview/artaud-teaser-02.jpg"
    ],

    // Portada grande (héroe y detalle) — no modificar salvo cambio de título/autor
    coverHtml: '<div class="bo">— □□□ —</div><div class="bt">Artaud y Prevel</div><div class="bo">—</div><div class="bi">Un paseo por la<br>dramática de<br>la adicción</div><div class="bo" style="margin:8px 0">□</div><div class="bs">Miguel Vega Manrique</div><div class="bo" style="margin:7px 0">— □ —</div><div class="bi" style="font-size:6.5px">Seguido de Diez</div><div class="bt" style="font-size:7px;font-style:italic;margin:2px 0">Poemas Mortales</div><div class="bi" style="font-size:6.5px">de Jacques Prevel</div><div class="bs" style="font-size:5.5px;margin-top:2px">(edición bilingüe)</div><div class="bo" style="margin:9px 0 3px">— □□□ —</div><div class="bs" style="font-size:5.5px">Cuadernos Poesía y Traducción</div><div class="bs" style="font-size:5.5px">Madrid · Marzo 2026 · N.º 1</div>',

    // Portada pequeña (cuadrícula y catálogo) — no modificar salvo cambio de título/autor
    coverHtmlSmall: '<div class="bo" style="font-size:8px">— □□□ —</div><div class="bt">Artaud y Prevel</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Un paseo por la<br>dramática<br>de la adicción</div><div class="bo">□</div><div class="bs" style="font-size:5.5px;margin-top:3px">Vega Manrique</div>'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // N.º 2 · Carta contra la Cábala
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    num: "N.º 2",
    date: "Próximamente",
    collection: "Cuadernos Poesía y Traducción",
    status: "upcoming",

    title: "Carta contra la Cábala",
    titleCatalog: "Carta contra la Cábala<br>dirigida a Jacques Prevel",
    subtitle: null,
    subtitleSub: null,

    authors: [{ name: "Antonin Artaud", role: "" }],
    authorByline: "Antonin Artaud",

    copiesTotal:     100,
    copiesRemaining: null,       // ← rellenar cuando se publique

    descShort:   "Edición bilingüe. Primera traducción al español de este texto capital.",
    descCatalog: "Edición bilingüe. Primera traducción al español de este texto capital de Artaud, revisitado desde la correspondencia con Prevel.",
    quote:       null,
    synopsis:    null,
    contents:    null,
    specs:       null,
    colophon:    null,
    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    coverHtml: '<div class="bo">— □□□ —</div><div class="bt">Carta contra<br>la Cábala</div><div class="bo">—</div><div class="bi">Antonin Artaud</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">Carta contra<br>la Cábala</div><div class="bo">—</div><div class="bi" style="font-size:6px">Antonin Artaud</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
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
