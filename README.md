# Nautilus Lab · IA Local — Landing Page

Landing page de una sola página (`index.html`) para la línea de negocio de **IA local con Ollama para negocios de Guadalajara/Jalisco**. Es un proyecto aparte del portafolio de juegos/assets de Nautilus Lab — mismo nombre de marca, oferta distinta.

## Contenido de la página

1. **Hero** — mensaje central: "la IA de tu negocio nunca sale de tu negocio". Incluye el elemento gráfico de "la frontera" (nube tachada vs. chip local) que ilustra la propuesta de privacidad.
2. **Por qué IA local** — 4 ventajas frente a agencias que dependen de nube.
3. **Prueba real** — muestra la demo del bot de catálogo (Python + Ollama) corriendo en una máquina de 3.8GB RAM, estilo terminal.
4. **Paquetes y precios**:
   - Setup Inicial: $4,500–$8,000 MXN (pago único)
   - Mantenimiento: $800–$1,500 MXN/mes (opcional, cancelable)
   - Automatización: desde $3,000 MXN (cotización por proyecto)
5. **Contacto / CTA final** — WhatsApp y correo.

## Contacto usado en la página

- WhatsApp: **33 1256 3514** (enlace `wa.me/523312563514`)
- Correo: **Nautiluslaboratories@proton.me**

## Stack

- HTML + CSS puro, sin build tools, un solo archivo (`index.html`).
- Fuentes vía Google Fonts: Space Grotesk (headings), Inter (body), Orbitron (logotipo), JetBrains Mono (detalles técnicos/terminal).
- Sin dependencias de JS — todo el movimiento es CSS (`@keyframes`), y respeta `prefers-reduced-motion`.
- Responsive: colapsa a una columna en pantallas menores a 760px.

## Pendientes / ideas para siguiente iteración

- Formulario de contacto funcional (hoy los botones abren WhatsApp/mailto directo, no hay formulario en la página).
- Posible versión con nombre de negocio piloto una vez que haya un cliente confirmado.
- Sección de "casos de éxito" cuando exista el primer cliente real (hoy solo se muestra la prueba técnica en hardware modesto).

## Archivos

- `index.html` — la landing page completa.
- `README.md` — este archivo.
