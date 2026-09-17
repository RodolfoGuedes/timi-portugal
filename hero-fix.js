document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroGrid = document.querySelector('.hero-grid');
  if (!hero || !heroGrid) return;

  // Clean, compact Hero: text-first, no image, no artificial height.
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
      padding:64px 0 42px!important;
      background:
        radial-gradient(circle at 15% 10%,rgba(199,255,0,.18),transparent 25%),
        radial-gradient(circle at 85% 90%,rgba(199,255,0,.10),transparent 28%),
        linear-gradient(180deg,#f8faf6 0%,#edf3e8 100%)!important;
    }

    .hero-grid{
      display:block!important;
      width:min(calc(100% - 40px),1040px)!important;
      max-width:1040px!important;
      margin:0 auto!important;
    }

    .hero-copy{
      width:100%!important;
      max-width:900px!important;
      margin:0 auto!important;
      text-align:center!important;
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
    }

    .hero .eyebrow{
      margin:0 0 18px!important;
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
      font-size:clamp(46px,5.7vw,72px)!important;
      line-height:1.02!important;
      letter-spacing:-.045em!important;
      font-weight:900!important;
    }

    .hero h1 span{color:#668500!important}

    .hero-text{
      max-width:720px!important;
      margin:20px auto 0!important;
      color:#4d5849!important;
      font-size:18px!important;
      line-height:1.52!important;
    }

    .hero-price-line{
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      justify-content:center!important;
      gap:3px!important;
      width:fit-content!important;
      min-width:290px!important;
      margin:22px auto 0!important;
      padding:14px 30px 13px!important;
      border:1px solid rgba(42,57,33,.15)!important;
      border-radius:16px!important;
      background:#fff!important;
      box-shadow:0 8px 24px rgba(28,40,24,.07)!important;
    }

    .hero-price-line span{
      color:#505b4c!important;
      font-size:13px!important;
      line-height:1.2!important;
      font-weight:700!important;
    }

    .hero-price-line strong{
      display:block!important;
      color:#15200f!important;
      font-size:clamp(34px,4vw,46px)!important;
      line-height:1!important;
      letter-spacing:-.035em!important;
      font-weight:900!important;
    }

    .hero-price-line small{
      color:#6b7566!important;
      font-size:10px!important;
      line-height:1.25!important;
      font-weight:600!important;
    }

    .hero .cta-row{
      display:flex!important;
      justify-content:center!important;
      align-items:center!important;
      gap:12px!important;
      width:100%!important;
      margin:22px 0 0!important;
    }

    .hero .btn{
      min-height:50px!important;
      padding:0 24px!important;
      border-radius:11px!important;
      font-size:14px!important;
      font-weight:800!important;
    }

    .hero .microcopy{
      max-width:650px!important;
      margin:13px auto 0!important;
      color:#697363!important;
      font-size:11px!important;
      line-height:1.4!important;
      text-align:center!important;
    }

    .hero-card{display:none!important}

    .hero-proof{
      width:min(calc(100% - 40px),900px)!important;
      max-width:900px!important;
      margin:27px auto 0!important;
      padding:15px 0 0!important;
      border-top:1px solid rgba(48,62,39,.12)!important;
      display:flex!important;
      justify-content:center!important;
      align-items:center!important;
      flex-wrap:wrap!important;
      gap:7px 25px!important;
      color:#586353!important;
      font-size:11px!important;
      line-height:1.3!important;
      font-weight:700!important;
    }

    .hero-proof span{white-space:nowrap!important}

    @media(max-width:700px){
      .hero{padding:48px 0 34px!important}
      .hero-grid{width:min(calc(100% - 28px),620px)!important}
      .hero .eyebrow{margin-bottom:15px!important;font-size:9px!important;letter-spacing:.08em!important;padding:7px 10px!important}
      .hero h1{font-size:clamp(40px,12.5vw,56px)!important;line-height:1.02!important}
      .hero-text{margin-top:17px!important;font-size:15px!important;line-height:1.48!important}
      .hero-price-line{min-width:260px!important;margin-top:20px!important;padding:13px 22px 12px!important}
      .hero-price-line strong{font-size:34px!important}
      .hero .cta-row{flex-direction:column!important;gap:9px!important;margin-top:19px!important}
      .hero .btn{width:100%!important;max-width:400px!important}
      .hero .microcopy{margin-top:11px!important;font-size:10px!important}
      .hero-proof{width:min(calc(100% - 28px),620px)!important;margin-top:23px!important;padding-top:13px!important;gap:7px 14px!important}
    }
  `;
  document.head.appendChild(style);
});
