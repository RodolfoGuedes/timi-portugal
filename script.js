document.addEventListener('DOMContentLoaded', () => {
  const config = window.TIMI_CONFIG || {};
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    if (config.affiliateUrl && config.affiliateUrl !== '#') {
      link.href = config.affiliateUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
  document.querySelectorAll('[data-telegram]').forEach(link => {
    if (config.telegramUrl && config.telegramUrl !== '#') {
      link.href = config.telegramUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  const bottomNav = document.createElement('nav');
  bottomNav.className = 'timi-bottom-nav';
  bottomNav.setAttribute('aria-label', 'Navegação rápida');
  bottomNav.innerHTML = `
    <a href="#top"><span>⌂</span><small>Início</small></a>
    <a href="#opcoes"><span>▣</span><small>Opções</small></a>
    <a href="${config.telegramUrl || 'https://t.me/rodolfoguedes'}" target="_blank" rel="noopener noreferrer"><span>✈</span><small>Telegram</small></a>
    <a href="${config.affiliateUrl || '#'}" target="_blank" rel="noopener noreferrer"><span>↗</span><small>Participar</small></a>
    <a href="guia-seguranca.html"><span>◉</span><small>Segurança</small></a>
  `;
  document.body.appendChild(bottomNav);

  const style = document.createElement('style');
  style.textContent = `
    :root{--accent:#36b000;--timi-lime:#baff00;--timi-soft:#f3ffd9;--timi-ink:#17200f}
    body{background:#fff;color:var(--timi-ink);font-family:Arial,Helvetica,sans-serif}
    .site-header{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.97);color:var(--timi-ink);border-bottom:1px solid #edf0e8;box-shadow:0 3px 18px rgba(30,60,10,.06)}
    .nav{height:76px}.brand{color:#10160d;font-size:25px;font-weight:900}.brand span{color:#4da600}.nav-link{color:#343a31;font-weight:700}.nav-link:hover{color:#2e9f00}
    .hero{min-height:560px;padding:54px 0 58px;background:linear-gradient(135deg,#f6ffe5 0%,#ffffff 55%,#edffd0 100%);color:#17200f;position:relative;overflow:hidden}
    .hero:after{content:'MOBILIDADE INTELIGENTE';position:absolute;right:5%;bottom:24px;background:#39ad00;color:#fff;border-radius:999px;padding:10px 18px;font-size:11px;font-weight:900;letter-spacing:.08em;box-shadow:0 8px 22px rgba(50,130,0,.18)}
    .hero-grid{align-items:center;gap:42px}.hero h1{font-size:clamp(42px,5.8vw,70px);line-height:.98;color:#17200f;letter-spacing:-.04em}.hero h1 span{color:#39a900}.hero-text{color:#596354;max-width:620px;line-height:1.55}.eyebrow{display:inline-block;color:#fff;background:#39ad00;border-radius:999px;padding:9px 14px;letter-spacing:.08em;font-weight:900}
    .btn{min-height:50px;border-radius:999px;box-shadow:0 7px 18px rgba(40,100,10,.10);font-weight:800}.btn-primary{background:#b8f500;color:#152000}.btn-primary:hover{background:#9fe000}.btn-secondary{border:1px solid #dbe3d2;background:#fff;color:#30382a}
    .hero-card{min-height:360px;border:8px solid rgba(255,255,255,.94);border-radius:30px;background-color:#edfbd8;background-image:url('https://lisbongo.com/wp-content/uploads/2020/02/Gira-in-lisbon.jpg');background-size:cover;background-position:center;background-repeat:no-repeat;box-shadow:0 18px 45px rgba(40,80,15,.16);position:relative;overflow:hidden}
    .hero-card:before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,30,5,.03) 35%,rgba(10,25,5,.38) 100%);pointer-events:none}.hero-card .bike-art,.hero-card .glow{display:none}
    .card-label{position:absolute;left:20px;right:20px;bottom:18px;z-index:2;background:rgba(255,255,255,.94);border-radius:16px;padding:13px 16px;box-shadow:0 8px 22px rgba(20,40,10,.13)}.card-label strong{display:block;color:#17200f;font-size:16px}.card-label span{display:block;color:#68715f;margin-top:3px;font-size:12px}
    .section{padding:72px 0}.section-heading{margin-bottom:24px}.section-heading span{color:#68a83b}.section-heading h2{color:#18200f}
    #como-funciona{background:#fff}.steps article{padding:24px;border:1px solid #e4eadc;border-radius:20px;background:#fff;box-shadow:0 8px 24px rgba(40,70,15,.06)}.steps b{color:#43a900}.steps h3{margin:16px 0 7px}
    .options-section{background:linear-gradient(180deg,#efffd0 0%,#fbfff2 100%);position:relative}.options-section:before{content:'OPÇÕES DE PARTICIPAÇÃO';display:block;font-weight:900;color:#4d8200;font-size:12px;letter-spacing:.08em;margin-bottom:8px}
    .options-grid{gap:18px}.option-card{padding:20px;border:6px solid #fff;border-radius:22px;background:#f7ffe5;box-shadow:0 10px 25px rgba(50,80,15,.09)}.option-top{margin-bottom:14px}.option-top>span:first-child{font-size:23px;color:#222a17}.option-tag{background:#fff;color:#4f7d1e;padding:6px 9px}.option-price{padding:14px 12px;border:0;border-radius:14px;background:#fff;display:flex;align-items:end;justify-content:space-between}.option-price small{color:#858b7d}.option-price strong{font-size:32px;color:#202811}.option-detail{padding:15px 12px 16px}.option-detail span{color:#727b6a}.option-detail strong{font-size:22px;color:#202811}.option-card .btn{border-radius:999px}.featured-option{border-color:#d9f98c;box-shadow:0 12px 28px rgba(70,120,10,.15)}.options-note{background:rgba(255,255,255,.82);border-color:#d9e9bd;border-radius:16px}
    .dark-section{background:#17200f;color:#fff}.dark-section .section-heading h2{color:#fff}.dark-section .section-heading span{color:#b8f500}.dark-section .lead{color:#d8dfcf}.feature-list div{border-color:rgba(255,255,255,.12)}
    .trust-section{background:#fff}.info-card{border-color:#e1e8da;border-radius:20px;box-shadow:0 8px 24px rgba(40,70,15,.06)}.info-number,.text-link{color:#4b9d00}
    .action-card{background:#f0f9df;border-color:#dcebc0;border-radius:22px}.action-card .btn-secondary{background:#fff;color:#29321f;border-color:#d8e1ca}
    .faq-section{background:#f6f8f2}.faq-section details{border-color:#dce4d4}
    .footer{background:#b8f500;color:#18200e;padding:40px 0 28px}.footer p{color:#53601d}.footer-actions a{color:#27300f}.footer-actions a:hover{color:#fff}.disclaimer{border-color:rgba(40,70,10,.16);color:#53601d}.microcopy{color:#69745e}
    .news-section{background:#f8faf5}.news-intro{max-width:760px;margin-bottom:26px}.news-grid{grid-template-columns:repeat(3,1fr)}.news-card{overflow:hidden;border:1px solid #e0e7d8;background:#fff;border-radius:20px;box-shadow:0 8px 22px rgba(45,70,15,.07)}.news-visual{height:170px;display:flex;align-items:flex-end;padding:16px;background:linear-gradient(135deg,#174b08,#54ad00);color:#fff;position:relative}.news-visual.event{background:linear-gradient(135deg,#173b0b,#66ae00 52%,#ddff8b)}.news-visual.prize{background:linear-gradient(135deg,#102d0b,#42ad00 55%,#dfff72)}.news-visual .visual-icon{font-size:48px;line-height:1;filter:drop-shadow(0 3px 5px rgba(0,0,0,.2))}.news-visual .visual-label{position:absolute;right:14px;top:14px;background:#b8f500;color:#1c2509;border-radius:999px;padding:7px 10px;font-size:10px;font-weight:900}.news-body{padding:20px}.news-body h3{margin:6px 0 10px;color:#252d19}.news-body p{color:#5f6858;margin:0 0 14px}.news-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;color:#5e8e36}.news-source{display:block;color:#7a8274;line-height:1.45}.news-status{display:inline-block;background:#efffc9;color:#5b7c20;border-radius:999px;padding:7px 10px;font-size:11px;font-weight:800}.news-card.news-new{border-color:#d0e99a}.news-card.news-new:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(45,70,15,.12)}
    .timi-bottom-nav{display:none}
    @media(max-width:800px){
      body{padding-bottom:82px}.site-header{position:sticky}.nav{height:62px}.brand{font-size:21px}
      .hero{padding:38px 0 30px;min-height:auto}.hero:after{right:16px;bottom:12px;font-size:10px;padding:8px 12px}.hero-grid{gap:24px}.hero h1{font-size:43px;line-height:1.02}.hero-text{font-size:16px}.cta-row{margin:22px 0 10px}.btn{min-height:48px}
      .hero-card{min-height:270px;border-width:6px;border-radius:24px;background-position:center}.card-label{left:12px;right:12px;bottom:12px;padding:11px 13px}.card-label strong{font-size:14px}.card-label span{font-size:11px}.section{padding:48px 0}.section-heading h2{font-size:32px}.options-section{padding-top:42px}.options-grid{gap:12px}.option-card{padding:14px;border-width:5px;border-radius:18px}.option-price strong{font-size:29px}.option-detail{padding:12px 8px 13px}.option-detail strong{font-size:20px}
      .news-grid{grid-template-columns:1fr}.news-visual{height:150px}.news-body{padding:17px}
      .footer{padding-bottom:24px}.footer-inner{gap:16px}.footer-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.footer-actions a{padding:9px 0}
      .timi-bottom-nav{position:fixed;display:grid;grid-template-columns:repeat(5,1fr);left:0;right:0;bottom:0;z-index:999;background:#b8f500;border-top:1px solid #9ed900;box-shadow:0 -5px 18px rgba(40,50,10,.14);padding:7px 5px calc(7px + env(safe-area-inset-bottom))}
      .timi-bottom-nav a{text-decoration:none;color:#394500;text-align:center;font-weight:800;font-size:11px;display:flex;flex-direction:column;align-items:center;gap:2px}
      .timi-bottom-nav span{font-size:23px;line-height:22px}.timi-bottom-nav small{font-size:10px;font-weight:800}
    }
  `;
  document.head.appendChild(style);

  // Hero: fila de bicicletas elétricas de bike-sharing, semelhante ao modelo da imagem de referência enviada.
  // A fotografia é usada apenas como referência visual de uma estação com várias bicicletas lado a lado.
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    heroCard.style.backgroundImage = "linear-gradient(180deg,rgba(10,30,5,.03),rgba(10,25,5,.18)),url('https://lisbongo.com/wp-content/uploads/2020/02/Gira-in-lisbon.jpg')";
    heroCard.style.backgroundSize = 'cover';
    heroCard.style.backgroundPosition = 'center';
    heroCard.style.backgroundRepeat = 'no-repeat';
    heroCard.querySelector('.bike-art')?.remove();
    heroCard.querySelector('.glow')?.remove();
  }

  const newsGrid = document.querySelector('.news-grid');
  if (newsGrid) {
    const newNews = [
      {
        type:'SORTEIO', cls:'prize', icon:'🎁', date:'ATÉ 12 SET 2026',
        kicker:'Campanha divulgada',
        title:'Sorteio de prémios associado ao lançamento TIMI em Lisboa',
        text:'O material divulgado apresenta uma campanha de números de sorteio associada à escolha ou atualização de equipamentos e à progressão de parceiros. Entre os prémios ilustrados estão iPhone, tablet, TV, cafeteira, coluna Bluetooth, extrator de sumo, auriculares e secador.',
        note:'As regras, elegibilidade e condições devem ser confirmadas através das informações oficiais aplicáveis.'
      },
      {
        type:'EVENTO', cls:'event', icon:'🚲', date:'3–8 SET 2026',
        kicker:'Evento em Portugal',
        title:'TIMI em destaque na Festa das Vindimas 2026, em Palmela',
        text:'Os materiais recebidos apresentam a TIMI associada à Festa das Vindimas de Palmela e mostram a marca ligada ao evento e ao Palco TIMI. O programa decorreu de 3 a 8 de setembro de 2026 e incluiu música, cultura, gastronomia e atividades tradicionais.',
        note:'Informação baseada nos materiais recebidos para esta página.'
      }
    ];
    newNews.reverse().forEach(item => {
      const card=document.createElement('article');
      card.className='news-card news-new';
      card.innerHTML=`<div class="news-visual ${item.cls}"><span class="visual-icon">${item.icon}</span><span class="visual-label">${item.type}</span></div><div class="news-body"><div class="news-kicker">${item.kicker} · ${item.date}</div><h3>${item.title}</h3><p>${item.text}</p><small class="news-source">${item.note}</small></div>`;
      newsGrid.prepend(card);
    });
  }
});
