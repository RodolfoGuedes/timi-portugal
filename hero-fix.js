document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroGrid = document.querySelector('.hero-grid');
  if (!hero || !heroGrid) return;

  // Public Hero label.
  const eyebrow = hero.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = 'MOBILIDADE • TECNOLOGIA • PARTICIPAÇÃO';

  // Keep the approved Hero content and use the uploaded TIMI artwork only in the free space on desktop.
  const oldVisual = document.querySelector('.timi-hero-visual');
  if (oldVisual) oldVisual.remove();

  const style = document.createElement('style');
  style.id = 'timi-hero-polished';
  style.textContent = `
    .hero{
      position:relative!important;
      overflow:hidden!important;
      min-height:0!important;
      height:auto!important;
      padding:58px 0 48px!important;
      background:
        radial-gradient(circle at 18% 12%,rgba(199,255,0,.18),transparent 25%),
        radial-gradient(circle at 84% 88%,rgba(199,255,0,.09),transparent 28%),
        linear-gradient(180deg,#f8faf6 0%,#edf3e8 100%)!important;
    }
    .hero::after{
      content:""!important;
      position:absolute!important;
      top:34px!important;
      right:0!important;
      bottom:30px!important;
      width:48%!important;
      max-width:760px!important;
      background-image:
        linear-gradient(90deg,rgba(244,248,240,1) 0%,rgba(244,248,240,.22) 18%,rgba(244,248,240,0) 42%),
        url('./WhatsApp%20Image%202026-09-17%20at%2003.21.39.jpeg')!important;
      background-repeat:no-repeat!important;
      background-position:center center!important;
      background-size:100% auto!important;
      opacity:.88!important;
      border-radius:32px 0 0 32px!important;
      pointer-events:none!important;
      z-index:0!important;
    }
    .hero-grid{
      position:relative!important;
      z-index:1!important;
      display:block!important;
      width:min(calc(100% - 40px),1040px)!important;
      max-width:1040px!important;
      margin:0 auto!important;
    }
    .hero-copy{
      width:54%!important;
      max-width:610px!important;
      margin:0 auto 0 0!important;
      text-align:center!important;
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
    }
    .hero .eyebrow{
      margin:0 0 16px!important;
      padding:7px 13px!important;
      border:1px solid rgba(35,48,28,.14)!important;
      border-radius:999px!important;
      background:#fff!important;
      color:#53604e!important;
      font-size:11px!important;
      line-height:1!important;
      font-weight:800!important;
      letter-spacing:.12em!important;
    }
    .hero h1{
      max-width:900px!important;
      margin:0!important;
      color:#182016!important;
      font-size:clamp(42px,4.3vw,64px)!important;
      line-height:1.02!important;
      letter-spacing:-.045em!important;
      font-weight:900!important;
    }
    .hero h1 span{color:#668500!important}
    .hero-text{
      max-width:620px!important;
      margin:18px auto 0!important;
      color:#4d5849!important;
      font-size:17px!important;
      line-height:1.5!important;
    }
    .hero-price-line{
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      justify-content:center!important;
      gap:3px!important;
      width:fit-content!important;
      min-width:285px!important;
      margin:20px auto 0!important;
      padding:13px 30px 12px!important;
      border:1px solid rgba(42,57,33,.15)!important;
      border-radius:16px!important;
      background:#fff!important;
      box-shadow:0 8px 24px rgba(28,40,24,.07)!important;
    }
    .hero-price-line span{color:#505b4c!important;font-size:13px!important;line-height:1.2!important;font-weight:700!important}
    .hero-price-line strong{display:block!important;color:#15200f!important;font-size:clamp(34px,4vw,46px)!important;line-height:1!important;letter-spacing:-.035em!important;font-weight:900!important}
    .hero-price-line small{color:#6b7566!important;font-size:10px!important;line-height:1.25!important;font-weight:600!important}
    .hero .cta-row{display:flex!important;justify-content:center!important;align-items:center!important;gap:12px!important;width:100%!important;margin:20px 0 0!important}
    .hero .btn{min-height:50px!important;padding:0 24px!important;border-radius:11px!important;font-size:14px!important;font-weight:800!important}
    .hero .microcopy{max-width:650px!important;margin:12px auto 0!important;color:#697363!important;font-size:11px!important;line-height:1.4!important;text-align:center!important}
    .hero-card,.hero-proof{display:none!important}

    @media(max-width:900px){
      .hero::after{opacity:.18!important;right:0!important;width:78%!important;background-size:100% auto!important}
      .hero-copy{width:100%!important;max-width:760px!important;margin:0 auto!important}
      .hero h1{font-size:clamp(44px,7vw,64px)!important}
    }
    @media(max-width:700px){
      .hero{padding:46px 0 34px!important}
      .hero::after{display:none!important}
      .hero-grid{width:min(calc(100% - 28px),620px)!important}
      .hero-copy{width:100%!important;max-width:620px!important;margin:0 auto!important}
      .hero .eyebrow{margin-bottom:14px!important;font-size:9px!important;letter-spacing:.08em!important;padding:7px 10px!important}
      .hero h1{font-size:clamp(40px,12.5vw,56px)!important;line-height:1.02!important}
      .hero-text{margin-top:16px!important;font-size:15px!important;line-height:1.48!important}
      .hero-price-line{min-width:260px!important;margin-top:18px!important;padding:13px 22px 12px!important}
      .hero-price-line strong{font-size:34px!important}
      .hero .cta-row{flex-direction:column!important;gap:9px!important;margin-top:18px!important}
      .hero .btn{width:100%!important;max-width:400px!important}
      .hero .microcopy{margin-top:10px!important;font-size:10px!important}
    }
  `;
  document.head.appendChild(style);
});
