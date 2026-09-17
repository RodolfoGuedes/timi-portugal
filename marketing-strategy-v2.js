document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main) return;

  const config = window.TIMI_CONFIG || {};
  const telegramUrl = config.telegramUrl && config.telegramUrl !== '#' ? config.telegramUrl : 'https://t.me/TIMIPortugalBot';

  // 1. Hero: explain the offer in seconds without hiding material conditions.
  const hero = document.querySelector('#top.hero');
  if (hero) {
    const copy = hero.querySelector('.hero-copy');
    if (copy) copy.innerHTML = `
      <div class="eyebrow">TIMI PORTUGAL • MOBILIDADE PARTILHADA</div>
      <h1>Conheça o modelo de participação <span>TIMI</span> em Portugal.</h1>
      <p class="hero-text">Entenda em poucos minutos como funcionam as modalidades apresentadas, a atividade diária, os levantamentos e o ciclo de participação antes de tomar uma decisão.</p>
      <div class="hero-modalities-strip" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:22px 0;">
        <div style="padding:14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;"><small>T2 • 230 USDT</small><strong style="display:block;font-size:20px;margin-top:4px;">5 USDT/dia*</strong></div>
        <div style="padding:14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;"><small>T3 • 560 USDT</small><strong style="display:block;font-size:20px;margin-top:4px;">13 USDT/dia*</strong></div>
        <div style="padding:14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;"><small>T4 • 1.300 USDT</small><strong style="display:block;font-size:20px;margin-top:4px;">30 USDT/dia*</strong></div>
      </div>
      <div class="cta-row">
        <a class="btn btn-primary" href="#resumo">Entender como funciona</a>
        <a class="btn btn-secondary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Tirar uma dúvida</a>
      </div>
      <p class="microcopy">*Valores diários indicados nas informações do programa. Sujeitos a dias elegíveis, atividade exigida, condições da plataforma e taxa aplicável no levantamento. Não constituem garantia de rendimento.</p>`;
  }

  // 2. Fast comprehension block immediately after hero.
  if (!document.querySelector('#resumo')) {
    const quick = document.createElement('section');
    quick.className = 'section';
    quick.id = 'resumo';
    quick.innerHTML = `<div class="container">
      <div class="section-heading"><span>01</span><h2>TIMI em 30 segundos</h2></div>
      <p class="lead section-lead">Primeiro, veja o percurso completo. Depois pode aprofundar cada etapa.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-top:22px;">
        <div class="reward-card"><i>1️⃣</i><h3>Escolha</h3><p>Conheça T2, T3 ou T4 e as condições de cada modalidade.</p></div>
        <div class="reward-card"><i>2️⃣</i><h3>Acompanhe</h3><p>Nos dias elegíveis, acompanhe o código disponibilizado nos canais informados.</p></div>
        <div class="reward-card"><i>3️⃣</i><h3>Valide</h3><p>Insira o código na aplicação dentro de uma das janelas disponíveis.</p></div>
        <div class="reward-card"><i>4️⃣</i><h3>Acumule</h3><p>O valor diário indicado é contabilizado quando as condições aplicáveis são cumpridas.</p></div>
        <div class="reward-card"><i>5️⃣</i><h3>Levante</h3><p>Ao atingir o mínimo, pode solicitar levantamento, sujeito à taxa informada de 25%.</p></div>
      </div>
      <div class="financial-note" style="margin-top:18px;"><b>Informação-chave</b><span>A indicação de outras pessoas é opcional e, segundo as condições apresentadas, não é requisito para o valor diário da sua modalidade.</span></div>
    </div>`;
    hero?.insertAdjacentElement('afterend', quick);
  }

  // 3. Put decision-driving information in a natural order.
  const order = ['resumo','opcoes','projeto','timi-portugal','videos','como-funciona','ciclo','levantamentos','participar','indicacao','experiencia','beneficios','comunidade','seguranca','faq'];
  order.forEach(id => {
    const el = document.getElementById(id);
    if (el) main.appendChild(el);
  });

  // 4. Make modality cards more decision-useful by surfacing key conditions.
  const modalityData = {
    T2: ['230 USDT','5 USDT/dia','30 USDT'],
    T3: ['560 USDT','13 USDT/dia','50 USDT'],
    T4: ['1.300 USDT','30 USDT/dia','100 USDT']
  };
  document.querySelectorAll('#opcoes .option-card').forEach(card => {
    const text = card.textContent || '';
    const key = ['T2','T3','T4'].find(k => text.includes(k));
    if (!key || card.querySelector('.decision-facts')) return;
    const d = modalityData[key];
    const facts = document.createElement('div');
    facts.className = 'decision-facts';
    facts.style.cssText = 'margin:14px 0;padding:14px;border-radius:14px;background:rgba(0,0,0,.035);font-size:12px;line-height:1.7;text-align:left';
    facts.innerHTML = `<b style="display:block;margin-bottom:4px;">Condições em resumo</b><span>Valor apresentado: <strong>${d[0]}</strong></span><br><span>Valor diário indicado: <strong>${d[1]}</strong></span><br><span>Levantamento mínimo: <strong>${d[2]}</strong></span><br><span>Ciclo apresentado: <strong>365 dias</strong></span><br><span>Taxa informada no levantamento: <strong>25%</strong></span>`;
    const button = card.querySelector('a.btn');
    if (button) card.insertBefore(facts, button); else card.appendChild(facts);
  });

  // 5. Add a strong but non-pressuring final CTA after the FAQ.
  let finalCta = document.querySelector('#decidir');
  if (!finalCta) {
    finalCta = document.createElement('section');
    finalCta.className = 'section';
    finalCta.id = 'decidir';
    finalCta.innerHTML = `<div class="container"><div style="padding:34px;border-radius:26px;background:#111;color:#fff;text-align:center;">
      <span style="font-size:12px;font-weight:800;letter-spacing:.08em;opacity:.72;">DEPOIS DE CONHECER AS CONDIÇÕES</span>
      <h2 style="margin:10px 0 12px;font-size:clamp(28px,5vw,46px);">Quer esclarecer alguma dúvida antes de decidir?</h2>
      <p style="max-width:700px;margin:0 auto 20px;opacity:.8;line-height:1.65;">Fale diretamente comigo. Posso explicar o funcionamento e indicar onde consultar as condições atuais. A decisão de participar deve ser tomada apenas depois de compreender valores, taxas, regras e riscos.</p>
      <a class="btn btn-primary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Falar com Rodolfo no Telegram</a>
    </div></div>`;
    main.appendChild(finalCta);
  }

  // 6. Navigation follows the new decision journey.
  const nav = document.querySelector('.nav-links');
  if (nav) nav.innerHTML = `<a class="nav-link" href="#resumo">Como funciona</a><a class="nav-link" href="#opcoes">Modalidades</a><a class="nav-link" href="#timi-portugal">Em Portugal</a><a class="nav-link" href="#videos">Vídeos</a><a class="nav-link" href="#faq">FAQ</a><a class="nav-telegram" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">Telegram</a>`;

  // Mobile safeguard for the new hero strip.
  const style = document.createElement('style');
  style.textContent = `@media(max-width:720px){.hero-modalities-strip{grid-template-columns:1fr!important}.hero-modalities-strip>div{padding:11px 13px!important}.decision-facts{font-size:12px!important}}`;
  document.head.appendChild(style);
});