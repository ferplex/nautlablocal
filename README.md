# NAUTILUS·LAB — Landing Page

Portfolio oficial de **Nautilus Lab** — studio independiente de software, juegos browser y herramientas de audio. Hecho desde Guadalajara, Jalisco MX.

🌐 **Live:** [nautlab.itch.io](https://nautlab.itch.io)

---

## ¿Qué es esto?

Una sola página (`index.html`) — sin frameworks, sin build tools, sin dependencias externas. Vanilla HTML + CSS + JS puro. Corre en cualquier servidor estático o directo desde el navegador.

---

## Stack

| Cosa | Detalle |
|---|---|
| HTML/CSS/JS | 100% vanilla, sin npm, sin bundler |
| Fuentes | Google Fonts — Orbitron + Rajdhani |
| Hosting sugerido | GitHub Pages / cualquier static host |
| Dependencias runtime | Ninguna |

---

## Contenido de la página

- **Hero** — parallax con estrellas y mouse-tracking
- **Stats** — productos activos, juegos en CrazyGames, servidores externos (0)
- **Catálogo** — grid de productos con links directos a itch.io / GitHub Pages
- **Política de software** — reembolso / reemplazo, transparencia de comisiones
- **Comunidad** — Telegram bot, canal y WhatsApp soporte
- **Sección LATAM** — filosofía del studio
- **Chatbot FAQ** — asistente flotante con 10 preguntas técnicas para usuarios sin código

---

## Catálogo actual

### 🎮 Juegos
| Producto | Precio | Plataforma |
|---|---|---|
| NEON VF | Gratis | GitHub Pages · CrazyGames |
| NEON R | itch.io | En revisión CrazyGames |
| G SPACE | itch.io | En revisión CrazyGames |

### 🎛️ Audio / Herramientas browser
| Producto | Precio | Notas |
|---|---|---|
| SYNTH PRO | Gratis | Showcase — FM synth browser |
| NARRATOR PRO | $1–2 USD | TTS multi-voz, sin API key |
| VJ ENGINE | Gratis | Audio-reactivo, eventos en vivo |

### 🖥️ Software
| Producto | Precio | Notas |
|---|---|---|
| TALLER·OS | itch.io | Business OS, Electron + Ollama |

### 🤖 AI Tools
| Producto | Precio | Notas |
|---|---|---|
| MANGAAI PRO | Gratis · donación voluntaria | Powered by Pollinations.ai |

---

## Filosofía

> Sin plantillas. Sin suscripciones. Sin servidor tuyo en la nube de alguien más.
> Tu software. Tu máquina. Tus datos.

- **Local-first** — todo corre offline una vez descargado
- **Crédito justo** — MangaAI Pro credita explícitamente a Pollinations.ai
- **Comisiones transparentes** — itch.io/Gumroad cobran su parte; nosotros no la absorbemos ni la ocultamos
- **Soporte real** — WhatsApp y Telegram directo, en español, del equipo

---

## Cómo usar / modificar

```bash
# No hay build. Solo abre el archivo.
open index.html

# O sírvelo con cualquier static server
npx serve .
python3 -m http.server 8080
```

Para actualizar el catálogo edita directamente el bloque `.nl-products-grid` en `index.html`.

Para agregar preguntas al chatbot edita el array `FAQ` en el `<script>` al final del archivo.

---

## Contacto / Soporte

- 📦 Productos: [nautlab.itch.io](https://nautlab.itch.io)
- 💬 Telegram bot: [@nautiluslabialocalbot](https://t.me/nautiluslabialocalbot)
- 📢 Canal: [@nautiluslabarch](https://t.me/nautiluslabarch)
- 📱 WhatsApp soporte: [+52 331 256 3514](https://wa.me/523312563514)
- 🛒 Gumroad: [nautilulab.gumroad.com](https://nautilulab.gumroad.com)

---

**© 2024–2026 Nautilus Lab · Guadalajara, Jalisco MX**
