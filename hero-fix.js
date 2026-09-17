document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroGrid = document.querySelector('.hero-grid');
  if (!hero || !heroGrid) return;

  const imageUrl = './WhatsApp%20Image%202026-09-17%20at%2003.21.39.jpeg';

  // Use the exact image uploaded to the repository as the main hero visual.
  const visual = document.createElement('div');
  visual.className = 'timi-hero-visual';
  visual.innerHTML = `<img src="${imageUrl}" alt="TIMI — bicicleta elétrica e mobilidade inteligente" loading="eager">`;
  hero.insertBefore(visual, heroGrid);

  const style = document.createElement('style');
  style.id = 'timi-hero-image';
  style.textContent = `
    .hero-card{display:none!important}
    .timi-hero-visual{width:100%;overflow:hidden;margin:0 0 34px;position:relative;background:#dfead0}
    .timi-hero-visual img{display:block;width:100%;height:clamp(280px,38vw,560px);object-fit:cover;object-position:center center}
    .hero-grid{grid-template-columns:minmax(0,760px)!important;max-width:1120px!important;margin-left:auto!important;margin-right:auto!important;justify-content:center!important;gap:0!important}
    .hero-copy{max-width:760px!important;margin:0 auto!important;width:100%!important}
    .hero h1{max-width:760px!important}
    .hero-text{max-width:680px!important}
    .hero .cta-row{justify-content:flex-start!important}
    .hero-proof{max-width:1120px!important;margin-left:auto!important;margin-right:auto!important}
    @media(max-width:850px){
      .hero{padding-top:94px!important;padding-bottom:42px!important;min-height:0!important}
      .timi-hero-visual{margin:0 0 24px}
      .timi-hero-visual img{height:clamp(190px,48vw,310px);object-position:center center}
      .hero-grid{grid-template-columns:1fr!important;width:min(calc(100% - 40px),1120px)!important}
      .hero-copy{max-width:100%!important}
      .hero h1{font-size:clamp(40px,11.8vw,52px)!important}
      .hero .cta-row{justify-content:stretch!important}
      .hero-proof{width:min(calc(100% - 40px),1120px)!important}
    }
  `;
  document.head.appendChild(style);
});
