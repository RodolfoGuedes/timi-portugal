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
});
