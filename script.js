document.addEventListener('DOMContentLoaded', () => {
  // Mantém a identidade textual simples: usar apenas a palavra TIMI, sem logótipo gráfico.
  document.querySelectorAll('.brand').forEach(el => {
    el.textContent = 'TIMI';
    el.removeAttribute('aria-label');
  });
  document.querySelectorAll('img, svg').forEach(el => {
    const marker = `${el.getAttribute('alt') || ''} ${el.getAttribute('title') || ''} ${el.getAttribute('id') || ''} ${el.getAttribute('class') || ''} ${el.getAttribute('src') || ''}`.toLowerCase();
    if (marker.includes('logo') && marker.includes('timi')) {
      const replacement = document.createElement('span');
      replacement.className = 'brand';
      replacement.textContent = 'TIMI';
      el.replaceWith(replacement);
    }
  });

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
  `;
  document.head.appendChild(style);
});
