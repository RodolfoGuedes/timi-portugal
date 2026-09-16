// Links principais da landing page.
const TIMI_CONFIG = {
  affiliateUrl: 'https://timihqs.com/#/pages/login/registerView?code=d3of54',
  telegramUrl: 'https://t.me/rodolfoguedes'
};

// Mantém os textos das notícias limpos caso sejam atualizados dinamicamente.
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.news-source').forEach(el => {
      el.textContent = el.textContent.replace('A programação pública do evento confirma a existência do Palco TIMI e as datas da Festa das Vindimas 2026. cite não é usado no site; fonte externa disponível na página de notícias.', 'A programação pública do evento apresenta o Palco TIMI e as datas da Festa das Vindimas 2026. Confirme sempre os detalhes diretamente nas fontes oficiais do evento.');
    });
  }, 100);

  // Hero principal: usa o vídeo real enviado pelo proprietário do site.
  // O arquivo hero-bike.mp4 deve ficar na raiz do projeto.
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    const video = document.createElement('video');
    video.className = 'hero-bike-video';
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'auto');
    video.setAttribute('aria-label', 'Vídeo de bicicletas elétricas TIMI');
    video.innerHTML = '<source src="hero-bike.mp4" type="video/mp4">';

    const oldBike = heroCard.querySelector('.bike-art');
    const oldGlow = heroCard.querySelector('.glow');
    oldBike?.remove();
    oldGlow?.remove();

    heroCard.prepend(video);
    heroCard.classList.add('hero-card-video');

    const style = document.createElement('style');
    style.textContent = `
      .hero-card-video{padding:0!important;background:#111!important;isolation:isolate}
      .hero-card-video .hero-bike-video{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;object-position:center;z-index:0}
      .hero-card-video:before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.04) 25%,rgba(0,0,0,.42) 100%);z-index:1;pointer-events:none}
      .hero-card-video .card-label{position:absolute;left:20px;right:20px;bottom:18px;z-index:2;background:rgba(255,255,255,.94);border-radius:16px;padding:13px 16px;box-shadow:0 8px 22px rgba(20,40,10,.13)}
      .hero-card-video .card-label strong{display:block;color:#17200f;font-size:16px}
      .hero-card-video .card-label span{display:block;color:#68715f;margin-top:3px;font-size:12px}
      @media(max-width:800px){.hero-card-video{min-height:270px!important}.hero-card-video .hero-bike-video{object-position:center}.hero-card-video .card-label{left:12px;right:12px;bottom:12px;padding:11px 13px}.hero-card-video .card-label strong{font-size:14px}.hero-card-video .card-label span{font-size:11px}}
    `;
    document.head.appendChild(style);
    video.play().catch(() => {});
  }
});
