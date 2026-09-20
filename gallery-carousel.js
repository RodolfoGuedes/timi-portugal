document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main || document.getElementById('galeria-timi')) return;
  const gallery = document.createElement('section');
  gallery.id = 'galeria-timi';
  gallery.className = 'section timi-gallery';
  gallery.setAttribute('aria-label', 'TIMI em imagens');
  const images = [
    ['file_00000000871481f4b2a3e6d1f5cd6c7f.png', 'Montagem de fotografias de encontros e atividades da comunidade TIMI'],
    ['file_00000000a04c8243a1b56f26a8389b13.png', 'Cartaz sobre mobilidade sustentável com bicicleta, scooter e fotografia de evento'],
    ['file_0000000089648210b41680822cf8dc1c.png', 'Montagem com scooter verde e fotografias de encontros da comunidade TIMI']
  ];
  gallery.innerHTML = `<div class="container"><div class="section-heading"><span>EM IMAGENS</span><h2>Conheça a TIMI em imagens</h2></div><p class="timi-gallery-description">Equipamentos, encontros e materiais de divulgação do projeto.</p><div class="timi-gallery-carousel" aria-roledescription="carrossel"><div class="timi-gallery-track">${images.map(([src, alt], index) => `<div class="timi-gallery-slide" aria-hidden="${index !== 0}"><img src="${src}" alt="${alt}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"></div>`).join('')}</div><button class="timi-gallery-arrow timi-gallery-prev" type="button" aria-label="Imagem anterior">‹</button><button class="timi-gallery-arrow timi-gallery-next" type="button" aria-label="Próxima imagem">›</button></div><div class="timi-gallery-dots" aria-label="Escolher imagem">${images.map((_, i) => `<button type="button" aria-label="Mostrar imagem ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`).join('')}</div></div>`;
  const project = document.getElementById('projeto');
  if (project) project.insertAdjacentElement('afterend', gallery);
  else main.appendChild(gallery);
  const css = document.createElement('style');
  css.textContent = `
    .timi-gallery{background:#f4f9eb;padding:65px 0}.timi-gallery-description{color:#53624b;margin:-12px 0 24px;line-height:1.6}
    .timi-gallery-carousel{position:relative;overflow:hidden;border-radius:22px;background:#16350f;box-shadow:0 12px 32px rgba(24,55,10,.13);touch-action:pan-y}
    .timi-gallery-track{display:flex;transition:transform .55s ease;will-change:transform}
    .timi-gallery-slide{flex:0 0 100%;min-width:0;aspect-ratio:16/7.5}
    .timi-gallery-slide img{display:block;width:100%;height:100%;object-fit:contain}
    .timi-gallery-arrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border:0;border-radius:50%;background:rgba(255,255,255,.9);color:#17340d;font-size:30px;line-height:1;cursor:pointer;z-index:1}
    .timi-gallery-prev{left:12px}.timi-gallery-next{right:12px}
    .timi-gallery-dots{display:flex;justify-content:center;gap:9px;margin-top:17px}.timi-gallery-dots button{width:10px;height:10px;border:0;border-radius:50%;padding:0;background:#afc99a;cursor:pointer}.timi-gallery-dots button[aria-current="true"]{background:#3a890e;width:24px;border-radius:8px}
    @media(max-width:700px){.timi-gallery{padding:48px 0}.timi-gallery-slide{aspect-ratio:16/9}.timi-gallery-arrow{width:32px;height:32px;font-size:25px}.timi-gallery-prev{left:6px}.timi-gallery-next{right:6px}}
    @media(prefers-reduced-motion:reduce){.timi-gallery-track{transition:none}}
  `;
  document.head.appendChild(css);
  const track = gallery.querySelector('.timi-gallery-track');
  const slides = [...gallery.querySelectorAll('.timi-gallery-slide')];
  const dots = [...gallery.querySelectorAll('.timi-gallery-dots button')];
  const carousel = gallery.querySelector('.timi-gallery-carousel');
  let current = 0;
  let timer;
  let touchStart = null;
  const show = (next) => {
    current = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== current)));
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === current)));
  };
  const stop = () => { if (timer) clearInterval(timer); timer = null; };
  const start = () => {
    stop();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !document.hidden) {
      timer = setInterval(() => show(current + 1), 4000);
    }
  };
  const move = (delta) => { show(current + delta); start(); };
  gallery.querySelector('.timi-gallery-prev').addEventListener('click', () => move(-1));
  gallery.querySelector('.timi-gallery-next').addEventListener('click', () => move(1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));
  carousel.addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0].clientX; }, {passive:true});
  carousel.addEventListener('touchend', (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    touchStart = null;
    if (Math.abs(delta) > 40) move(delta < 0 ? 1 : -1);
  }, {passive:true});
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  start();
});