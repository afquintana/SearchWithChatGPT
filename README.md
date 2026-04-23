# Search With ChatGPT

Extensión de Chrome (Manifest V3) que añade una opción al menú contextual para enviar texto seleccionado a ChatGPT.

## Comportamiento real

1. Selecciona cualquier texto en una página web.
2. Haz clic derecho sobre la selección.
3. Aparece la opción **"Buscar con ChatGPT"** (solo en contexto de selección).
4. Al pulsarla, se abre una nueva pestaña en `https://chatgpt.com/?q=...` con el texto seleccionado codificado en la URL.

## Estructura del proyecto

- Raíz del proyecto — Código de la extensión (`manifest.json`, `background.js`, iconos).
- `store_assets/` — Recursos para publicación en Chrome Web Store (no necesarios para cargar la extensión).

## Permisos mínimos

- `contextMenus` — Necesario para crear y gestionar la opción del menú contextual.

> Esta versión no solicita `tabs` porque no es imprescindible para el comportamiento implementado.

## How to test locally

1. Ve a `chrome://extensions`.
2. Activa **Developer mode**.
3. Pulsa **Load unpacked** y selecciona la carpeta raíz del proyecto.
4. Verifica en la tarjeta de la extensión que no hay errores.
5. Abre cualquier web, selecciona texto y haz clic derecho.
6. Comprueba que aparece **Buscar con ChatGPT**.
7. Haz clic en la opción y confirma que se abre ChatGPT con el texto en el parámetro `q`.

## Privacy

La extensión no recoge ni almacena datos personales. Solo usa localmente el texto seleccionado para construir la URL que se abre en ChatGPT.
