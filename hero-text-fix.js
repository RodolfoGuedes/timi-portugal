document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroGrid = document.querySelector('.hero-grid');
  const heroCopy = document.querySelector('.hero-copy');
  if (!hero || !heroGrid || !heroCopy) return;

  // Keep the Hero focused on the message for now — no image/visual block.
  document.querySelectorAll('.timi-hero-visual, .hero-card').forEach((el) => el.remove());

  const eyebrow = heroCopy.querySelector('.eyebrow');
  const title = heroCopy.querySelector('h1');
  const text = heroCopy.querySelector('.hero-text');
  const price = heroCopy.querySelector('.hero-price-line');
  const cta = heroCopy.querySelector('.cta-row');
  const micro = heroCopy.querySelector('.microcopy');

  if (eyebrow) eyebrow.textContent = 'MOBILIDADE • TECNOLOGIA • PARTICIPAÇÃO';
  if (title) title.innerHTML = 'Conheça a <span>TIMI</span><br>e descubra como funciona.';
  if (text) text.textContent = 'Uma nova proposta ligada à mobilidade através de bicicletas e equipamentos partilhados, com um modelo de participação acompanhado por plataforma digital.';
  if (price) price.innerHTML = '<span>A partir de</span><strong>230 USDT</strong><small>modalidade atualmente apresentada</small>';
  if (micro) micro.textContent = 'Conheça as condições antes de decidir. Os valores apresentados não constituem garantia de resultados futuros.';

  const style = document.createElement('style');
  style.id = 'timi-hero-text-layout';
  style.textContent = `
    .hero{padding-top:clamp(112px,12vw,158px)!important;padding-bottom:clamp(64px,8vw,96px)!important}
    .hero-grid{display:block!important;width:min(100% - 48px,1120px)!important;max-width:1120px!important;margin:0 auto!important}
    .hero-copy{width:min(100%,820px)!important;max-width:820px!important;margin:0 auto!important;text-align:center!important;display:flex!important;flex-direction:column!important;align-items:center!important}
    .hero .eyebrow{margin:0 0 24px!important;letter-spacing:.18em!important;line-height:1.5!important}
    .hero h1{margin:0!important;max-width:820px!important;font-size:clamp(48px,6.4vw,82px)!important;line-height:.98!important;letter-spacing:-.045em!important;text-wrap:balance!important}
    .hero h1 span{white-space:nowrap}
    .hero .hero-text{color:#25351f!important;text-shadow:none!important;opacity:1!important}\n    .hero .hero-text{width:min(100%,700px)!important;max-width:700px!important;margin:28px auto 0!important;font-size:clamp(18px,1.6vw,21px)!important;line-height:1.65!important}
    .hero-price-line{margin:30px 0 0!important;padding:18px 28px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:12px!important;flex-wrap:wrap!important;border-radius:18px!important}
    .hero-price-line span{font-size:15px!important}
    .hero-price-line strong{font-size:clamp(30px,3.5vw,42px)!important;line-height:1!important}
    .hero-price-line small{flex-basis:100%!important;font-size:12px!important;margin-top:0!important}
    .hero .cta-row{margin:30px auto 0!important;justify-content:center!important;align-items:center!important;gap:12px!important}
    .hero .cta-row .btn{min-width:190px!important;justify-content:center!important}
    .hero .microcopy{max-width:620px!important;margin:18px auto 0!important;text-align:center!important;line-height:1.55!important}
    .hero-proof{width:min(100% - 48px,1000px)!important;margin:54px auto 0!important;display:flex!important;justify-content:center!important;align-items:center!important;gap:12px 28px!important;flex-wrap:wrap!important;text-align:center!important}
    .hero-proof span{line-height:1.4!important}
    @media(max-width:700px){
      .hero{padding-top:96px!important;padding-bottom:52px!important}
      .hero-grid,.hero-proof{width:min(calc(100% - 32px),1120px)!important}
      .hero .eyebrow{font-size:11px!important;letter-spacing:.13em!important;margin-bottom:20px!important}
      .hero h1{font-size:clamp(42px,12vw,58px)!important;line-height:1!important;letter-spacing:-.04em!important}
      .hero .hero-text{margin-top:22px!important;font-size:17px!important;line-height:1.55!important}
      .hero-price-line{margin-top:24px!important;padding:16px 18px!important;gap:8px!important}
      .hero-price-line strong{font-size:34px!important}
      .hero .cta-row{width:100%!important;flex-direction:column!important;margin-top:26px!important}
      .hero .cta-row .btn{width:100%!important;min-width:0!important}
      .hero .microcopy{font-size:12px!important;margin-top:16px!important}
      .hero-proof{margin-top:38px!important;gap:10px 18px!important;font-size:12px!important}
    }
  `;
  document.head.appendChild(style);
});
