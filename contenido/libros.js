/**
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 * â  GRETA KRULL EDICIONES â CatÃ¡logo de libros                            â
 * â âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ£
 * â                                                                          â
 * â  ð CÃMO USAR ESTE ARCHIVO                                              â
 * â                                                                          â
 * â  Este es el archivo principal para gestionar el catÃ¡logo de libros.     â
 * â  Solo hay que editarlo cuando:                                           â
 * â    Â· Se aÃ±ade un libro nuevo                                             â
 * â    Â· Cambia el nÃºmero de ejemplares disponibles                          â
 * â    Â· Se actualiza un enlace de compra                                    â
 * â    Â· Se aÃ±ade informaciÃ³n (sinopsis, Ã­ndice, etc.) a un libro            â
 * â                                                                          â
 * â  Para aÃ±adir un libro nuevo â copiar la PLANTILLA del final del archivo  â
 * â                                                                          â
 * â âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ£
 * â  ESTADOS POSIBLES DE UN LIBRO                                           â
 * â                                                                          â
 * â   "available"  â publicado y disponible para compra                      â
 * â   "upcoming"   â en preparaciÃ³n (prÃ³ximamente)                           â
 * â   "announced"  â anunciado, sin fecha confirmada                         â
 * â                                                                          â
 * ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
 */

var BOOKS = [

  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // N.Âº 1 Â· Artaud y Prevel
  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  {
    id: 1,
    num: "N.Âº 1",
    date: "Marzo 2026",
    collection: "Cuadernos PoesÃ­a y TraducciÃ³n",
    status: "available",         // â cambiar a "upcoming" o "announced" si procede

    title: "Artaud y Prevel",
    titleCatalog: "Artaud y Prevel",
    subtitle: "Un paseo por la dramÃ¡tica de la adicciÃ³n",
    subtitleSub: "Jacques Prevel: Diario y poemas",

    authors: [
      { name: "Miguel Vega Manrique", role: "Ensayo" },
      { name: "Jacques Prevel",        role: "Poemas Â· traducciÃ³n del francÃ©s" },
    ],
    authorByline: "Miguel Vega Manrique Â· Jacques Prevel",

    copiesTotal:     100,
    copiesRemaining: 66,         // â actualizar cuando cambien los ejemplares disponibles

    descShort:   "Primera ediciÃ³n en espaÃ±ol de la poesÃ­a de Prevel, con ensayo crÃ­tico sobre la dramÃ¡tica de la adicciÃ³n.",
    descCatalog: "Ensayo sobre la dramÃ¡tica de la adicciÃ³n seguido de la primera ediciÃ³n bilingÃ¼e en espaÃ±ol de <em>Diez Poemas Mortales</em>. Garamond. Papel verjurado ahuesado. RÃºstica encolada.",
    quote:       "Â«Prevel no era un epÃ­gono de Artaud. Era su interlocutor extremo.Â»",

    synopsis: [
      "El primer nÃºmero de Cuadernos PoesÃ­a y TraducciÃ³n inaugura el catÃ¡logo de Greta Krull Ediciones con una apuesta de recuperaciÃ³n y lectura crÃ­tica: la figura de Jacques Prevel (1915â1951), poeta francÃ©s de posguerra cuya obra poÃ©tica permanece todavÃ­a inÃ©dita en lengua espaÃ±ola.",
      "El volumen contiene, en la primera parte, un ensayo que aborda la lectura del diario <em>En compagnie d'Antonin Artaud</em>, situando a Prevel en el contexto de los Ãºltimos aÃ±os de Artaud en ParÃ­s tras su salida del hospital psiquiÃ¡trico de Rodez. Lejos de reducirse a la condiciÃ³n de testigo, Prevel emerge como conciencia paralela, figura limÃ­trofe cuya escritura dialoga con la experiencia radical del teatro de la crueldad, la enfermedad, la marginalidad y la supervivencia literaria.",
      "La segunda parte del libro presenta, por primera vez en espaÃ±ol, una antologÃ­a bilingÃ¼e de diez poemas de <em>PoÃ¨mes Mortels</em> (1945), el primer libro publicado por Prevel. Esta ediciÃ³n enfrenta el texto francÃ©s con su traducciÃ³n espaÃ±ola, respetando ritmo, disposiciÃ³n y tensiÃ³n original.",
      "Cuidada en todos sus aspectos materiales âcompuesta en Garamond, impresa en papel verjurado ahuesado y encuadernada en rÃºsticaâ esta primera entrega inaugura una colecciÃ³n que aspira a tender puentes entre poesÃ­a y traducciÃ³n desde el rigor filolÃ³gico, la exigencia crÃ­tica y el respeto absoluto por la singularidad de cada obra.",
      "Greta Krull Ediciones inicia asÃ­ un proyecto que combina investigaciÃ³n, recuperaciÃ³n y ediciÃ³n literaria con vocaciÃ³n de permanencia."
    ],

    contents: [
      { n: "I",  title: "Artaud y Prevel: un paseo por la dramÃ¡tica de la adicciÃ³n", sub: "Ensayo Â· Miguel Vega Manrique" },
      { n: "II", title: "Diez Poemas Mortales / Dix PoÃ¨mes Mortels (1945)",           sub: "EdiciÃ³n bilingÃ¼e Â· Jacques Prevel Â· Con retrato de Gustaf Bolin" }
    ],

    specs: [
      { k: "ColecciÃ³n",      v: "Cuadernos PoesÃ­a y TraducciÃ³n" },
      { k: "NÃºmero",         v: "N.Âº 1 Â· Marzo 2026" },
      { k: "TipografÃ­a",     v: "<em>Garamond</em>" },
      { k: "Papel",          v: "<em>Verjurado ahuesado</em>" },
      { k: "EncuadernaciÃ³n", v: "RÃºstica encolada" },
      { k: "EdiciÃ³n",        v: "BilingÃ¼e fr.âes." },
    ],

    colophon: "Impreso en Madrid. Primera ediciÃ³n, marzo de 2026.<br>100 ejemplares numerados a mano. No se prevÃ© reimpresiÃ³n.<br>Primera traducciÃ³n al espaÃ±ol de la poesÃ­a de Jacques Prevel.",

    purchaseUrl:   "https://www.iberlibro.com/primera-edicion/ARTAUD-PREVEL-paseo-dram%C3%A1tica-adicci%C3%B3n-MIGUEL/32408732281/bd",
    purchaseLabel: "IberLibro",
    purchaseDesc:  "Compra directa. EnvÃ­o internacional disponible.",

    // Imagen de portada real (ruta relativa desde la raÃ­z del sitio)
    coverImage: "./images/artaud-cover.jpg",

    // PÃ¡ginas para la previsualizaciÃ³n en flipbook
    previewPages: [
      "./images/preview/artaud-preview-p03.jpg",
      "./images/preview/artaud-preview-p05.jpg",
      "./images/preview/artaud-preview-p27.jpg",
      "./images/preview/artaud-preview-p29.jpg",
      "./images/preview/artaud-teaser-01.jpg",
      "./images/preview/artaud-teaser-02.jpg"
    ],

    // Portada grande (hÃ©roe y detalle) â no modificar salvo cambio de tÃ­tulo/autor
    coverHtml: '<div class="bo">â â¡â¡â¡ â</div><div class="bt">Artaud y Prevel</div><div class="bo">â</div><div class="bi">Un paseo por la<br>dramÃ¡tica de<br>la adicciÃ³n</div><div class="bo" style="margin:8px 0">â¡</div><div class="bs">Miguel Vega Manrique</div><div class="bo" style="margin:7px 0">â â¡ â</div><div class="bi" style="font-size:6.5px">Seguido de Diez</div><div class="bt" style="font-size:7px;font-style:italic;margin:2px 0">Poemas Mortales</div><div class="bi" style="font-size:6.5px">de Jacques Prevel</div><div class="bs" style="font-size:5.5px;margin-top:2px">(ediciÃ³n bilingÃ¼e)</div><div class="bo" style="margin:9px 0 3px">â â¡â¡â¡ â</div><div class="bs" style="font-size:5.5px">Cuadernos PoesÃ­a y TraducciÃ³n</div><div class="bs" style="font-size:5.5px">Madrid Â· Marzo 2026 Â· N.Âº 1</div>',

    // Portada pequeÃ±a (cuadrÃ­cula y catÃ¡logo) â no modificar salvo cambio de tÃ­tulo/autor
    coverHtmlSmall: '<div class="bo" style="font-size:8px">â â¡â¡â¡ â</div><div class="bt">Artaud y Prevel</div><div class="bo">â</div><div class="bi" style="font-size:6.5px">Un paseo por la<br>dramÃ¡tica<br>de la adicciÃ³n</div><div class="bo">â¡</div><div class="bs" style="font-size:5.5px;margin-top:3px">Vega Manrique</div>'
  },

  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // N.Âº 2 Â· Carta contra la CÃ¡bala
  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  {
    id: 2,
    num: "N.Âº 2",
    date: "PrÃ³ximamente",
    collection: "Cuadernos PoesÃ­a y TraducciÃ³n",
    status: "upcoming",

    title: "Carta contra la CÃ¡bala",
    titleCatalog: "Carta contra la CÃ¡bala<br>dirigida a Jacques Prevel",
    subtitle: null,
    subtitleSub: null,

    authors: [{ name: "Antonin Artaud", role: "" }],
    authorByline: "Antonin Artaud",

    copiesTotal:     100,
    copiesRemaining: null,       // â rellenar cuando se publique

    descShort:   "EdiciÃ³n bilingÃ¼e. Primera traducciÃ³n al espaÃ±ol de este texto capital.",
    descCatalog: "EdiciÃ³n bilingÃ¼e. Primera traducciÃ³n al espaÃ±ol de este texto capital de Artaud, revisitado desde la correspondencia con Prevel.",
    quote:       null,
    synopsis:    null,
    contents:    null,
    specs:       null,
    colophon:    null,
    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    coverHtml: '<div class="bo">â â¡â¡â¡ â</div><div class="bt">Carta contra<br>la CÃ¡bala</div><div class="bo">â</div><div class="bi">Antonin Artaud</div><div class="bo" style="margin-top:8px">â â¡â¡â¡ â</div>',
    coverHtmlSmall: '<div class="bo">â â¡â¡â¡ â</div><div class="bt" style="font-size:6px">Carta contra<br>la CÃ¡bala</div><div class="bo">â</div><div class="bi" style="font-size:6px">Antonin Artaud</div><div class="bo" style="margin-top:5px">â â¡â¡â¡ â</div>'
  },

  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // N.Âº 3 Â· Veinte cartas sobre la poesÃ­a
  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  {
    id: 3,
    num: "N.Âº 3",
    date: "2026",
    collection: "Cuadernos PoesÃ­a y TraducciÃ³n",
    status: "upcoming",

    title: "Veinte cartas sobre la poesÃ­a",
    titleCatalog: "Veinte cartas sobre la poesÃ­a",
    subtitle: null,
    subtitleSub: null,

    authors: [{ name: "StÃ©phane MallarmÃ©", role: "" }],
    authorByline: "StÃ©phane MallarmÃ©",

    copiesTotal:     100,
    copiesRemaining: null,

    descShort:   "TraducciÃ³n y estudio de las cartas poÃ©ticas de MallarmÃ©. EdiciÃ³n bilingÃ¼e.",
    descCatalog: "TraducciÃ³n y estudio de las cartas poÃ©ticas de MallarmÃ©. EdiciÃ³n bilingÃ¼e francÃ©sâespaÃ±ol.",
    quote:       null,
    synopsis:    null,
    contents:    null,
    specs:       null,
    colophon:    null,
    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    coverHtml: '<div class="bo">â â¡â¡â¡ â</div><div class="bt">Veinte cartas<br>sobre la poesÃ­a</div><div class="bo">â</div><div class="bi">MallarmÃ©</div><div class="bo" style="margin-top:8px">â â¡â¡â¡ â</div>',
    coverHtmlSmall: '<div class="bo">â â¡â¡â¡ â</div><div class="bt" style="font-size:6px">Veinte cartas<br>sobre la poesÃ­a</div><div class="bo">â</div><div class="bi" style="font-size:6.5px">MallarmÃ©</div><div class="bo" style="margin-top:5px">â â¡â¡â¡ â</div>'
  },

  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // N.Âº 4 Â· La Ãºltima alegrÃ­a de Baudelaire
  // âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  {
    id: 4,
    num: "N.Âº 4",
    date: "2026",
    collection: "Cuadernos PoesÃ­a y TraducciÃ³n",
    status: "announced",

    title: "La Ãºltima alegrÃ­a de Baudelaire",
    titleCatalog: "La Ãºltima alegrÃ­a de Charles Baudelaire",
    subtitle: null,
    subtitleSub: null,

    authors: [{ name: "Philippe Muray", role: "" }],
    authorByline: "Philippe Muray",

    copiesTotal:     100,
    copiesRemaining: null,

    descShort:   "Ensayo crÃ­tico. Primera traducciÃ³n al espaÃ±ol.",
    descCatalog: "Ensayo crÃ­tico. Primera traducciÃ³n al espaÃ±ol.",
    quote:       null,
    synopsis:    null,
    contents:    null,
    specs:       null,
    colophon:    null,
    purchaseUrl:   null,
    purchaseLabel: null,
    purchaseDesc:  null,

    coverHtml: '<div class="bo">â â¡â¡â¡ â</div><div class="bt">La Ãºltima alegrÃ­a<br>de Baudelaire</div><div class="bo">â</div><div class="bi">Philippe Muray</div><div class="bo" style="margin-top:8px">â â¡â¡â¡ â</div>',
    coverHtmlSmall: '<div class="bo">â â¡â¡â¡ â</div><div class="bt" style="font-size:6px">La Ãºltima alegrÃ­a<br>de Baudelaire</div><div class="bo">â</div><div class="bi" style="font-size:6.5px">Philippe Muray</div><div class="bo" style="margin-top:5px">â â¡â¡â¡ â</div>'
  }

  /*
  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  â  PLANTILLA â NUEVO LIBRO                                                â
  â                                                                          â
  â  1. Selecciona desde â¼ INICIO COPIA hasta FIN COPIA â² (inclusive)      â
  â  2. Copia y pega justo encima de la lÃ­nea   ];   del final              â
  â  3. Rellena solo los campos marcados como OBLIGATORIO                   â
  â  4. Sube la imagen de portada a la carpeta images/                      â
  â  5. Guarda, commitea y pushea â aparece automÃ¡ticamente                 â
  ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

  â¼ INICIO COPIA âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  ,{
    // ââ OBLIGATORIO ââââââââââââââââââââââââââââââââââââââââââââââââââââââ

    id:   5,                          // nÃºmero correlativo: 5, 6, 7â¦
    num:  "N.Âº 5",                    // igual que id pero con formato
    date: "2026",                     // aÃ±o de publicaciÃ³n o "PrÃ³ximamente"

    status: "upcoming",
    // "available"  â publicado, se puede solicitar
    // "upcoming"   â en preparaciÃ³n, visible pero no disponible
    // "announced"  â solo anunciado, sin fecha

    title:  "TÃ­tulo del libro",
    authors: [
      { name: "Nombre Apellido", role: "Ensayo" },
      // si hay mÃ¡s autores, aÃ±adir mÃ¡s lÃ­neas iguales
    ],
    authorByline: "Nombre Apellido",  // nombres separados por Â· para listados

    descShort:   "Una frase breve que aparece en la cuadrÃ­cula de inicio.",
    descCatalog: "DescripciÃ³n mÃ¡s completa para la pÃ¡gina de catÃ¡logo.",

    coverImage: "./images/nombre-portada.jpg",
    // Sube la imagen a images/ con este mismo nombre exacto

    // ââ OPCIONAL â rellenar cuando estÃ© disponible ââââââââââââââââââââââââ

    collection: "Cuadernos PoesÃ­a y TraducciÃ³n",  // nombre de la colecciÃ³n
    subtitle:    null,                // subtÃ­tulo corto o null
    subtitleSub: null,                // subtÃ­tulo secundario o null

    copiesTotal:     100,             // tirada total
    copiesRemaining: null,            // ejemplares que quedan (actualizar al vender)

    quote:    null,                   // cita destacada (texto entrecomillado) o null
    synopsis: null,                   // array de pÃ¡rrafos: ["pÃ¡rrafo 1", "pÃ¡rrafo 2"]
    contents: null,                   // Ã­ndice: [{ n: "I", title: "CapÃ­tulo", sub: "subtÃ­tulo" }]
    specs:    null,                   // ficha tÃ©cnica: [{ k: "PÃ¡ginas", v: "96" }]
    colophon: null,                   // nota de pie de ediciÃ³n o null

    purchaseUrl:   null,              // enlace externo de compra o null
    purchaseLabel: null,              // nombre del enlace, ej: "IberLibro"
    purchaseDesc:  null,              // descripciÃ³n breve del enlace o null

    previewPages:  null,              // pÃ¡ginas para el visor: ["./images/p1.jpg", ...]

    titleCatalog:   "TÃ­tulo del libro",  // igual que title (puede incluir <br>)
    coverHtml:      '<div class="bo">â â¡â¡â¡ â</div><div class="bt">TÃ­tulo<br>del libro</div><div class="bo">â</div><div class="bi">Apellido</div><div class="bo" style="margin-top:8px">â â¡â¡â¡ â</div>',
    coverHtmlSmall: '<div class="bo">â â¡â¡â¡ â</div><div class="bt" style="font-size:6px">TÃ­tulo<br>del libro</div><div class="bo">â</div><div class="bi" style="font-size:6.5px">Apellido</div><div class="bo" style="margin-top:5px">â â¡â¡â¡ â</div>'
  }
  â² FIN COPIA âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  */

  ,{
    id:   6,
    num:  "N.º 6",
    date: "",
    status: "upcoming",

    title:  "titulo de prueba desde el panel del contenido",
    authors: [
      { name: "Asier", role: "Prueba" },
      { name: "Asier", role: "Asier" }
    ],
    authorByline: "Asier · Asier",

    descShort:   "Asier",
    descCatalog: "Asier",

    coverImage: null,

    collection:  "Cuadernos Poesía y Traducción",
    subtitle:    null,
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

    titleCatalog:   "titulo de prueba desde el panel del contenido",
    coverHtml:      '<div class="bo">— □□□ —</div><div class="bt">titulo de prueba desde<br>el panel del contenido</div><div class="bo">—</div><div class="bi">Asier</div><div class="bo" style="margin-top:8px">— □□□ —</div>',
    coverHtmlSmall: '<div class="bo">— □□□ —</div><div class="bt" style="font-size:6px">titulo de prueba desde<br>el panel del contenido</div><div class="bo">—</div><div class="bi" style="font-size:6.5px">Asier</div><div class="bo" style="margin-top:5px">— □□□ —</div>'
  }

];