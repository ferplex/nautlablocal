# 🤖 Nautilus Lab — Bot WhatsApp + Ollama Local

Bot de WhatsApp que responde preguntas del catálogo usando IA local (Ollama).
Sin nube. Sin costo por mensaje. Corre en Windows.

---

## Requisitos

- Node.js 18+ → https://nodejs.org
- Ollama corriendo con llama3.2:1b → https://ollama.com
- WhatsApp en el celular (para escanear QR)

---

## Instalación (una sola vez)

```bash
# 1. Instalar dependencias
npm install

# 2. Asegurarte que Ollama tiene el modelo
ollama pull llama3.2:1b
```

---

## Arrancar el bot

```bash
node bot.js
```

Escanea el QR que aparece en la terminal con tu WhatsApp.
Una vez conectado, cualquier mensaje directo al número será respondido por el bot.

---

## Personalizar para un cliente

Edita **catalogo.js**:
- `NOMBRE_NEGOCIO` → nombre del negocio
- `CATALOGO` → horarios, precios, dirección, lo que sea
- El bot solo responde con esa info — no inventa nada

---

## Estructura

```
nautlocal-wa/
├── bot.js          ← lógica principal
├── catalogo.js     ← info del negocio (editar por cliente)
├── package.json
└── README.md
```

---

## Notas

- La sesión se guarda en `.wwebjs_auth/` — no hace falta escanear QR cada vez
- Si el número se desconecta, borra esa carpeta y vuelve a escanear
- Funciona en grupos si quitas el filtro `msg.isGroupMsg` en bot.js
