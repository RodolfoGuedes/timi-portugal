const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const API = `https://api.telegram.org/bot${TOKEN}`;
const SITE = 'https://timi-portugal.vercel.app';
const RODOLFO = 'https://t.me/rodolfoguedes';
const AFFILIATE = 'https://timihqs.com/#/pages/login/registerView?code=d3of54';

async function telegram(method, body) {
  const response = await fetch(`${API}/${method}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  });
  return response.json();
}

async function sendMessage(chatId, text, keyboard) {
  const body = {chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true};
  if (keyboard) body.reply_markup = {inline_keyboard: keyboard};
  return telegram('sendMessage', body);
}

const cb = (text, data) => ({text, callback_data: data});
const url = (text, link) => ({text, url: link});
const homeRow = [cb('🏠 Menu principal', 'home')];

const home = id => sendMessage(id,
  '👋 <b>Bem-vindo à TIMI Portugal</b>\n\nMobilidade, tecnologia e uma comunidade que cresce em Portugal.\n\nAqui pode entender como funciona, comparar as modalidades e conhecer pessoas que já participam. Por onde deseja começar?',
  [
    [cb('▶️ Como funciona', 'funciona'), cb('💚 Modalidades', 'modalidades')],
    [cb('👥 Comunidade TIMI', 'comunidade')],
    [cb('❓ Dúvidas frequentes', 'faq')],
    [url('🚀 Criar a minha conta', AFFILIATE)],
    [url('👤 Falar com Rodolfo', RODOLFO)],
    [url('🌐 Visitar o site', `${SITE}/`)]
  ]
);

const funciona = id => sendMessage(id,
  '▶️ <b>Como funciona a TIMI?</b>\n\n1️⃣ Crie a sua conta.\n2️⃣ Escolha uma modalidade.\n3️⃣ Acompanhe o grupo e obtenha o código diário.\n4️⃣ Insira o código na aplicação numa das janelas disponíveis.\n5️⃣ Acompanhe a sua atividade e o saldo na plataforma.\n\nA validação diária leva apenas alguns minutos.',
  [
    [cb('⏰ Ver horários', 'horarios'), cb('💚 Ver modalidades', 'modalidades')],
    [url('🎬 Ver explicação completa', `${SITE}/como-funciona.html`)],
    [url('🚀 Criar conta', AFFILIATE)],
    homeRow
  ]
);

const horarios = id => sendMessage(id,
  '⏰ <b>Janelas da atividade diária</b>\n\n☀️ <b>10:00–13:00</b>\n🌙 <b>19:00–22:00</b>\n\nHorário de Portugal. Nos dias elegíveis, basta realizar a atividade numa das duas janelas.',
  [[cb('▶️ Voltar ao funcionamento', 'funciona')], [cb('❓ Outras dúvidas', 'faq')], homeRow]
);

const modalidades = id => sendMessage(id,
  '💚 <b>Escolha como quer começar</b>\n\n<b>T3</b> — 560 USDT\n13 USDT por dia elegível\nMínimo de levantamento: 50 USDT\n\n<b>T4</b> — 1.300 USDT\n30 USDT por dia elegível\nMínimo de levantamento: 100 USDT\n\n<b>T5</b> — 2.700 USDT\n63 USDT por dia elegível\nMínimo de levantamento: 200 USDT',
  [
    [cb('🔄 Ciclo de 365 dias', 'ciclo')],
    [cb('💵 Como levantar', 'levantamentos')],
    [url('📊 Comparar no site', `${SITE}/modalidades.html`)],
    [url('🚀 Quero participar', AFFILIATE)],
    [url('👤 Ajuda para escolher', RODOLFO)],
    homeRow
  ]
);

const ciclo = id => sendMessage(id,
  '🔄 <b>Ciclo de 365 dias</b>\n\nCada modalidade tem duração de 365 dias. No final do ciclo, o participante pode conhecer as opções disponíveis para continuar ou encerrar a participação.\n\nDurante o ciclo, a atividade diária é acompanhada diretamente na aplicação.',
  [[cb('💚 Ver modalidades', 'modalidades')], [url('👤 Tirar uma dúvida', RODOLFO)], homeRow]
);

const levantamentos = id => sendMessage(id,
  '💵 <b>Levantamentos</b>\n\nQuando o saldo atinge o mínimo da modalidade, o levantamento pode ser solicitado para uma carteira compatível.\n\nT3: mínimo de <b>50 USDT</b>\nT4: mínimo de <b>100 USDT</b>\nT5: mínimo de <b>200 USDT</b>\n\nO fluxo utilizado é TIMI → carteira de criptoativos → conversão para EUR → conta bancária.',
  [[cb('🔐 Transferência passo a passo', 'transferencia')], [url('👤 Pedir acompanhamento', RODOLFO)], homeRow]
);

const transferencia = id => sendMessage(id,
  '🔐 <b>Ativação e transferências</b>\n\n1️⃣ Prepare o valor na plataforma de criptoativos utilizada.\n2️⃣ Converta para a moeda indicada.\n3️⃣ Confirme a moeda, a rede e o endereço mostrados na sua conta TIMI.\n4️⃣ Faça a transferência.\n5️⃣ Depois da confirmação do saldo, escolha a modalidade.\n\nSe for a sua primeira vez, peça acompanhamento antes de transferir.',
  [[url('👤 Quero acompanhamento', RODOLFO)], [url('🚀 Abrir plataforma TIMI', AFFILIATE)], homeRow]
);

const comunidade = id => sendMessage(id,
  '👥 <b>Comunidade TIMI Portugal</b>\n\nA TIMI já reúne participantes de várias cidades em eventos, encontros e atividades.\n\nNa página da comunidade pode ver entrevistas, momentos do lançamento em Lisboa e vídeos de pessoas que já participam do projeto.',
  [
    [url('🎥 Ver pessoas e eventos', `${SITE}/comunidade.html`)],
    [cb('🎬 Escolher um vídeo', 'videos')],
    [url('👤 Falar com Rodolfo', RODOLFO)],
    homeRow
  ]
);

const videos = id => sendMessage(id,
  '🎬 <b>Pessoas reais, momentos reais</b>\n\nEscolha um vídeo para conhecer participantes, eventos e experiências da comunidade TIMI:',
  [
    [url('⭐ Entrevista com Francisco Roberto', 'https://youtu.be/QMu3hg2w_8w')],
    [url('🎨 Participação e criatividade', 'https://youtu.be/KXUMbNIgTqU')],
    [url('🎉 Lançamento em Lisboa', 'https://youtu.be/ISsFWPg50gg')],
    [url('🇵🇹 Comunidade TIMI Portugal', 'https://youtu.be/UBKWfs0cdA8')],
    [cb('👥 Voltar à comunidade', 'comunidade')],
    homeRow
  ]
);

const faq = id => sendMessage(id,
  '❓ <b>Dúvidas frequentes</b>\n\nEscolha o assunto que deseja consultar:',
  [
    [cb('⏰ Horários da atividade', 'horarios')],
    [cb('🔄 Duração da modalidade', 'ciclo')],
    [cb('💵 Levantamentos', 'levantamentos')],
    [cb('🤝 Preciso indicar pessoas?', 'indicacoes')],
    [cb('💬 Para que serve o grupo?', 'grupo')],
    [url('📚 Ver todas as respostas', `${SITE}/faq.html`)],
    [url('👤 Falar com Rodolfo', RODOLFO)],
    homeRow
  ]
);

const indicacoes = id => sendMessage(id,
  '🤝 <b>Preciso indicar outras pessoas?</b>\n\nNão. As indicações são opcionais. Pode realizar a atividade diária da sua modalidade sem indicar outras pessoas.\n\nPara quem deseja divulgar o projeto, existe um programa separado de progressão por equipas.',
  [[cb('❓ Outras dúvidas', 'faq')], [url('👤 Saber mais', RODOLFO)], homeRow]
);

const grupo = id => sendMessage(id,
  '💬 <b>Para que serve o grupo?</b>\n\nOs canais da comunidade são utilizados para divulgar códigos, formações, eventos, comunicados e ajudar os participantes durante o percurso.\n\nA aplicação TIMI e os canais de comunicação são serviços distintos.',
  [[cb('▶️ Como funciona', 'funciona')], [cb('❓ Outras dúvidas', 'faq')], homeRow]
);

const desconhecido = id => sendMessage(id,
  '🤖 Não encontrei essa opção. Utilize o menu ou fale diretamente comigo para receber ajuda.',
  [[cb('🏠 Abrir menu', 'home')], [url('👤 Falar com Rodolfo', RODOLFO)]]
);

const actions = {home, funciona, horarios, modalidades, ciclo, levantamentos, transferencia, comunidade, videos, faq, indicacoes, grupo};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).json({ok: true, service: 'TIMI Portugal Telegram Bot'});
  if (!TOKEN) return res.status(500).json({ok: false, error: 'Bot token not configured'});

  try {
    const update = req.body;
    if (update.message) {
      const chatId = update.message.chat.id;
      const text = update.message.text?.trim().toLowerCase() || '';
      await (text === '/start' || text === '/menu' || text === 'menu' ? home : desconhecido)(chatId);
      return res.status(200).json({ok: true});
    }

    if (update.callback_query) {
      const query = update.callback_query;
      await telegram('answerCallbackQuery', {callback_query_id: query.id});
      await (actions[query.data] || desconhecido)(query.message.chat.id);
      return res.status(200).json({ok: true});
    }

    return res.status(200).json({ok: true});
  } catch (error) {
    console.error(error);
    return res.status(200).json({ok: false});
  }
}
