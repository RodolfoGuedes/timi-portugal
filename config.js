// Links principais da landing page.
const TIMI_CONFIG = {
  affiliateUrl: 'https://timihqs.com/#/pages/login/registerView?code=d3of54',
  telegramUrl: 'https://t.me/rodolfoguedes'
};

// Mantém os textos das notícias limpos e garante imagens reais nos cartões dinâmicos.
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.news-source').forEach(el => {
      el.textContent = el.textContent.replace('A programação pública do evento confirma a existência do Palco TIMI e as datas da Festa das Vindimas 2026. cite não é usado no site; fonte externa disponível na página de notícias.', 'A programação pública do evento apresenta o Palco TIMI e as datas da Festa das Vindimas 2026. Confirme sempre os detalhes diretamente nas fontes oficiais do evento.');
    });

    // Corrige os dois cartões dinâmicos que estavam a aparecer sem fotografia.
    // São imagens públicas e estáveis do Wikimedia Commons, usadas como representação visual.
    const photoNews = [
      {
        match: 'Sorteio de prémios associado ao lançamento TIMI em Lisboa',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gift_box.jpg?width=1200',
        alt: 'Caixa de presente representando uma campanha de prémios',
        credit: 'Imagem ilustrativa · Wikimedia Commons'
      },
      {
        match: 'TIMI em destaque na Festa das Vindimas 2026, em Palmela',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/CastelodePalmela.jpg?width=1200',
        alt: 'Castelo de Palmela, Portugal',
        credit: 'Fotografia de Palmela · Wikimedia Commons'
      }
    ];

    document.querySelectorAll('.news-card.news-new').forEach(card => {
      const title = card.querySelector('h3')?.textContent?.trim() || '';
      const item = photoNews.find(photo => title.includes(photo.match));
      if (!item || card.querySelector('.news-photo')) return;

      const visual = card.querySelector('.news-visual');
      if (!visual) return;

      const photo = document.createElement('div');
      photo.className = 'news-photo';
      photo.innerHTML = `<img src="${item.image}" alt="${item.alt}" loading="eager" decoding="async"><span class="news-photo-badge">${visual.querySelector('.visual-label')?.textContent || 'NOTÍCIA'}</span><span class="news-photo-credit">${item.credit}</span>`;
      visual.replaceWith(photo);
      card.classList.add('has-photo');
    });
  }, 300);
});
