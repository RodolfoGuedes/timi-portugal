// TIMI Portugal Telegram Bot — Vercel webhook
// Secret required in Vercel: TELEGRAM_BOT_TOKEN

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const API = `https://api.telegram.org/bot${TOKEN}`;
const SITE = "https://timi-portugal.vercel.app/";
const RODOLFO = "https://t.me/rodolfoguedes";
const AFFILIATE = "https://timihqs.com/#/pages/login/registerView?code=d3of54";

async function telegram(method, body) {
  const r = await fetch(`${API}/${method}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await r.json();
  if (!data.ok) console.error("Telegram API error:", data);
  return data;
}

async function sendMessage(chatId, text, keyboard) {
  const body = { chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true };
  if (keyboard) body.reply_markup = { inline_keyboard: keyboard };
  return telegram("sendMessage", body);
}
const cb = (text, data) => ({ text, callback_data: data });
const url = (text, link) => ({ text, url: link });
const homeRow = [cb("🏠 Menu principal", "home")];

async function home(id) { return sendMessage(id, `👋 <b>Bem-vindo ao TIMI Portugal</b>\n\nAqui pode conhecer melhor a TIMI, entender como funciona a proposta, consultar as modalidades apresentadas, assistir a vídeos e esclarecer as principais dúvidas.\n\nEscolha uma opção abaixo:`, [[cb("🟢 Conhecer a TIMI","conhecer")],[cb("🚲 Como funciona","como_funciona")],[cb("💰 Modalidades apresentadas","modalidades")],[cb("🎥 Ver vídeos","videos")],[cb("❓ Dúvidas frequentes","faq")],[url("👤 Falar com Rodolfo",RODOLFO)]]); }

async function conhecer(id) { return sendMessage(id, `🟢 <b>Conhecer a TIMI</b>\n\nA TIMI apresenta um conceito ligado à mobilidade, tecnologia e bicicletas elétricas partilhadas.\n\nEm Portugal, a iniciativa vem divulgando os seus produtos através de parceiros, eventos, ações presenciais e centros de experiência.\n\nEm 12 de setembro de 2026 foi realizado em Lisboa um evento de lançamento de produtos TIMI, reunindo parceiros e convidados.`, [[cb("🚲 Bicicletas TIMI","bicicletas")],[cb("🇵🇹 TIMI em Portugal","portugal")],[cb("🎬 Eventos e vídeos","videos")],[cb("💰 Ver modalidades","modalidades")],homeRow]); }

async function bicicletas(id) { return sendMessage(id, `🚲 <b>Bicicletas elétricas partilhadas TIMI</b>\n\nAs bicicletas fazem parte da proposta de mobilidade apresentada pela TIMI. Nos materiais e eventos divulgados pela comunidade, são apresentadas e experimentadas presencialmente, permitindo conhecer melhor o produto e a experiência de utilização.\n\nTambém temos uma entrevista especial sobre a experiência com uma bicicleta partilhada TIMI.`, [[url("🎙 Assistir entrevista","https://youtu.be/QMu3hg2w_8w")],[url("🌐 Ver site TIMI Portugal",SITE)],[cb("⬅️ Voltar","conhecer")],homeRow]); }

async function portugal(id) { return sendMessage(id, `🇵🇹 <b>TIMI em Portugal</b>\n\nA TIMI vem desenvolvendo atividades de divulgação e apresentação da sua proposta em Portugal.\n\nNo dia <b>12 de setembro de 2026</b>, parceiros e convidados reuniram-se em Lisboa para um evento de lançamento. Durante o evento foram apresentados produtos e realizadas atividades com participantes.\n\nLisboa foi apresentada como a primeira paragem desta fase, com Porto indicado nas comunicações como próxima paragem.`, [[cb("🎥 Ver vídeos","videos")],[url("🌐 Conhecer o site",SITE)],[cb("⬅️ Voltar","conhecer")],homeRow]); }

async function comoFunciona(id) { return sendMessage(id, `🚲 <b>Como funciona?</b>\n\nPara facilitar, escolha o assunto que deseja entender:`, [[cb("1️⃣ Como começar","comecar")],[cb("2️⃣ Modalidades","modalidades")],[cb("3️⃣ Valores apresentados","valores")],[cb("4️⃣ Segurança e riscos","seguranca")],[cb("5️⃣ Quero participar","participar")],homeRow]); }

async function comecar(id) { return sendMessage(id, `1️⃣ <b>Conhecendo a TIMI</b>\n\nSe está conhecendo a TIMI agora, o primeiro passo é compreender a proposta antes de tomar qualquer decisão.\n\nPode conhecer as informações disponíveis, assistir aos vídeos, conhecer as modalidades apresentadas, consultar as informações de segurança e esclarecer dúvidas diretamente comigo.`, [[cb("💰 Ver modalidades","modalidades")],[cb("🎥 Assistir vídeos","videos")],[cb("⚠️ Segurança","seguranca")],[url("👤 Falar com Rodolfo",RODOLFO)],[cb("⬅️ Voltar","como_funciona")],homeRow]); }

async function modalidades(id) { return sendMessage(id, `💰 <b>Modalidades apresentadas</b>\n\n🟢 <b>T2</b>\nValor apresentado: <b>230 USDT</b>\nValor diário indicado: <b>5 USDT/dia</b>\n\n🔵 <b>T3</b>\nValor apresentado: <b>560 USDT</b>\nValor diário indicado: <b>13 USDT/dia</b>\n\n🟣 <b>T4</b>\nValor apresentado: <b>1.300 USDT</b>\nValor diário indicado: <b>30 USDT/dia</b>\n\n⚠️ Os valores diários indicados/divulgados pela plataforma não devem ser interpretados como rendimento garantido. Antes de participar ou transferir fundos, consulte as condições atuais, riscos e regras aplicáveis.`, [[cb("📊 Comparar modalidades","comparar")],[cb("⚠️ Segurança e riscos","seguranca")],[cb("🚀 Quero participar","participar")],[url("👤 Falar com Rodolfo",RODOLFO)],homeRow]); }

async function valores(id) { return sendMessage(id, `💵 <b>Valores apresentados</b>\n\nT2 — 230 USDT — indicado 5 USDT/dia\nT3 — 560 USDT — indicado 13 USDT/dia\nT4 — 1.300 USDT — indicado 30 USDT/dia\n\nEstes são valores apresentados/divulgados no contexto das modalidades. <b>Não constituem promessa ou garantia de rendimento futuro.</b>`, [[cb("📊 Comparar","comparar")],[cb("⚠️ Segurança","seguranca")],[cb("⬅️ Voltar","como_funciona")],homeRow]); }

async function comparar(id) { return sendMessage(id, `📊 <b>Comparação rápida</b>\n\n🟢 T2\n230 USDT → indicado: 5 USDT/dia\n\n🔵 T3\n560 USDT → indicado: 13 USDT/dia\n\n🟣 T4\n1.300 USDT → indicado: 30 USDT/dia\n\n⚠️ Os valores acima são informações apresentadas sobre as modalidades e não constituem garantia de retorno futuro.`, [[cb("🚀 Quero participar","participar")],[url("👤 Tirar uma dúvida",RODOLFO)],homeRow]); }

async function participar(id) { return sendMessage(id, `🚀 <b>Tem interesse em participar?</b>\n\nAntes de avançar, conheça as informações disponíveis e esclareça qualquer dúvida sobre funcionamento, valores, condições e riscos.\n\nQuando estiver pronto, pode acessar a página de participação ou falar diretamente comigo.\n\nNão forneça senhas, códigos de autenticação ou frases de recuperação a terceiros.`, [[url("🌐 Acessar página de participação",AFFILIATE)],[url("👤 Falar com Rodolfo",RODOLFO)],[cb("⚠️ Segurança e riscos","seguranca")],homeRow]); }

async function seguranca(id) { return sendMessage(id, `⚠️ <b>Segurança e riscos</b>\n\nAntes de transferir dinheiro ou fornecer informações pessoais, confirme sempre que está utilizando os canais corretos.\n\n🔐 Nunca compartilhe senhas, códigos de autenticação, códigos recebidos por SMS, frases de recuperação de carteiras ou credenciais pessoais.\n\n📌 Leia as condições aplicáveis.\n📌 Procure compreender como funciona a proposta.\n📌 Valores divulgados não devem ser interpretados automaticamente como rendimentos garantidos.\n📌 Qualquer decisão que envolva recursos financeiros deve considerar os riscos envolvidos.`, [[url("👤 Falar com Rodolfo",RODOLFO)],[url("🌐 Guia no site",`${SITE}guia-seguranca.html`)],homeRow]); }

async function videos(id) { return sendMessage(id, `🎥 <b>Vídeos TIMI</b>\n\nConheça eventos, experiências e iniciativas relacionadas à TIMI em Portugal.\n\n⭐ A entrevista sobre a experiência TIMI está em destaque.`, [[url("⭐ Entrevista especial","https://youtu.be/QMu3hg2w_8w")],[url("🎬 Vídeos criativos","https://youtu.be/KXUMbNIgTqU")],[url("🎉 Lançamento em Lisboa","https://youtu.be/ISsFWPg50gg")],[url("🇵🇹 12 de setembro","https://youtu.be/UBKWfs0cdA8")],[url("🌐 Ver todos no site",`${SITE}#videos`)],homeRow]); }

async function faq(id) { return sendMessage(id, `❓ <b>Dúvidas frequentes</b>\n\nEscolha uma pergunta:`, [[cb("❓ O que é a TIMI?","faq_timi")],[cb("🚲 O que são as bicicletas?","bicicletas")],[cb("💰 Quais são os valores?","valores")],[cb("📈 O rendimento é garantido?","faq_garantido")],[cb("💵 Preciso pagar para participar?","faq_participacao")],[cb("🔐 É seguro?","seguranca")],[cb("🇵🇹 Existe TIMI em Portugal?","portugal")],[url("👤 Falar com Rodolfo",RODOLFO)],homeRow]); }

async function faqTimi(id) { return sendMessage(id, `❓ <b>O que é a TIMI?</b>\n\nA TIMI apresenta uma proposta relacionada com mobilidade, tecnologia e bicicletas elétricas partilhadas. Em Portugal, a iniciativa tem sido apresentada através de produtos, parceiros, eventos e atividades presenciais.`, [[url("🌐 Conhecer o site",SITE)],[cb("🎥 Ver vídeos","videos")],[cb("⬅️ Voltar","faq")],homeRow]); }

async function faqGarantido(id) { return sendMessage(id, `📈 <b>O rendimento é garantido?</b>\n\nNão deve ser tratado como garantido.\n\nOs valores apresentados nas modalidades são valores indicados/divulgados no contexto da plataforma. Qualquer participação que envolva recursos financeiros deve ser avaliada considerando condições atuais, riscos e possibilidade de alterações.\n\nNão tome uma decisão apenas com base numa expectativa de rendimento.`, [[cb("⚠️ Segurança e riscos","seguranca")],[url("👤 Falar com Rodolfo",RODOLFO)],[cb("⬅️ Voltar","faq")],homeRow]); }

async function faqParticipacao(id) { return sendMessage(id, `💵 <b>Participação e valores</b>\n\nExistem modalidades apresentadas com diferentes valores. Atualmente, no nosso material informativo, apresentamos:\n\nT2 — 230 USDT\nT3 — 560 USDT\nT4 — 1.300 USDT\n\nAntes de realizar qualquer transferência ou participação, confirme as condições atuais e compreenda os riscos envolvidos.`, [[cb("💰 Ver modalidades","modalidades")],[url("👤 Falar com Rodolfo",RODOLFO)],[cb("⬅️ Voltar","faq")],homeRow]); }

async function desconhecido(id) { return sendMessage(id, `🤖 Não consegui identificar essa opção.\n\nUtilize o menu abaixo para encontrar a informação desejada. Se preferir atendimento pessoal, pode falar diretamente com Rodolfo.`, [[cb("🏠 Abrir menu","home")],[url("👤 Falar com Rodolfo",RODOLFO)]]); }

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).json({ ok: true, service: "TIMI Portugal Telegram Bot" });
  if (!TOKEN) return res.status(500).json({ ok: false, error: "Bot token not configured" });
  try {
    const update = req.body;
    if (update.message) {
      const id = update.message.chat.id;
      const text = update.message.text?.trim().toLowerCase() || "";
      if (text === "/start" || text === "/menu" || text === "menu") await home(id); else await desconhecido(id);
      return res.status(200).json({ ok: true });
    }
    if (update.callback_query) {
      const q = update.callback_query;
      const id = q.message.chat.id;
      await telegram("answerCallbackQuery", { callback_query_id: q.id });
      const actions = { home, conhecer, bicicletas, portugal, como_funciona: comoFunciona, comecar, modalidades, valores, comparar, participar, seguranca, videos, faq, faq_timi: faqTimi, faq_garantido: faqGarantido, faq_participacao: faqParticipacao };
      await (actions[q.data] || desconhecido)(id);
      return res.status(200).json({ ok: true });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("TIMI Bot Error:", e);
    return res.status(200).json({ ok: false });
  }
}
