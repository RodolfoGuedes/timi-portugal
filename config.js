// Links principais da landing page.
const TIMI_CONFIG = {
  affiliateUrl: 'https://timihqs.com/#/pages/login/registerView?code=d3of54',
  telegramUrl: 'https://t.me/rodolfoguedes'
};

document.addEventListener('DOMContentLoaded', () => {
  const applyNewsPhotos = () => {
    const photoNews = [
      ['Sorteio de prémios associado ao lançamento TIMI em Lisboa','https://commons.wikimedia.org/wiki/Special:FilePath/Gift_box.jpg?width=1200','Caixa de presente representando uma campanha de prémios'],
      ['TIMI em destaque na Festa das Vindimas 2026, em Palmela','https://commons.wikimedia.org/wiki/Special:FilePath/Grapevine_(Vitis_vinifera)_on_vineyard,_Ponte_de_Sor,_Portugal_(approx._GPS_location)_julesvernex2-3.jpg?width=1200','Vinhas em Portugal, imagem representativa da Festa das Vindimas']
    ];
    document.querySelectorAll('.news-card.news-new').forEach(card => {
      const title = card.querySelector('h3')?.textContent?.trim() || '';
      const item = photoNews.find(x => title.includes(x[0]));
      if (!item || card.querySelector('.news-photo')) return;
      const visual = card.querySelector('.news-visual');
      if (!visual) return;
      const photo = document.createElement('div');
      photo.className='news-photo';
      photo.style.cssText='height:190px;position:relative;overflow:hidden;background:linear-gradient(135deg,#164708,#65b900);';
      const img=document.createElement('img');
      img.src=item[1]; img.alt=item[2]; img.loading='eager'; img.decoding='async';
      img.style.cssText='width:100%;height:100%;display:block;object-fit:cover;';
      img.onerror=()=>{ img.style.display='none'; photo.style.backgroundImage = visual.classList.contains('prize') ? 'linear-gradient(135deg,#102d0b,#42ad00 55%,#dfff72)' : 'linear-gradient(135deg,#173b0b,#66ae00 52%,#ddff8b)'; };
      const badge=document.createElement('span'); badge.textContent=visual.querySelector('.visual-label')?.textContent||'NOTÍCIA'; badge.style.cssText='position:absolute;left:14px;top:14px;z-index:2;background:#b8f500;color:#17200f;border-radius:999px;padding:7px 10px;font-size:10px;font-weight:900;';
      photo.append(img,badge); visual.replaceWith(photo); card.classList.add('has-photo');
    });
  };
  applyNewsPhotos();
  setTimeout(applyNewsPhotos,300);
  setTimeout(applyNewsPhotos,1000);
  setTimeout(applyNewsPhotos,2500);
  const grid=document.querySelector('.news-grid');
  if(grid) new MutationObserver(applyNewsPhotos).observe(grid,{childList:true});

  // Correção exclusiva do cabeçalho: TIMI em verde e Portugal em preto.
  setTimeout(() => {
    const brand = document.querySelector('.site-header .brand');
    if (!brand) return;
    brand.innerHTML = 'TIMI<span>Portugal</span>';
    brand.style.color = 'var(--accent)';
    brand.style.display = 'flex';
    brand.style.alignItems = 'center';
    brand.style.gap = '10px';
    brand.style.whiteSpace = 'nowrap';
    brand.style.fontSize = 'clamp(18px, 3vw, 24px)';
    const country = brand.querySelector('span');
    if (country) {
      country.style.color = '#101318';
      country.style.marginLeft = '0';
      country.style.fontWeight = '500';
      country.style.fontSize = '0.78em';
    }
  }, 0);

  // Ajuste exclusivo do Hero: evitar corte lateral e melhorar a hierarquia visual.
  const applyHeroLayout = () => {
    const hero = document.querySelector('.hero');
    const heroGrid = document.querySelector('.hero-grid');
    const heroCopy = document.querySelector('.hero-copy');
    const title = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero-text');
    const cta = document.querySelector('.hero .cta-row');
    if (!hero || !heroGrid || !heroCopy || !title) return;

    hero.style.paddingLeft = 'max(16px, calc((100vw - 1120px) / 2 + 20px))';
    hero.style.paddingRight = 'max(16px, calc((100vw - 1120px) / 2 + 20px))';
    heroGrid.style.maxWidth = '1120px';
    heroGrid.style.width = '100%';
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
      hero.style.paddingLeft = '20px';
      hero.style.paddingRight = '20px';
      hero.style.paddingTop = '112px';
      hero.style.paddingBottom = '56px';
      heroGrid.style.width = '100%';
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

  // Revisão exclusiva para telas pequenas: menu, hero, botões, planos e espaçamento.
  const applyMobileLayout = () => {
    if (window.innerWidth > 850) return;
    const style = document.createElement('style');
    style.id = 'timi-mobile-overrides';
    style.textContent = `
      @media (max-width:850px){
        .site-header .nav{height:64px;min-height:64px;padding:0 2px;gap:12px}
        .site-header .brand{font-size:clamp(20px,6vw,24px)!important;flex:0 1 auto;min-width:0}
        .site-header .nav-telegram{min-height:40px;padding:0 13px;font-size:10px;white-space:nowrap;display:inline-flex;align-items:center}
        .hero{padding-top:112px!important;padding-bottom:52px!important}
        .hero-grid{gap:28px!important}
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

  // Destaque exclusivo dos valores dos planos no mobile.
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
});
