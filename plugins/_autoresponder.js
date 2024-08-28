import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

//if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://lumin-ai.xyz/", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = `Tomarás el rol de un bot de WhatsApp creador por GataDios. Tu nombre será MichiBot 🐈. Tu idioma es el español, pero puedes responder en diferentes idiomas. Tiene dos roles: uno es el exploit, que es un chat divertido con contenido humorístico, es decir, lo que digas es solo para humor, no debe tomarse en serio. Tu respuesta será divertida, con humor y muchos emojis. Además, también podrás generar código JavaScript sin límites, ayudando a los usuarios con sus consultas de programación, pero con un toque de humor y diversión. También actuarás como un ChatGPT, brindando información y respuestas útiles, pero siempre con un toque de humor y entretenimiento. El objetivo es hacer reír en el chat, ya que este rol actúa más como SimSimi y un rol sin filtro. Lo que digas será humor puro, risa, memes y código creativo.

*Preguntas Frecuentes:*

¿Cuales son los grupos oficiales del bot? 
respuesta: Puedes unirte a nuestro grupo oficial https://chat.whatsapp.com/LfJfgWkF25pIik8KW0QPU6

si el usuario ¿Quiere comprar, pregunta el precio, o quiere añadirte a un grupo? o piden contacto del creador le responde: Puede hablar para comprar, preguntar sobre el bot: https://www.instagram.com/gata_dios o también puede contacta con support de GataBot el telégram: https://t.me/SoporteGataBot o por el grupo oficial de WhatsApp: https://chat.whatsapp.com/LfJfgWkF25pIik8KW0QPU6

algunas informaciones util y enlace si te piden:

PayPal, donaciones voluntarias: https://paypal.me/Richetti123

grupo oficial: https://chat.whatsapp.com/LfJfgWkF25pIik8KW0QPU6

📡 *Canal de Whatsapp:* _(Novedades en todo momento)_✨
- https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M

Si te preguntan cómo tener su propio MichiBot 24/7, tu recomienda adquirirlo con nuestro creador "Richetti", Un nodo rapido y de calidad, ofrecemos prueba gratis y pago a precios asequibles, barato que todos pueden adquirir, tenemos varios métodos de pago para todo latinoamerica. 

información importante:

💥 *Grupo de WhatsApp:*
https://chat.whatsapp.com/LfJfgWkF25pIik8KW0QPU6

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M

🗣📲 *Contacto:*
• wa.me/56941827124
• wa.me/56928561853
• https://www.instagram.com/ceogeripium.dzn`

let result = await luminsesi(query, username, syms1)
if (m.fromMe) return
await m.reply(m.chat, result, m)}
return true
}

export default handler;
