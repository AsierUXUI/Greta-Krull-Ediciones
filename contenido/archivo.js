/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  GRETA KRULL EDICIONES — Archivo / Noticias                            ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║                                                                          ║
 * ║  📰 CÓMO USAR ESTE ARCHIVO                                              ║
 * ║                                                                          ║
 * ║  Aquí se gestionan las entradas del Archivo (fotos, vídeos, notas).     ║
 * ║  Las entradas más recientes van primero.                                 ║
 * ║                                                                          ║
 * ║  Para añadir una entrada nueva → copiar la PLANTILLA del final          ║
 * ║                                                                          ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  TIPOS DE ENTRADA                                                        ║
 * ║                                                                          ║
 * ║   "foto"   → imagen + texto (dos columnas)                               ║
 * ║   "video"  → vídeo incrustado + texto                                    ║
 * ║   "nota"   → solo texto, sin imagen (entrada de blog)                    ║
 * ║                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

var ARCHIVO = [

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 1 · Fotografía
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "foto",
    numero:  "N.º 1",            // a qué cuaderno pertenece
    fecha:   "Marzo 2026",
    etiqueta: "Fotografía · N.º 1",
    titulo:  "El retrato de Prevel: historia de una imagen",
    texto:   "La imagen de Jacques Prevel que abre el cuaderno fue localizada en los fondos del archivo de la Bibliothèque nationale de France. Un retrato tardío, de finales de los cuarenta, cuando Prevel ya llevaba años en la órbita de Artaud. La decisión de incluirlo no fue ornamental.",
    imagen:  "./images/artaud-portrait.jpg",
    imageAlt: "Retrato · Jacques Prevel",
    enlace:  null,               // URL completa si hay página propia, o null
    tags:    ["prevel"],         // agrupación interna — invisible al usuario
    cuadernoId: 1                // id del libro relacionado (para el botón del sidebar)
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 2 · Vídeo
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "video",
    numero:  "N.º 1",
    fecha:   "Próximamente",
    etiqueta: "Vídeo · N.º 1",
    titulo:  "«Artaud y Prevel no son una anécdota» — Conversación con Miguel Vega Manrique",
    texto:   "El editor del primer cuaderno explica las razones que llevaron a elegir a Prevel como punto de partida de la colección, y el proceso de traducción de los <em>Dix Poèmes Mortels</em>.",
    // Cuando el vídeo esté disponible, pegar aquí el enlace de YouTube o Vimeo:
    // Ejemplo YouTube: "https://www.youtube.com/embed/ID_DEL_VIDEO"
    // Ejemplo Vimeo:   "https://player.vimeo.com/video/ID_DEL_VIDEO"
    videoUrl: null,
    enlace:  null,
    tags:    ["proceso-editorial"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 3 · Nota del autor
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "nota",
    numero:  "N.º 1",
    fecha:   "Febrero 2026",
    etiqueta: "Nota del autor · N.º 1",
    titulo:  "Por qué Prevel y no otro",
    texto:   "Todo archivo editorial comienza con una pregunta que no tiene respuesta cómoda. Prevel no era el más conocido, ni el más traducido, ni el más celebrado. Era, sin embargo, el que mejor permitía formular la hipótesis que queríamos poner a prueba: que la adicción como experiencia puede ser también un modo de conocimiento, y que la traducción de ese conocimiento exige una fidelidad que va más allá del texto.",
    enlace:  null,
    tags:    ["proceso-editorial"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 4 · Teatro de la crueldad — HÉROE (primera entrada con este tag)
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "foto",
    numero:  "N.º 1",
    fecha:   "Marzo 2026",
    etiqueta: "Documento · N.º 1",
    titulo:  "[PLACEHOLDER] Artaud en el hospital de Rodez: los últimos manuscritos",
    texto:   "Texto de ejemplo. Este campo aparece en el sidebar al hacer clic sobre la entrada. Puede contener varios párrafos y texto enriquecido con etiquetas HTML básicas como <em>cursiva</em> o <strong>negrita</strong>.",
    imagen:  "./images/artaud-cover.jpg",
    imageAlt: "Ejemplo de imagen",
    enlace:  null,
    tags:    ["teatro-crueldad"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 5 · Prevel — ESTÁNDAR (segunda entrada con el tag prevel)
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "nota",
    numero:  "N.º 1",
    fecha:   "Febrero 2026",
    etiqueta: "Nota de edición · N.º 1",
    titulo:  "[PLACEHOLDER] Las elecciones tipográficas del cuaderno",
    texto:   "Texto de ejemplo para una nota estándar dentro del clúster Prevel. Esta entrada tiene tamaño medio porque no es la primera con este tag.",
    enlace:  null,
    tags:    ["prevel"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 6 · Teatro de la crueldad — ESTÁNDAR
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "video",
    numero:  "N.º 1",
    fecha:   "Próximamente",
    etiqueta: "Vídeo · N.º 1",
    titulo:  "[PLACEHOLDER] La crueldad como sistema: lectura del primer manifiesto",
    texto:   "Texto de ejemplo para una entrada de vídeo dentro del clúster teatro-crueldad.",
    videoUrl: null,
    enlace:  null,
    tags:    ["teatro-crueldad"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 7 · Referencia cruzada prevel + proceso-editorial (TAMAÑO REF)
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "foto",
    numero:  "N.º 1",
    fecha:   "Marzo 2026",
    etiqueta: "Fotografía · N.º 1",
    titulo:  "[PLACEHOLDER] Las primeras galeradas: proceso y corrección",
    texto:   "Texto de ejemplo para una entrada de referencia cruzada. Aparece más pequeña porque tiene dos tags: es una entrada que conecta dos clústeres.",
    imagen:  "./images/artaud-portrait.jpg",
    imageAlt: "Ejemplo de referencia cruzada",
    enlace:  null,
    tags:    ["prevel", "proceso-editorial"],
    cuadernoId: 1
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Entrada 8 · Referencia cruzada teatro-crueldad + prevel (TAMAÑO REF)
  // ─────────────────────────────────────────────────────────────────────────
  {
    tipo:    "nota",
    numero:  "N.º 1",
    fecha:   "Enero 2026",
    etiqueta: "Nota del editor · N.º 1",
    titulo:  "[PLACEHOLDER] El lenguaje de Artaud en los márgenes de Prevel",
    texto:   "Texto de ejemplo para una nota de referencia cruzada entre el clúster teatro-crueldad y el clúster prevel.",
    enlace:  null,
    tags:    ["teatro-crueldad", "prevel"],
    cuadernoId: 1
  }

  /*
  ╔══════════════════════════════════════════════════════════════════════════╗
  ║  PLANTILLA PARA NUEVA ENTRADA — copiar desde la coma de abajo           ║
  ╚══════════════════════════════════════════════════════════════════════════╝

  // ── Entrada de tipo FOTOGRAFÍA ──
  ,{
    tipo:     "foto",
    numero:   "N.º 1",           // número del cuaderno relacionado
    fecha:    "Abril 2026",      // fecha de publicación
    etiqueta: "Fotografía · N.º 1",
    titulo:   "Título de la entrada",
    texto:    "Descripción de la fotografía o noticia.",
    imagen:   "./images/nombre-del-archivo.jpg",
    imageAlt: "Descripción breve de la imagen",
    enlace:   null,
    tags:     ["nombre-del-tema"], // agrupación interna — invisible al usuario
    cuadernoId: 1                  // id del libro relacionado (1, 2, 3…)
  }

  // ── Entrada de tipo VÍDEO ──
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

  // ── Entrada de tipo NOTA (solo texto) ──
  ,{
    tipo:     "nota",
    numero:   "N.º 1",
    fecha:    "Junio 2026",
    etiqueta: "Nota editorial",
    titulo:   "Título de la nota",
    texto:    "Texto completo de la nota. Puede ser tan largo como se necesite.",
    enlace:   null,
    tags:     ["nombre-del-tema"],
    cuadernoId: 1
  }
  */

];
