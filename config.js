// Links principais da landing page.
const TIMI_CONFIG = {
  affiliateUrl: 'https://timihqs.com/#/pages/login/registerView?code=d3of54',
  telegramUrl: 'https://t.me/rodolfoguedes'
};

document.addEventListener('DOMContentLoaded', () => {
  const applyHeroLayout = () => {
    const hero = document.querySelector('.hero');
    const heroGrid = document.querySelector('.hero-grid');
    const heroCopy = document.querySelector('.hero-copy');
    const title = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero-text');
    const cta = document.querySelector('.hero .cta-row');
    if (!hero || !heroGrid || !heroCopy || !title) return;

    // O hero já contém um .container. Não adicionamos padding horizontal
    // extra, para que o início do hero fique exatamente alinhado com
    // o header e com as demais seções da página.
    hero.style.paddingLeft = '0';
    hero.style.paddingRight = '0';
    heroGrid.style.maxWidth = '1120px';
    heroGrid.style.width = 'min(calc(100% - 40px), 1120px)';
    heroGrid.style.marginLeft = 'auto';
    heroGrid.style.marginRight = 'auto';
    heroCopy.style.minWidth = '0';
    title.style.maxWidth = '640px';
    title.style.overflowWrap = 'normal';
    title.style.wordBreak = 'normal';
    title.style.textWrap = 'balance';
    title.style.marginBottom = '22px';
    if (heroText) {
      heroText.style.maxWidth = '560px';
      heroText.style.marginTop = '0';
      heroText.style.marginBottom = '0';
      heroText.style.lineHeight = '1.55';
    }
    if (cta) {
      cta.style.marginTop = '28px';
      cta.style.marginBottom = '14px';
      cta.style.gap = '12px';
    }

    if (window.innerWidth <= 800) {
      hero.style.paddingLeft = '0';
      hero.style.paddingRight = '0';
      hero.style.paddingTop = '112px';
      hero.style.paddingBottom = '56px';
      heroGrid.style.width = 'calc(100% - 28px)';
      heroGrid.style.maxWidth = '1120px';
      title.style.fontSize = 'clamp(42px, 12vw, 54px)';
      title.style.lineHeight = '1.02';
      title.style.letterSpacing = '-.045em';
      title.style.maxWidth = '100%';
      if (heroText) heroText.style.fontSize = '17px';
      if (cta) cta.style.marginTop = '24px';
    }
  };
  applyHeroLayout();
  window.addEventListener('resize', applyHeroLayout);

  const applyMobileLayout = () => {
    if (window.innerWidth > 850) return;
    const style = document.createElement('style');
    style.id = 'timi-mobile-overrides';
    style.textContent = `
      @media (max-width:850px){
        .site-header .nav{height:64px;min-height:64px;padding:0 2px;gap:12px}
        .site-header .brand{font-size:clamp(20px,6vw,24px)!important;flex:0 1 auto;min-width:0}
        .site-header .nav-telegram{min-height:40px;padding:0 13px;font-size:10px;white-space:nowrap;display:inline-flex;align-items:center}
        .hero{padding-top:112px!important;padding-bottom:52px!important;padding-left:0!important;padding-right:0!important}
        .hero-grid{gap:28px!important;width:calc(100% - 28px)!important;max-width:1120px!important;margin-left:auto!important;margin-right:auto!important}
        .hero-copy{width:100%;max-width:100%;min-width:0}
        .eyebrow{font-size:9px;letter-spacing:.07em;padding:8px 11px;max-width:100%;white-space:normal}
        .hero h1{font-size:clamp(40px,11.8vw,52px)!important;line-height:1.01!important;letter-spacing:-.045em!important;margin:18px 0 18px!important;max-width:100%!important;overflow-wrap:normal!important;word-break:normal!important}
        .hero-text{font-size:16px!important;line-height:1.55!important;max-width:100%!important}
        .hero-price-line{gap:6px;margin-top:18px}
        .hero-price-line strong{font-size:25px}
        .cta-row{display:grid!important;grid-template-columns:1fr;gap:10px!important;margin:22px 0 12px!important}
        .hero .btn{width:100%;min-height:50px;font-size:14px}
        .microcopy{font-size:10px;line-height:1.5;max-width:100%}
        .hero-card{height:300px!important;border-width:5px!important;border-radius:24px!important}
        .hero-card-content{left:14px;right:14px;bottom:14px;padding:12px 13px;border-radius:14px}
        .hero-card-content strong{font-size:16px}
        .hero-proof{display:grid!important;grid-template-columns:1fr 1fr;gap:7px 10px!important;padding-top:17px!important;font-size:9px!important}
        .section{padding:58px 0!important}
        .section-heading{gap:10px!important;margin-bottom:20px!important}
        .section-heading h2{font-size:32px!important;line-height:1.02!important}
        .section-lead{font-size:15px!important;line-height:1.55!important;margin-bottom:24px!important}
        .project-grid,.testimonial-grid,.referral-grid,.community-grid,.safety-grid{gap:28px!important}
        .big-lead{font-size:21px!important}
        .project-points{gap:9px!important}
        .project-points div{padding:16px!important}
        .local-presence{gap:8px!important;margin-top:22px!important}
        .premium-steps{gap:10px!important}
        .premium-steps article{padding:20px!important}
        .activation-card{padding:16px!important}
        .premium-options{gap:12px!important}
        .option-card{padding:22px!important;border-radius:20px!important}
        .option-ribbon{font-size:27px}
        .option-price{margin:19px 0 13px!important}
        .option-price strong{font-size:43px!important;letter-spacing:-.055em!important;white-space:nowrap}
        .option-price span{font-size:12px!important}
        .daily{padding:12px 0!important}
        .daily b{font-size:18px!important;white-space:nowrap}
        .option-copy{min-height:0!important;padding:12px 0!important}
        .option-card .btn{min-height:50px!important;width:100%!important;font-size:13px!important}
        .financial-note{padding:14px!important;font-size:11px}
        .cycle-flow{gap:9px!important}
        .cycle-choice{gap:9px!important}
        .cycle-choice div{padding:18px!important}
        .rewards-grid{gap:10px!important}
        .reward-card{padding:20px!important}
        .community-card{min-height:230px!important;padding:24px!important}
        .community-card>strong{font-size:28px!important}
        .news-grid{gap:10px!important}
        .news-body{padding:17px!important}
        .news-body h3{font-size:19px!important}
        .safety-link{padding:17px!important}
        .final-cta{padding:70px 0!important}
        .final-cta h2{font-size:40px!important}
        .final-actions{display:grid!important;grid-template-columns:1fr;gap:10px!important}
        .final-actions .btn{width:100%}
        .faq-section details{padding:17px 0!important}
        .faq-section summary{font-size:15px!important;line-height:1.4}
        .footer{padding-bottom:95px!important}
      }
      @media (max-width:380px){
        .container{width:min(calc(100% - 22px),1120px)!important}
        .site-header .nav-telegram{padding:0 10px;font-size:9px}
        .hero h1{font-size:40px!important}
        .hero-card{height:270px!important}
        .hero-proof{grid-template-columns:1fr!important}
        .option-card{padding:18px!important}
        .option-price strong{font-size:39px!important}
      }
    `;
    const old = document.getElementById('timi-mobile-overrides');
    if (old) old.remove();
    document.head.appendChild(style);
  };
  applyMobileLayout();
  window.addEventListener('resize', applyMobileLayout);

  const plansStyle = document.createElement('style');
  plansStyle.textContent = `
    @media (max-width:850px){
      .options-section{scroll-margin-top:70px}
      .premium-options .option-card{background:linear-gradient(145deg,#f3ffd0,#ffffff)!important;box-shadow:0 12px 28px rgba(45,70,10,.10)!important}
      .premium-options .option-price strong{font-size:clamp(48px,16vw,62px)!important;line-height:.92!important;letter-spacing:-.065em!important;color:#17200f!important}
      .premium-options .option-price span{font-size:15px!important;font-weight:950!important;color:#4f5f3b!important}
      .premium-options .daily b{color:#2f7800!important;font-size:20px!important}
      .premium-options .option-card .btn{font-size:14px!important;font-weight:950!important}
      .premium-options .featured-option{border:2px solid #a9cf38!important;box-shadow:0 16px 34px rgba(55,90,5,.14)!important}
      .premium-options .popular{box-shadow:0 4px 12px rgba(55,90,5,.12)!important}
      .financial-note{background:#fbfff4!important}
    }
    @media (max-width:380px){
      .premium-options .option-price strong{font-size:48px!important}
      .premium-options .option-price span{font-size:13px!important}
      .premium-options .daily b{font-size:18px!important}
    }
  `;
  document.head.appendChild(plansStyle);

  // CTA: participação e Telegram claros, consistentes e acessíveis em toda a página.
  const applyCtaConsistency = () => {
    const style = document.createElement('style');
    style.id = 'timi-cta-overrides';
    style.textContent = `
      .btn{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;cursor:pointer;font-weight:800;transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease}
      .btn:hover{transform:translateY(-2px)}
      .btn-primary{font-weight:900}
      .btn-secondary{font-weight:800}
      .nav-telegram{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;white-space:nowrap;font-weight:900}
      .hero .btn-primary::after,.option-card .btn-primary::after,.final-actions .btn-primary::after{content:' →';font-weight:900}
      .hero .btn-secondary::before,.community-section .btn-primary::before{content:'💬 ';}
      .final-actions{align-items:stretch}
      .final-actions .btn{min-width:190px}
      .option-card .btn{margin-top:auto}
      @media(max-width:850px){
        .btn{min-height:50px!important}
        .nav-telegram{min-height:40px!important}
        .hero .btn,.option-card .btn,.community-section .btn,.final-actions .btn{width:100%}
      }
    `;
    const old = document.getElementById('timi-cta-overrides');
    if (old) old.remove();
    document.head.appendChild(style);
    document.querySelectorAll('a.btn').forEach(btn => {
      const href = btn.getAttribute('href') || '';
      if (href.includes('t.me/')) btn.setAttribute('aria-label','Falar no Telegram');
      if (href.includes('timihqs.com')) btn.setAttribute('aria-label','Participar na TIMI');
    });
  };
  applyCtaConsistency();
  setTimeout(applyCtaConsistency,300);
});
