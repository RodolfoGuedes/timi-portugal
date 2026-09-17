document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroGrid = document.querySelector('.hero-grid');
  if (!hero || !heroGrid) return;

  // Hero rebuilt as a compact, text-first section. No image is used here.
  const oldVisual = document.querySelector('.timi-hero-visual');
  if (oldVisual) oldVisual.remove();

  const style = document.createElement('style');
  style.id = 'timi-hero-polished';
  style.textContent = `
    .hero{
      position:relative!important;
      overflow:hidden!important;
      min-height:0!important;
      padding:clamp(72px,8vw,112px) 0 clamp(46px,6vw,72px)!important;
      background:
        radial-gradient(circle at 12% 18%, rgba(199,255,0,.16), transparent 28%),
        radial-gradient(circle at 88% 82%, rgba(199,255,0,.09), transparent 30%),
        linear-gradient(180deg,#f7f9f4 0%,#eef3e8 100%)!important;
    }
    .hero-orb{opacity:.35!important}
    .hero-grid{
      width:min(100% - 48px,980px)!important;
      max-width:980px!important;
      margin:0 auto!important;
      display:block!important;
    }
    .hero-copy{
      width:100%!important;
      max-width:850px!important;
      margin:0 auto!important;
      text-align:center!important;
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
    }
    .hero .eyebrow{
      display:inline-flex!important;
      align-items:center!important;
      justify-content:center!important;
      margin:0 0 22px!important;
      padding:8px 14px!important;
      border:1px solid rgba(38,48,31,.12)!important;
      border-radius:999px!important;
      background:rgba(255,255,255,.72)!important;
      color:#4d5948!important;
      font-size:12px!important;
      font-weight:800!important;
      letter-spacing:.12em!important;
      line-height:1!important;
    }
    .hero h1{
      max-width:850px!important;
      margin:0!important;
      color:#182017!important;
      font-size:clamp(48px,6.2vw,78px)!important;
      line-height:.98!important;
      letter-spacing:-.045em!important;
      font-weight:900!important;
    }
    .hero h1 span{color:#607d00!important}
    .hero-text{
      max-width:700px!important;
      margin:26px auto 0!important;
      color:#4a5446!important;
      font-size:clamp(17px,1.6vw,20px)!important;
      line-height:1.6!important;
    }
    .hero-price-line{
      display:grid!important;
      grid-template-columns:auto auto!important;
      grid-template-areas:"label price" "note note"!important;
      align-items:baseline!important;
      column-gap:10px!important;
      row-gap:3px!important;
      margin:30px auto 0!important;
      padding:15px 22px 14px!important;
      border:1px solid rgba(53,70,42,.16)!important;
      border-radius:18px!important;
      background:#ffffff!important;
      box-shadow:0 10px 28px rgba(31,43,27,.08)!important;
    }
    .hero-price-line span{
      grid-area:label!important;
      color:#4c5849!important;
      font-size:15px!important;
      font-weight:700!important;
    }
    .hero-price-line strong{
      grid-area:price!important;
      color:#182017!important;
      font-size:clamp(30px,4vw,43px)!important;
      font-weight:900!important;
      line-height:1!important;
      letter-spacing:-.035em!important;
    }
    .hero-price-line strong::first-letter{color:#182017!important}
    .hero-price-line small{
      grid-area:note!important;
      color:#687263!important;
      font-size:11px!important;
      line-height:1.3!important;
      font-weight:600!important;
      text-align:center!important;
    }
    .hero .cta-row{
      display:flex!important;
      justify-content:center!important;
      align-items:center!important;
      gap:12px!important;
      margin:28px 0 0!important;
      width:100%!important;
    }
    .hero .btn{
      min-height:52px!important;
      padding:0 23px!important;
      border-radius:12px!important;
      font-size:15px!important;
      font-weight:800!important;
    }
    .hero .microcopy{
      max-width:610px!important;
      margin:17px auto 0!important;
      color:#697364!important;
      font-size:12px!important;
      line-height:1.5!important;
      text-align:center!important;
    }
    .hero-card{display:none!important}
    .hero-proof{
      width:min(100% - 48px,900px)!important;
      max-width:900px!important;
      margin:38px auto 0!important;
      padding-top:18px!important;
      border-top:1px solid rgba(53,70,42,.12)!important;
      display:flex!important;
      justify-content:center!important;
      align-items:center!important;
      flex-wrap:wrap!important;
      gap:10px 28px!important;
      color:#596454!important;
      font-size:12px!important;
      font-weight:700!important;
    }
    .hero-proof span{white-space:nowrap!important}
    @media(max-width:700px){
      .hero{padding:58px 0 42px!important}
      .hero-grid{width:min(calc(100% - 32px),620px)!important}
      .hero .eyebrow{margin-bottom:18px!important;font-size:10px!important;letter-spacing:.09em!important;padding:8px 11px!important}
      .hero h1{font-size:clamp(42px,13vw,58px)!important;line-height:1.01!important}
      .hero-text{margin-top:20px!important;font-size:16px!important;line-height:1.5!important}
      .hero-price-line{margin-top:24px!important;padding:14px 18px 13px!important}
      .hero-price-line strong{font-size:32px!important}
      .hero .cta-row{flex-direction:column!important;gap:10px!important;margin-top:22px!important}
      .hero .btn{width:100%!important;max-width:420px!important}
      .hero-proof{width:min(calc(100% - 32px),620px)!important;margin-top:30px!important;gap:9px 16px!important;line-height:1.35!important}
    }
  `;
  document.head.appendChild(style);
});
