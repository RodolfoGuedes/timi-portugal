document.addEventListener('DOMContentLoaded', () => {
  const enhanceNews = () => {
    document.querySelectorAll('.news-card').forEach((card) => {
      if (card.dataset.newsEnhanced === 'true') return;

      const visual = card.querySelector('.news-visual');
      const title = card.querySelector('h3');
      const body = card.querySelector('.news-body');
      if (!title || !body) return;

      const originalTitle = title.textContent.trim();
      const images = originalTitle.toLowerCase().includes('vindimas')
        ? 'https://commons.wikimedia.org/wiki/Special:FilePath/Grapevine_(Vitis_vinifera)_on_vineyard,_Ponte_de_Sor,_Portugal_(approx._GPS_location)_julesvernex2-3.jpg?width=1200'
        : originalTitle.toLowerCase().includes('sorteio') || originalTitle.toLowerCase().includes('prémio')
          ? 'https://commons.wikimedia.org/wiki/Special:FilePath/Gift_box.jpg?width=1200'
          : 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85';

      if (visual) {
        const photo = document.createElement('div');
        photo.className = 'news-enhanced-photo';
        const img = document.createElement('img');
        img.src = images;
        img.alt = originalTitle;
        img.loading = 'lazy';
        img.decoding = 'async';
        photo.appendChild(img);
        const label = visual.querySelector('.visual-label');
        if (label) {
          const badge = document.createElement('span');
          badge.className = 'news-enhanced-badge';
          badge.textContent = label.textContent;
          photo.appendChild(badge);
        }
        visual.replaceWith(photo);
      }

      title.textContent = originalTitle
        .replace(/,?\s*em Palmela.*$/i, '')
        .replace(/,?\s*em Lisboa.*$/i, '')
        .replace(/associado ao lançamento TIMI/i, '')
        .trim();

      const paragraphs = [...body.querySelectorAll('p')];
      paragraphs.forEach((p) => {
        p.classList.add('news-summary');
        p.dataset.fullText = p.textContent.trim();
      });

      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'news-more';
      more.textContent = 'Ver mais';
      more.setAttribute('aria-expanded', 'false');
      more.addEventListener('click', () => {
        const expanded = card.classList.toggle('news-expanded');
        more.textContent = expanded ? 'Ver menos' : 'Ver mais';
        more.setAttribute('aria-expanded', String(expanded));
      });
      body.appendChild(more);
      card.dataset.newsEnhanced = 'true';
    });
  };

  const style = document.createElement('style');
  style.id = 'timi-news-enhancements';
  style.textContent = `
    .news-grid{align-items:stretch}
    .news-card{overflow:hidden;display:flex;flex-direction:column;min-width:0}
    .news-enhanced-photo{height:210px;position:relative;overflow:hidden;background:#edf4e5}
    .news-enhanced-photo img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .35s ease}
    .news-card:hover .news-enhanced-photo img{transform:scale(1.035)}
    .news-enhanced-badge{position:absolute;left:16px;top:16px;background:#c7ff00;color:#17200f;border-radius:999px;padding:7px 11px;font-size:10px;font-weight:900;letter-spacing:.06em}
    .news-body{display:flex;flex-direction:column;flex:1}
    .news-body h3{margin-bottom:10px;line-height:1.18}
    .news-summary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:14px;line-height:1.55}
    .news-expanded .news-summary{display:block;overflow:visible}
    .news-more{align-self:flex-start;border:0;background:transparent;color:#397700;font:inherit;font-weight:900;padding:4px 0;cursor:pointer;text-decoration:underline;text-underline-offset:3px;margin-top:auto}
    .news-more:hover{color:#17200f}
    @media(max-width:850px){
      .news-enhanced-photo{height:190px}
      .news-body h3{font-size:19px!important}
      .news-summary{-webkit-line-clamp:2;font-size:13px;line-height:1.5}
      .news-more{font-size:13px}
    }
  `;
  document.head.appendChild(style);

  const observer = new MutationObserver(enhanceNews);
  observer.observe(document.body, { childList: true, subtree: true });
  enhanceNews();
  setTimeout(enhanceNews, 100);
  setTimeout(enhanceNews, 500);
});
