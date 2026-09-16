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
    .timi-bottom-nav{display:none}
    @media(max-width:800px){
      body{padding-bottom:82px}.site-header{position:sticky}.nav{height:62px}.brand{font-size:21px}
      .hero{padding:42px 0 28px;min-height:auto}.hero:after{right:16px;bottom:12px;font-size:12px;padding:8px 13px}.hero-grid{gap:24px}.hero h1{font-size:43px;line-height:1.02}.hero-text{font-size:16px}.cta-row{margin:22px 0 10px}.btn{min-height:48px}
      .hero-card{min-height:235px;border-width:6px;border-radius:24px}.bike-art{inset:25px 12px 70px}.wheel{width:100px;height:100px}.frame{width:155px}
      .section{padding:48px 0}.section-heading h2{font-size:32px}.options-section{padding-top:42px}.options-grid{gap:12px}.option-card{padding:14px;border-width:5px;border-radius:18px}.option-price strong{font-size:29px}.option-detail{padding:12px 8px 13px}.option-detail strong{font-size:20px}
      .footer{padding-bottom:24px}.footer-inner{gap:16px}.footer-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.footer-actions a{padding:9px 0}
      .timi-bottom-nav{position:fixed;display:grid;grid-template-columns:repeat(5,1fr);left:0;right:0;bottom:0;z-index:999;background:#c8f500;border-top:1px solid #b3d900;box-shadow:0 -5px 18px rgba(40,50,10,.14);padding:7px 5px calc(7px + env(safe-area-inset-bottom))}
      .timi-bottom-nav a{text-decoration:none;color:#394500;text-align:center;font-weight:800;font-size:11px;display:flex;flex-direction:column;align-items:center;gap:2px}
      .timi-bottom-nav span{font-size:23px;line-height:22px}.timi-bottom-nav small{font-size:10px;font-weight:800}
    }
  `;
  document.head.appendChild(style);
});
