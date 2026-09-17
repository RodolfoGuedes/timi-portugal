document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.id = 'timi-hero-cleanup';
  style.textContent = `
    /* Hero simplificado: remove a imagem/cartão e centraliza o conteúdo. */
    .hero-card{display:none!important}
    .hero-grid{grid-template-columns:minmax(0,760px)!important;max-width:1120px!important;margin-left:auto!important;margin-right:auto!important;justify-content:center!important;gap:0!important}
    .hero-copy{max-width:760px!important;margin:0 auto!important;width:100%!important}
    .hero h1{max-width:760px!important}
    .hero-text{max-width:680px!important}
    .hero .cta-row{justify-content:flex-start!important}
    .hero-proof{max-width:1120px!important;margin-left:auto!important;margin-right:auto!important}
    @media(max-width:850px){
      .hero{padding-top:94px!important;padding-bottom:42px!important;min-height:0!important}
      .hero-grid{grid-template-columns:1fr!important;width:min(calc(100% - 40px),1120px)!important}
      .hero-copy{max-width:100%!important}
      .hero h1{font-size:clamp(40px,11.8vw,52px)!important}
      .hero .cta-row{justify-content:stretch!important}
      .hero-proof{width:min(calc(100% - 40px),1120px)!important}
    }
  `;
  document.head.appendChild(style);
});
