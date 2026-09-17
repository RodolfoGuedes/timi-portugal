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

async function home(id) { return sendMessage(id, `👋 <b>Bem-vindo ao TIMI Portugal</b>\n\nAqui pode entender o projeto, as modalidades, a rotina diária, o ciclo de 365 dias, levantamentos, indicações e regras importantes.\n\nEscolha uma opção:`, [[cb("🟢 Conhecer a TIMI","conhecer")],[cb("📅 Funcionamento diário","diario")],[cb("💰 Modalidades T2/T3/T4","modalidades")],[cb("🔄 Ciclo de 365 dias","ciclo")],[cb("💵 Levantamentos","levantamentos")],[cb("🚀 Como participar","participar")],[cb("🤝 Indicações","indicacoes")],[cb("🇵🇹 TIMI em Portugal","portugal")],[cb("🎥 Vídeos","videos")],[cb("❓ Regras e FAQ","faq")],[url("👤 Falar com Rodolfo",RODOLFO)]]); }

async function conhecer(id) { return sendMessage(id, `🟢 <b>Como funciona a TIMI</b>\n\nA TIMI é apresentada como um projeto de mobilidade partilhada baseado em bicicletas convencionais e elétricas.\n\nNos locais onde o serviço está disponível, o público localiza uma bicicleta, utiliza a aplicação, lê o QR Code e paga pelo uso.\n\nAlém da utilização pública das bicicletas, existem modalidades de participação associadas ao projeto, com valores, duração e regras próprias.`, [[cb("📅 Rotina diária","diario")],[cb("💰 Ver modalidades","modalidades")],[cb("🇵🇹 TIMI em Portugal","portugal")],[url("🌐 Ver explicação completa",`${SITE}#projeto`)],homeRow]); }

async function diario(id) { return sendMessage(id, `📅 <b>Funcionamento diário</b>\n\nNos dias elegíveis, o participante acompanha os grupos de comunicação, obtém o código diário e insere-o na aplicação TIMI.\n\n🕙 <b>10:00–13:00</b>\n🌙 <b>19:00–22:00</b>\nHorário de Portugal. Basta utilizar uma das janelas.\n\nSegundo as informações recebidas, aplica-se aos dias úteis elegíveis, excluindo fins de semana e feriados nacionais.\n\nSe perder as duas janelas, o valor daquele dia não é recuperado.\n\nO código é descrito como mecanismo de participação e acompanhamento das informações do projeto, e não como ativação técnica de uma bicicleta específica.`, [[cb("⚠️ Ausências e regras","ausencias")],[cb("❓ FAQ completo","faq")],[url("🌐 Ver no site",`${SITE}#como-funciona`)],homeRow]); }

async function modalidades(id) { return sendMessage(id, `💰 <b>Modalidades apresentadas</b>\n\n🟢 <b>T2</b> — 230 USDT\nValor diário indicado: <b>5 USDT</b>\n\n🔵 <b>T3</b> — 560 USDT\nValor diário indicado: <b>13 USDT</b>\n\n🟣 <b>T4</b> — 1.300 USDT\nValor diário indicado: <b>30 USDT</b>\n\nOs valores diários são os valores apresentados pelo programa e dependem das regras, dias elegíveis e atividade exigida. Não constituem garantia independente de rendimento. Levantamentos estão sujeitos às taxas aplicáveis.`, [[cb("📊 Comparar modalidades","comparar")],[cb("🔄 Ciclo de 365 dias","ciclo")],[cb("💵 Levantamentos","levantamentos")],[cb("🚀 Como participar","participar")],[url("🌐 Ver no site",`${SITE}#opcoes`)],homeRow]); }

async function comparar(id) { return sendMessage(id, `📊 <b>Comparação rápida</b>\n\nT2: 230 USDT → indicado 5 USDT/dia\nT3: 560 USDT → indicado 13 USDT/dia\nT4: 1.300 USDT → indicado 30 USDT/dia\n\nOs valores apresentados são anteriores à taxa de levantamento e não devem ser tratados como retorno líquido garantido.`, [[cb("💵 Ver levantamentos","levantamentos")],[cb("🔄 Ver ciclo","ciclo")],homeRow]); }

async function ciclo(id) { return sendMessage(id, `🔄 <b>Ciclo de 365 dias</b>\n\nSegundo as condições apresentadas, cada modalidade tem duração de <b>365 dias</b>.\n\nAo final do ciclo:\n\n🔄 <b>Continuar</b> — renovação indicada por 50% do valor original da modalidade.\n\n↪️ <b>Encerrar</b> — reembolso indicado de 50% do valor original após a conclusão normal do ciclo.\n\nExemplo T4: valor original 1.300 USDT → 650 USDT para renovação ou 650 USDT de reembolso indicado no encerramento.\n\nPelas informações recebidas, não existe um mecanismo normal de cancelamento com reembolso antecipado antes dos 365 dias. Confirme sempre as condições vigentes na aplicação.`, [[cb("❓ Regras e FAQ","faq")],[url("🌐 Ver ciclo no site",`${SITE}#ciclo`)],homeRow]); }

async function levantamentos(id) { return sendMessage(id, `💵 <b>Levantamentos</b>\n\nMínimos atualmente informados:\n🟢 T2 — <b>30 USDT</b>\n🔵 T3 — <b>50 USDT</b>\n🟣 T4 — <b>100 USDT</b>\n\nSegundo as condições apresentadas, existe uma <b>taxa de 25%</b> em cada levantamento. Exemplo: solicitar 100 → receber 75 após essa taxa, antes de eventuais custos externos.\n\nO processo relatado é TIMI → criptoativo → OKX → conversão para EUR → banco.\n\nNa experiência relatada, TIMI → OKX costuma levar aproximadamente 3 dias úteis, mas o prazo pode variar.`, [[cb("🔐 Segurança cripto","cripto")],[cb("🚀 Como participar","participar")],[url("🌐 Ver no site",`${SITE}#levantamentos`)],homeRow]); }

async function participar(id) { return sendMessage(id, `🚀 <b>Como participar</b>\n\nO procedimento relatado segue este fluxo:\n\n<b>EUR → OKX → USDT/USDC → rede Polygon → TIMI → modalidade T2/T3/T4</b>\n\n1️⃣ Preparar os fundos numa conta própria.\n2️⃣ Converter para o criptoativo indicado.\n3️⃣ Confirmar na TIMI moeda, rede e endereço de depósito.\n4️⃣ Transferir e aguardar a confirmação do saldo.\n5️⃣ Ler as condições e selecionar a modalidade.\n\n⚠️ Nunca copie um endereço de depósito de mensagens ou deste bot. Utilize o endereço mostrado na sua própria conta TIMI e confirme todos os dados antes de enviar.`, [[cb("🔐 Segurança cripto","cripto")],[url("🌐 Abrir plataforma TIMI",AFFILIATE)],[url("👤 Falar com Rodolfo",RODOLFO)],[url("🌐 Guia no site",`${SITE}#participar`)],homeRow]); }

async function cripto(id) { return sendMessage(id, `🔐 <b>Segurança em transferências</b>\n\nUSDT (Tether) e USDC (USD Coin) são criptoativos diferentes. Polygon é uma rede blockchain.\n\nA moeda, a rede e o endereço precisam corresponder exatamente ao indicado pela plataforma. Transferências de criptoativos podem ser irreversíveis.\n\nNunca compartilhe senha, código SMS/2FA ou frase de recuperação. Taxas e limites externos também podem existir.`, [[cb("🚀 Voltar a como participar","participar")],[url("👤 Pedir ajuda a Rodolfo",RODOLFO)],homeRow]); }

async function indicacoes(id) { return sendMessage(id, `🤝 <b>Indicações</b>\n\nSegundo as informações apresentadas, <b>indicar outras pessoas é opcional</b>.\n\nÉ possível participar durante o ciclo sem indicar ninguém e continuar sujeito às regras da própria modalidade e à atividade diária.\n\nExiste um programa de progressão e benefícios adicionais ligado à participação e às indicações, mas os critérios, percentagens e benefícios específicos devem ser confirmados nas regras vigentes e no acompanhamento do participante.`, [[url("🌐 Ver explicação no site",`${SITE}#indicacao`)],[url("👤 Perguntar a Rodolfo",RODOLFO)],homeRow]); }

async function portugal(id) { return sendMessage(id, `🇵🇹 <b>TIMI em Portugal</b>\n\nSegundo relatos e materiais recebidos, existem bicicletas associadas ao projeto em Portugal. As cidades mencionadas incluem <b>Lisboa, Portimão e Aveiro</b>. Porto foi comunicado como uma expansão prevista, devendo a disponibilidade atual ser confirmada.\n\nPara o público, o funcionamento apresentado é: localizar uma bicicleta disponível → abrir a aplicação → ler o QR Code → utilizar o serviço.\n\nA presença física das bicicletas demonstra uma atividade de mobilidade, mas não deve ser interpretada isoladamente como garantia das condições financeiras das modalidades.`, [[cb("🚲 Como funciona","conhecer")],[cb("🎥 Ver vídeos","videos")],[url("🌐 Ver no site",`${SITE}#timi-portugal`)],homeRow]); }

async function videos(id) { return sendMessage(id, `🎥 <b>Vídeos TIMI</b>\n\nVeja entrevistas, eventos e experiências relacionadas com a TIMI em Portugal.`, [[url("⭐ Entrevista especial","https://youtu.be/QMu3hg2w_8w")],[url("🎬 Vídeo TIMI","https://youtu.be/KXUMbNIgTqU")],[url("🎉 Evento em Lisboa","https://youtu.be/ISsFWPg50gg")],[url("🇵🇹 TIMI Portugal","https://youtu.be/UBKWfs0cdA8")],[url("🌐 Ver vídeos no site",`${SITE}#videos`)],homeRow]); }

async function ausencias(id) { return sendMessage(id, `⚠️ <b>Ausências e inatividade</b>\n\nSegundo as informações recebidas, foi relatada uma regra de até 3 dias consecutivos de ausência. Períodos superiores podem levar a medidas na conta.\n\nTambém foi relatada a possibilidade de redução temporária do valor diário em situações de inatividade e, em casos prolongados, bloqueio ou exclusão. Situações justificadas podem ser analisadas pelo responsável.\n\nMesmo quando uma ausência é justificada, os valores dos dias em que o código não foi realizado não são recuperados.\n\nEstas medidas devem ser confirmadas nas regras atuais da plataforma.`, [[cb("📅 Funcionamento diário","diario")],[cb("❓ FAQ","faq")],homeRow]); }

async function faq(id) { return sendMessage(id, `❓ <b>Regras e dúvidas frequentes</b>\n\nEscolha o assunto:`, [[cb("⏰ Perdi o código diário","faq_codigo")],[cb("⚠️ Ausências / bloqueio","ausencias")],[cb("🔄 Sair antes de 365 dias","faq_saida")],[cb("💵 Taxa e mínimos","levantamentos")],[cb("🤝 Preciso indicar pessoas?","indicacoes")],[cb("💬 O que é BonChat?","faq_bonchat")],[cb("📄 Existe contrato PDF?","faq_contrato")],[cb("📈 Valores são garantidos?","faq_garantido")],[cb("🔐 Transferências e segurança","cripto")],[url("👤 Falar com Rodolfo",RODOLFO)],homeRow]); }

async function faqCodigo(id) { return sendMessage(id, `⏰ <b>Perdi o código diário. E agora?</b>\n\nSe nenhuma das duas janelas for utilizada naquele dia elegível, o valor correspondente ao dia é perdido e não pode ser recuperado posteriormente, segundo as informações recebidas.`, [[cb("📅 Ver rotina diária","diario")],[cb("⬅️ FAQ","faq")],homeRow]); }
async function faqSaida(id) { return sendMessage(id, `🔄 <b>Posso sair antes dos 365 dias?</b>\n\nPelas informações atualmente recebidas, não existe um procedimento normal de cancelamento com reembolso antecipado da modalidade. A condição de reembolso de 50% apresentada refere-se ao encerramento normal após a conclusão dos 365 dias.`, [[cb("🔄 Ver ciclo completo","ciclo")],[cb("⬅️ FAQ","faq")],homeRow]); }
async function faqBonchat(id) { return sendMessage(id, `💬 <b>O que é BonChat?</b>\n\nSegundo as informações recebidas, BonChat não é a aplicação TIMI. É uma ferramenta externa de comunicação utilizada pelos responsáveis para organizar grupos, divulgar códigos, formações, eventos, comunicados e acompanhar participantes.`, [[cb("📅 Rotina diária","diario")],[cb("⬅️ FAQ","faq")],homeRow]); }
async function faqContrato(id) { return sendMessage(id, `📄 <b>Existe contrato individual em PDF?</b>\n\nSegundo o relato recebido, normalmente não é fornecido um contrato individual em PDF ou por e-mail. As regras e condições são disponibilizadas dentro da aplicação. Leia e, quando possível, guarde uma cópia das condições vigentes antes de participar.`, [[cb("⬅️ FAQ","faq")],homeRow]); }
async function faqGarantido(id) { return sendMessage(id, `📈 <b>Os valores são garantidos?</b>\n\nNão devem ser tratados como garantia deste bot ou deste site. Os valores são os indicados/divulgados no programa e dependem das regras, dias elegíveis, atividade exigida, taxas e cumprimento das condições da plataforma.\n\nAntes de tomar uma decisão financeira, consulte as condições atuais e considere os riscos envolvidos.`, [[cb("💰 Modalidades","modalidades")],[cb("💵 Levantamentos","levantamentos")],[cb("⬅️ FAQ","faq")],homeRow]); }

async function desconhecido(id) { return sendMessage(id, `🤖 Não consegui identificar essa opção.\n\nUse o menu para encontrar a informação desejada. Se preferir atendimento pessoal, fale diretamente com Rodolfo.`, [[cb("🏠 Abrir menu","home")],[url("👤 Falar com Rodolfo",RODOLFO)]]); }

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
      const actions = { home, conhecer, diario, modalidades, comparar, ciclo, levantamentos, participar, cripto, indicacoes, portugal, videos, ausencias, faq, faq_codigo: faqCodigo, faq_saida: faqSaida, faq_bonchat: faqBonchat, faq_contrato: faqContrato, faq_garantido: faqGarantido };
      await (actions[q.data] || desconhecido)(id);
      return res.status(200).json({ ok: true });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("TIMI Bot Error:", e);
    return res.status(200).json({ ok: false });
  }
}
