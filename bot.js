const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fetch = require("node-fetch");
const { SYSTEM_PROMPT, NOMBRE_NEGOCIO } = require("./catalogo");

// ============================================================
//  CONFIG — ajusta si Ollama corre en otro puerto o modelo
// ============================================================
const OLLAMA_URL = "http://localhost:11434/api/generate";
const MODELO = "llama3.2:1b";

// ============================================================
//  CLIENTE DE WHATSAPP
// ============================================================
const client = new Client({
  authStrategy: new LocalAuth({ clientId: "nautlocal-bot" }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

// Muestra el QR para escanear con WhatsApp
client.on("qr", (qr) => {
  console.log("\n📱 Escanea este QR con WhatsApp:\n");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log(`\n✅ Bot de ${NOMBRE_NEGOCIO} conectado y listo!\n`);
});

client.on("auth_failure", (msg) => {
  console.error("❌ Error de autenticación:", msg);
});

client.on("disconnected", (reason) => {
  console.log("⚠️  Bot desconectado:", reason);
});

// ============================================================
//  FUNCIÓN PARA LLAMAR A OLLAMA LOCAL
// ============================================================
async function preguntarOllama(mensaje) {
  const prompt = `${SYSTEM_PROMPT}\n\nCliente pregunta: ${mensaje}\n\nRespuesta:`;

  try {
    const res = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODELO,
        prompt: prompt,
        stream: false,
        options: {
          temperature: 0.3,   // bajo = respuestas más consistentes
          num_predict: 200,   // máx tokens de respuesta
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Ollama respondió con status ${res.status}`);
    }

    const data = await res.json();
    return data.response?.trim() || "No pude generar una respuesta.";

  } catch (err) {
    console.error("❌ Error con Ollama:", err.message);
    return "Hubo un problema al procesar tu pregunta. Intenta de nuevo en un momento.";
  }
}

// ============================================================
//  MANEJO DE MENSAJES ENTRANTES
// ============================================================
client.on("message", async (msg) => {
  // Ignorar mensajes de grupos, estados y del propio bot
  if (msg.isGroupMsg || msg.from === "status@broadcast") return;
  if (msg.fromMe) return;

  const texto = msg.body?.trim();
  if (!texto) return;

  const contacto = msg.from;
  console.log(`📩 Mensaje de ${contacto}: ${texto}`);

  // Indicador de "escribiendo..."
  const chat = await msg.getChat();
  await chat.sendStateTyping();

  // Consultar Ollama
  const respuesta = await preguntarOllama(texto);

  // Enviar respuesta
  await client.sendMessage(contacto, respuesta);
  console.log(`📤 Respuesta enviada: ${respuesta}\n`);
});

// ============================================================
//  ARRANCAR EL BOT
// ============================================================
console.log("🚀 Iniciando bot de WhatsApp + Ollama...");
console.log(`   Modelo: ${MODELO}`);
console.log(`   Ollama: ${OLLAMA_URL}\n`);

client.initialize();
