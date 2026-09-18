document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main) return;

  const config = window.TIMI_CONFIG || {};
  const telegramUrl = config.telegramUrl && config.telegramUrl !== '#' ? config.telegramUrl : 'https://t.me/TIMIPortugalBot';

  const hero = document.querySelector('#top.hero');
  if (hero) {
    const copy = hero.querySelector('.hero-copy');
    if (copy) copy.innerHTML = `
      <div class="eyebrow">TIMI PORTUGAL • MOBILIDADE PARTILHADA</div>
      <h1>Conheça o modelo de participação <span>TIMI</span> em Portugal.</h1>
      <p class="hero-text">Entenda em poucos minutos como funcionam as modalidades apresentadas, a atividade diária, os levantamentos e o ciclo de participação antes de tomar uma decisão.</p>
      <div class="hero-modalities-strip" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:22px 0;">
        <div><small>T5 • 2.700 USDT</small><strong>63 USDT/dia*</strong></div>
        <div><small>T3 • 560 USDT</small><strong>13 USDT/dia*</strong></div>
        <div><small>T4 • 1.300 USDT</small><strong>30 USDT/dia*</strong></div>
      </div>
      <div class="cta-row">
        <a class="btn btn-primary" href="#resumo">Entender como funciona</a>
        <a class="btn btn-secondary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Tirar uma dúvida</a>
      </div>
      <p class="microcopy">*Valores diários indicados no programa. Sujeitos a dias elegíveis, atividade exigida, condições da plataforma e taxa aplicável no levantamento. Não constituem garantia de rendimento.</p>`;
  }

  if (!document.querySelector('#resumo')) {
    const quick = document.createElement('section');
    quick.className = 'section'; quick.id = 'resumo';
    quick.innerHTML = `<div class="container"><div class="section-heading"><span>01</span><h2>TIMI em 30 segundos</h2></div><p class="lead section-lead">Primeiro, veja o percurso completo. Depois pode aprofundar cada etapa.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-top:22px;"><div class="reward-card"><i>1️⃣</i><h3>Escolha</h3><p>Conheça T3, T4 ou T5 e as condições de cada modalidade.</p></div><div class="reward-card"><i>2️⃣</i><h3>Acompanhe</h3><p>Nos dias elegíveis, acompanhe o código disponibilizado nos canais informados.</p></div><div class="reward-card"><i>3️⃣</i><h3>Valide</h3><p>Insira o código na aplicação dentro de uma das janelas disponíveis.</p></div><div class="reward-card"><i>4️⃣</i><h3>Acumule</h3><p>O valor diário indicado é contabilizado quando as condições aplicáveis são cumpridas.</p></div><div class="reward-card"><i>5️⃣</i><h3>Levante</h3><p>Ao atingir o mínimo, pode solicitar levantamento, sujeito à taxa informada de 25%.</p></div></div><div class="financial-note" style="margin-top:18px;"><b>Informação-chave</b><span>A indicação de outras pessoas é opcional e não é requisito para o valor diário da sua modalidade.</span></div></div>`;
    hero?.insertAdjacentElement('afterend', quick);
  }

  const order = ['resumo','opcoes','projeto','timi-portugal','videos','como-funciona','ciclo','levantamentos','participar','indicacao','experiencia','beneficios','comunidade','seguranca','faq'];
  order.forEach(id => { const el = document.getElementById(id); if (el) main.appendChild(el); });

  const modalityData = {T3:['560 USDT','13 USDT/dia','50 USDT'],T4:['1.300 USDT','30 USDT/dia','100 USDT'],T5:['2.700 USDT','63 USDT/dia','200 USDT']};
  document.querySelectorAll('#opcoes .option-card').forEach(card => {
    const text=card.textContent||''; const key=['T3','T4','T5'].find(k=>text.includes(k)); if(!key||card.querySelector('.decision-facts'))return; const d=modalityData[key]; const facts=document.createElement('div'); facts.className='decision-facts'; facts.style.cssText='margin:14px 0;padding:14px;border-radius:14px;background:rgba(0,0,0,.035);font-size:12px;line-height:1.7;text-align:left'; facts.innerHTML=`<b style="display:block;margin-bottom:4px;">Condições em resumo</b><span>Valor apresentado: <strong>${d[0]}</strong></span><br><span>Valor diário indicado: <strong>${d[1]}</strong></span><br><span>Levantamento mínimo: <strong>${d[2]}</strong></span><br><span>Ciclo apresentado: <strong>365 dias</strong></span><br><span>Taxa informada no levantamento: <strong>25%</strong></span>`; const button=card.querySelector('a.btn'); if(button)card.insertBefore(facts,button);else card.appendChild(facts);
  });

  let finalCta=document.querySelector('#decidir'); if(!finalCta){finalCta=document.createElement('section');finalCta.className='section';finalCta.id='decidir';finalCta.innerHTML=`<div class="container"><div style="padding:34px;border-radius:26px;background:#111;color:#fff;text-align:center;"><span style="font-size:12px;font-weight:800;letter-spacing:.08em;opacity:.72;">DEPOIS DE CONHECER AS CONDIÇÕES</span><h2 style="margin:10px 0 12px;font-size:clamp(28px,5vw,46px);">Quer esclarecer alguma dúvida antes de decidir?</h2><p style="max-width:700px;margin:0 auto 20px;opacity:.8;line-height:1.65;">Fale diretamente comigo. Posso explicar o funcionamento e indicar onde consultar as condições atuais. A decisão de participar deve ser tomada apenas depois de compreender valores, taxas, regras e riscos.</p><a class="btn btn-primary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Falar com Rodolfo no Telegram</a></div></div>`;main.appendChild(finalCta);}

  const nav=document.querySelector('.nav-links'); if(nav)nav.innerHTML=`<a class="nav-link" href="#resumo">Como funciona</a><a class="nav-link" href="#opcoes">Modalidades</a><a class="nav-link" href="#timi-portugal">Em Portugal</a><a class="nav-link" href="#videos">Vídeos</a><a class="nav-link" href="#faq">FAQ</a><a class="nav-telegram" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">Telegram</a>`;

  const style=document.createElement('style');
  style.textContent=`
    #top.hero .hero-copy{position:relative;z-index:2;text-shadow:0 2px 12px rgba(0,0,0,.82)}
    #top.hero .hero-copy h1,#top.hero .hero-copy .hero-text,#top.hero .hero-copy .microcopy{color:#fff!important}
    #top.hero .hero-copy h1 span{color:#c7ff00!important;text-shadow:0 2px 12px rgba(0,0,0,.9)}
    #top.hero .eyebrow{color:#111!important;background:#c7ff00!important;border-color:#c7ff00!important;font-weight:900!important;text-shadow:none!important}
    #top.hero .hero-modalities-strip>div{padding:14px!important;border:1px solid rgba(255,255,255,.52)!important;border-radius:16px!important;background:rgba(0,0,0,.68)!important;box-shadow:0 8px 24px rgba(0,0,0,.22);backdrop-filter:blur(5px)}
    #top.hero .hero-modalities-strip small{color:#fff!important;font-weight:800!important;text-shadow:none!important}
    #top.hero .hero-modalities-strip strong{display:block!important;font-size:20px!important;margin-top:4px!important;color:#c7ff00!important;text-shadow:none!important}
    #top.hero .btn-secondary{background:rgba(0,0,0,.7)!important;color:#fff!important;border-color:rgba(255,255,255,.65)!important;backdrop-filter:blur(5px)}
    #top.hero .microcopy{font-weight:600!important;opacity:1!important;background:rgba(0,0,0,.56);padding:9px 12px;border-radius:10px;display:inline-block;text-shadow:none!important}
    @media(max-width:720px){.hero-modalities-strip{grid-template-columns:1fr!important}.hero-modalities-strip>div{padding:11px 13px!important}.decision-facts{font-size:12px!important}}
  `;
  document.head.appendChild(style);
});