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
});
