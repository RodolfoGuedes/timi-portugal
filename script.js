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
    :root{--accent:#c8f500;--timi-lime:#eaff93;--timi-soft:#f7ffd0;--timi-ink:#202510}
    body{background:#f7f8f1;color:var(--timi-ink);font-family:Arial,Helvetica,sans-serif}
    .site-header{position:sticky;top:0;background:#fff;color:var(--timi-ink);border-bottom:1px solid #e7eadc;box-shadow:0 2px 12px rgba(50,60,10,.05)}
    .nav{height:68px}.brand{color:#171b10;font-size:24px}.brand span{color:#7a806f}.nav-link{color:#565b4f;font-weight:700}.nav-link:hover{color:#6b8500}
    .hero{min-height:500px;padding:70px 0 55px;background:linear-gradient(135deg,#baf000 0%,#e8ff91 48%,#f7ffd0 100%);color:#1d220f;position:relative}
    .hero:after{content:'Mobilidade inteligente';position:absolute;right:6%;bottom:24px;background:#fff;border-radius:30px;padding:10px 18px;font-weight:800;box-shadow:0 8px 25px rgba(80,90,20,.14)}
    .hero h1{font-size:clamp(42px,6vw,72px);color:#1c210f}.hero h1 span{color:#435900}.hero-text{color:#4b513d}.eyebrow{color:#566d00;letter-spacing:.1em}
    .btn{min-height:50px;border-radius:14px;box-shadow:0 5px 14px rgba(50,60,10,.08)}.btn-primary{background:#b8ed00;color:#182000}.btn-secondary{border:1px solid #d2d7c3;background:#fff;color:#3c4135}
    .hero-card{min-height:330px;border:8px solid rgba(255,255,255,.72);border-radius:28px;background:linear-gradient(145deg,#faffdf,#dfff55);box-shadow:0 12px 30px rgba(75,90,10,.12)}
    .glow{background:#fff;opacity:.55}.wheel{border-color:#27320d}.frame{border-color:#6d9200}.seat,.handle{background:#26300e;border-color:#26300e}.card-label strong{color:#202510}.card-label span{color:#69715b}
    .section{padding:68px 0}.section-heading{margin-bottom:24px}.section-heading span{color:#87905f}.section-heading h2{color:#222713}
    #como-funciona{background:#fff}.steps article{padding:24px;border:1px solid #e0e4d4;border-radius:18px;background:#fff;box-shadow:0 7px 20px rgba(40,50,10,.05)}.steps b{color:#829400}.steps h3{margin:16px 0 7px}
    .options-section{background:linear-gradient(180deg,#efffb0 0%,#f8ffd8 100%);position:relative}.options-section:before{content:'Opções de participação';display:block;font-weight:900;color:#647500;font-size:13px;margin-bottom:8px}
    .options-grid{gap:16px}.option-card{padding:18px;border:7px solid #fff;border-radius:20px;background:linear-gradient(145deg,#edff9b,#f3ffb4);box-shadow:0 7px 18px rgba(67,78,12,.10)}
    .option-top{margin-bottom:14px}.option-top>span:first-child{font-size:23px;color:#22280f}.option-tag{background:#fff;color:#687719;padding:6px 9px}
    .option-price{padding:13px 12px;border:0;border-radius:12px;background:rgba(255,255,255,.78);display:flex;align-items:end;justify-content:space-between}.option-price small{color:#85887e}.option-price strong{font-size:32px;color:#202510}.option-detail{padding:15px 12px 16px}.option-detail span{color:#777a70}.option-detail strong{font-size:22px;color:#202510}
    .option-card .btn{border-radius:999px}.featured-option{border-color:#fff;box-shadow:0 9px 24px rgba(80,90,10,.16)}.options-note{background:rgba(255,255,255,.72);border-color:#dbe5ae;border-radius:14px}
    .dark-section{background:#20250f;color:#fff}.dark-section .section-heading h2{color:#fff}.dark-section .section-heading span{color:#b9e900}.dark-section .lead{color:#d5d9c8}.feature-list div{border-color:rgba(255,255,255,.12)}
    .trust-section{background:#fff}.info-card{border-color:#e1e5d7;border-radius:18px;box-shadow:0 7px 20px rgba(40,50,10,.05)}.info-number,.text-link{color:#6d8500}
    .action-card{background:#eff4d9;border-color:#dbe5ad;border-radius:20px}.action-card .btn-secondary{background:#fff;color:#2c311f;border-color:#d4dac0}
    .faq-section{background:#f3f5ed}.faq-section details{border-color:#d8ddcf}
    .footer{background:#c5f200;color:#20260f;padding:38px 0 28px}.footer p{color:#596023}.footer-actions a{color:#2b320e}.footer-actions a:hover{color:#fff}.disclaimer{border-color:rgba(50,60,10,.16);color:#596023}.microcopy{color:#687052}
    .news-section{background:#f8faef}.news-intro{max-width:760px;margin-bottom:26px}.news-grid{grid-template-columns:repeat(3,1fr)}.news-card{overflow:hidden;border:1px solid #dfe5cf;background:#fff;border-radius:20px;box-shadow:0 8px 22px rgba(45,60,10,.07)}.news-visual{height:170px;display:flex;align-items:flex-end;padding:16px;background:linear-gradient(135deg,#1e470c,#b8ee00);color:#fff;position:relative}.news-visual.event{background:linear-gradient(135deg,#152f09,#6da600 52%,#e9ff87)}.news-visual.prize{background:linear-gradient(135deg,#071e0a,#36a900 55%,#dfff58)}.news-visual .visual-icon{font-size:48px;line-height:1;filter:drop-shadow(0 3px 5px rgba(0,0,0,.2))}.news-visual .visual-label{position:absolute;right:14px;top:14px;background:#c8f500;color:#1c2509;border-radius:999px;padding:7px 10px;font-size:10px;font-weight:900}.news-body{padding:20px}.news-body h3{margin:6px 0 10px;color:#252b14}.news-body p{color:#5f6656;margin:0 0 14px}.news-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;color:#708300}.news-source{display:block;color:#7a806f;line-height:1.45}.news-status{display:inline-block;background:#f0ffc0;color:#637500;border-radius:999px;padding:7px 10px;font-size:11px;font-weight:800}.news-card.news-new{border-color:#cfe46a}.news-card.news-new:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(45,60,10,.12)}
    .timi-bottom-nav{display:none}
    @media(max-width:800px){
      body{padding-bottom:82px}.site-header{position:sticky}.nav{height:62px}.brand{font-size:21px}
      .hero{padding:42px 0 28px;min-height:auto}.hero:after{right:16px;bottom:12px;font-size:12px;padding:8px 13px}.hero-grid{gap:24px}.hero h1{font-size:43px;line-height:1.02}.hero-text{font-size:16px}.cta-row{margin:22px 0 10px}.btn{min-height:48px}
      .hero-card{min-height:235px;border-width:6px;border-radius:24px}.bike-art{inset:25px 12px 70px}.wheel{width:100px;height:100px}.frame{width:155px}
      .section{padding:48px 0}.section-heading h2{font-size:32px}.options-section{padding-top:42px}.options-grid{gap:12px}.option-card{padding:14px;border-width:5px;border-radius:18px}.option-price strong{font-size:29px}.option-detail{padding:12px 8px 13px}.option-detail strong{font-size:20px}
      .news-grid{grid-template-columns:1fr}.news-visual{height:150px}.news-body{padding:17px}
      .footer{padding-bottom:24px}.footer-inner{gap:16px}.footer-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.footer-actions a{padding:9px 0}
      .timi-bottom-nav{position:fixed;display:grid;grid-template-columns:repeat(5,1fr);left:0;right:0;bottom:0;z-index:999;background:#c8f500;border-top:1px solid #b3d900;box-shadow:0 -5px 18px rgba(40,50,10,.14);padding:7px 5px calc(7px + env(safe-area-inset-bottom))}
      .timi-bottom-nav a{text-decoration:none;color:#394500;text-align:center;font-weight:800;font-size:11px;display:flex;flex-direction:column;align-items:center;gap:2px}
      .timi-bottom-nav span{font-size:23px;line-height:22px}.timi-bottom-nav small{font-size:10px;font-weight:800}
    }
  `;
  document.head.appendChild(style);

  // Substitui o desenho da bicicleta no cartão principal por uma bicicleta de bike-sharing real.
  // A imagem abaixo é de um produto de bike-sharing publicado pela LightMobie Portugal.
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    heroCard.style.backgroundImage = "linear-gradient(145deg,rgba(250,255,223,.18),rgba(223,255,85,.08)),url('https://lightmobie.pt/wp-content/uploads/2026/07/bici_polis_verde.webp')";
    heroCard.style.backgroundSize = 'contain';
    heroCard.style.backgroundPosition = 'center';
    heroCard.style.backgroundRepeat = 'no-repeat';
    heroCard.style.backgroundColor = '#eaff93';
    heroCard.querySelector('.bike-art')?.remove();
    heroCard.querySelector('.glow')?.remove();
    heroCard.style.display = 'flex';
    heroCard.style.alignItems = 'flex-end';
    heroCard.style.justifyContent = 'flex-start';
  }

  // Novas notícias recebidas: entram automaticamente no início da área de notícias.
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
