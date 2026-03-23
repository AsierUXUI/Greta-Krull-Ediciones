# Cómo actualizar el sitio web de Greta Krull Ediciones

Este documento explica cómo mantener el sitio al día sin necesidad de conocimientos técnicos.

---

## Dónde están los archivos que puedes editar

```
Greta-Krull-Ediciones/
│
├── 📁 contenido/               ← AQUÍ se edita el contenido del sitio
│   ├── libros.js               ← catálogo de libros
│   └── archivo.js              ← noticias, fotos y vídeos del Archivo
│
├── 📁 images/                  ← aquí se suben las imágenes
│   └── preview/                ← páginas interiores para la previsualización
│
└── (el resto de archivos no hace falta tocarlos)
```

> **Regla sencilla:** si necesitas actualizar algo, el archivo está en la carpeta `contenido/`. El resto del sitio no hay que tocarlo.

---

## Tarea 1 — Actualizar los ejemplares disponibles de un libro

1. Abre el archivo **`contenido/libros.js`**
2. Busca el libro que quieres actualizar (están ordenados por número)
3. Cambia el número en la línea `copiesRemaining:`

**Ejemplo:** si quedan 54 ejemplares del N.º 1:
```js
copiesRemaining: 54,
```

Si el libro se ha agotado, escribe `0`:
```js
copiesRemaining: 0,
```

---

## Tarea 2 — Añadir un libro nuevo al catálogo

1. Abre el archivo **`contenido/libros.js`**
2. Ve al final del archivo — verás una sección llamada **PLANTILLA PARA NUEVO LIBRO**
3. Copia todo el bloque de la plantilla (desde la coma `,{` hasta `}`)
4. Pégalo justo antes de la línea que dice `*/` al final del bloque de comentarios — es decir, fuera del `/* ... */`
5. Rellena los campos con la información del nuevo libro

**Los campos más importantes:**

| Campo | Qué es |
|-------|--------|
| `id` | Número correlativo (5, 6, 7…) |
| `num` | `"N.º 5"` |
| `date` | Año o `"Próximamente"` |
| `status` | `"available"`, `"upcoming"` o `"announced"` |
| `title` | Título del libro |
| `authorByline` | Nombre del autor para los listados |
| `copiesRemaining` | Número de ejemplares disponibles (o `null` si no está publicado) |
| `descShort` | Descripción breve (1–2 frases) |
| `purchaseUrl` | Enlace de compra (o `null`) |

Los campos que no tengas todavía se pueden dejar como `null` — el sitio los ignora automáticamente.

---

## Tarea 3 — Cambiar el estado de un libro

Cuando un libro pase de "próximamente" a "disponible", cambia la línea `status:`:

```js
status: "available",   // publicado y disponible
```

Los tres estados posibles son:
- `"available"` → aparece con botón de compra
- `"upcoming"` → aparece como "Próximamente"
- `"announced"` → aparece en el catálogo pero sin fecha

---

## Tarea 4 — Subir imágenes de un libro nuevo

Las imágenes van en la carpeta `images/`. Sigue este esquema de nombres:

```
images/
├── nombre-del-libro-cover.jpg      ← portada principal
└── preview/
    ├── nombre-del-libro-p01.jpg    ← página interior 1
    ├── nombre-del-libro-p02.jpg    ← página interior 2
    └── …
```

Después, en `contenido/libros.js`, actualiza las rutas correspondientes en el libro:

```js
coverImage: "./images/nombre-del-libro-cover.jpg",

previewPages: [
  "./images/preview/nombre-del-libro-p01.jpg",
  "./images/preview/nombre-del-libro-p02.jpg",
],
```

**Recomendaciones para las imágenes:**
- Formato: **JPG**
- Portada: mínimo **800 × 1120 píxeles** (proporción 1:1.4)
- Páginas interiores: mínimo **900 × 1270 píxeles**
- Tamaño de archivo: intentar que no superen **500 KB** cada una

---

## Tarea 5 — Añadir una entrada al Archivo (noticias, fotos, vídeos)

El Archivo es la sección de noticias y documentación del proceso editorial.

1. Abre el archivo **`contenido/archivo.js`**
2. Ve al final — verás la sección **PLANTILLA PARA NUEVA ENTRADA**
3. Copia la plantilla del tipo que necesitas (foto, vídeo o nota)
4. Pégala al principio de la lista `ARCHIVO`, justo después de la línea `var ARCHIVO = [`

> Las entradas más recientes van **primero** en la lista.

### Tipos de entrada

**Fotografía** — imagen con texto al lado:
```js
{
  tipo:     "foto",
  numero:   "N.º 1",
  fecha:    "Abril 2026",
  etiqueta: "Fotografía · N.º 1",
  titulo:   "Título de la entrada",
  texto:    "Descripción de la fotografía.",
  imagen:   "./images/nombre-del-archivo.jpg",
  imageAlt: "Descripción breve de la imagen",
  enlace:   null
},
```

**Vídeo** — vídeo de YouTube o Vimeo con texto:
```js
{
  tipo:     "video",
  numero:   "N.º 1",
  fecha:    "Mayo 2026",
  etiqueta: "Vídeo · N.º 1",
  titulo:   "Título del vídeo",
  texto:    "Descripción del vídeo.",
  videoUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO",
  enlace:   null
},
```

Para obtener el enlace de YouTube: abre el vídeo → botón **Compartir** → **Insertar** → copia solo la URL del `src="..."`.

**Nota** — solo texto, sin imagen:
```js
{
  tipo:     "nota",
  numero:   "N.º 1",
  fecha:    "Junio 2026",
  etiqueta: "Nota editorial",
  titulo:   "Título de la nota",
  texto:    "Texto completo de la nota.",
  enlace:   null
},
```

---

## Preguntas frecuentes

**¿Cómo guardo los cambios?**
En GitHub, después de editar un archivo, baja hasta el botón verde **"Commit changes"** y pulsa para guardar. El sitio se actualiza en unos minutos.

**¿Puedo romper algo si me equivoco?**
No definitivamente — GitHub guarda el historial de todos los cambios. Si algo sale mal, se puede recuperar la versión anterior. De todas formas, si no estás seguro, mejor preguntar antes de guardar.

**¿Qué hago si el sitio no muestra los cambios?**
Espera 2–3 minutos y recarga la página. Si sigue sin actualizarse, comprueba que el archivo se guardó correctamente (el botón "Commit changes" debe haberse pulsado).

**¿Dónde está el enlace de compra de IberLibro?**
En `contenido/libros.js`, en el campo `purchaseUrl` del libro correspondiente.

---

*Para cualquier duda técnica, contactar con el desarrollador.*
