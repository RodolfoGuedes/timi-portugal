document.addEventListener('DOMContentLoaded', () => {
  const renderVideoSection = () => {
    const section = document.querySelector('.news-section');
    if (!section || section.dataset.videoReady === 'true') return;

    section.id = 'videos';
    section.classList.add('video-section');
    section.innerHTML = `
      <div class="container">
        <div class="section-heading"><span>09</span><h2>Vídeos TIMI</h2></div>
        <p class="lead section-lead">Conheça momentos, eventos e iniciativas divulgadas pela comunidade TIMI.</p>

        <div class="timi-videos-list">
          <article class="timi-video-feature">
            <div class="timi-video-player"><iframe src="https://www.youtube-nocookie.com/embed/KXUMbNIgTqU?rel=0" title="Vídeo criativo TIMI" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div class="timi-video-copy"><span class="video-kicker">COMUNIDADE • CRIATIVIDADE • TIMI</span><h3>Criatividade que põe a TIMI em movimento</h3><p class="video-intro">Durante o lançamento dos produtos TIMI, participantes combinaram bicicletas partilhadas, mobilidade verde e situações do dia a dia para criar e publicar os seus próprios vídeos.</p><div class="video-more-text"><p>Os conteúdos atraíram visualizações e gostos nas redes sociais e ajudaram a apresentar a TIMI a mais pessoas de forma leve e divertida.</p><p>A divulgação não precisa de ser muito profissional. Uma ideia simples, gravada com família ou amigos e ligada à bicicleta, ao trabalho, às compras, às viagens ou até ao humor pode tornar-se conteúdo interessante.</p><p>Segundo as informações divulgadas sobre a atividade, 10 parceiros apresentados nos vídeos receberam prémios TIMI pela criatividade e participação, num valor total anunciado de 1.700 euros.</p><p>A proposta da atividade foi incentivar as pessoas a participar, criar e partilhar as suas próprias ideias em vídeo.</p></div><button class="video-more-button" type="button" aria-expanded="false">Ver mais</button></div>
          </article>

          <article class="timi-video-feature">
            <div class="timi-video-player"><iframe src="https://www.youtube-nocookie.com/embed/ISsFWPg50gg?rel=0" title="Evento de lançamento TIMI em Lisboa" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div class="timi-video-copy"><span class="video-kicker">LISBOA • 12 DE SETEMBRO • LANÇAMENTO</span><h3>Um dia memorável para a TIMI em Portugal</h3><p class="video-intro">O dia 12 de setembro marcou o primeiro evento de lançamento das bicicletas elétricas partilhadas TIMI, reunindo parceiros, familiares e amigos na Aula Magna da Universidade de Lisboa.</p><div class="video-more-text"><p>O evento foi apresentado como um novo passo no desenvolvimento da TIMI em Portugal, depois do crescimento do mercado, da criação de centros de experiência física e da apresentação de produtos.</p><p>A programação divulgada decorreu das 15h00 às 20h00 e convidou os participantes a conhecer presencialmente o trabalho desenvolvido.</p><p>O cantor português Quim Barreiros foi anunciado como presença no palco, com momentos de interação, fotografias, música e celebração.</p><p>A comunicação do evento convidava os parceiros a levarem familiares e amigos para conhecerem a iniciativa e testemunharem este momento da TIMI em Portugal.</p></div><button class="video-more-button" type="button" aria-expanded="false">Ver mais</button></div>
          </article>

          <article class="timi-video-feature">
            <div class="timi-video-player"><iframe src="https://www.youtube-nocookie.com/embed/UBKWfs0cdA8?rel=0" title="TIMI Portugal - lançamento de 12 de setembro de 2026" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div class="timi-video-copy"><span class="video-kicker">EVENTO • LISBOA • NOVO COMEÇO</span><h3>12 de setembro: um novo capítulo da TIMI</h3><p class="video-intro">Parceiros de diferentes cidades reuniram-se em Lisboa para acompanhar ao vivo o lançamento dos produtos TIMI e celebrar mais um passo da iniciativa no mercado português.</p><div class="video-more-text"><p>O evento de 12 de setembro de 2026 reuniu parceiros TIMI e apresentou presencialmente os produtos e a evolução da iniciativa em Portugal.</p><p>Quim Barreiros esteve presente, interagiu com participantes, tirou fotografias, cantou e experimentou uma bicicleta partilhada TIMI durante o evento.</p><p>Parceiros de diferentes cidades encontraram-se, registaram o momento e agentes distinguidos pela organização subiram ao palco para receber reconhecimento.</p><p>A comunicação agradeceu aos participantes e às pessoas envolvidas na organização e apresentou o encontro de Lisboa como um novo começo, indicando o Porto como próxima paragem e a intenção de levar a TIMI a mais cidades portuguesas.</p></div><button class="video-more-button" type="button" aria-expanded="false">Ver mais</button></div>
          </article>
        </div>
      </div>`;

    section.querySelectorAll('.timi-video-feature').forEach((card) => {
      const button = card.querySelector('.video-more-button');
      button?.addEventListener('click', () => {
        const expanded = card.classList.toggle('video-description-expanded');
        button.textContent = expanded ? 'Ver menos' : 'Ver mais';
        button.setAttribute('aria-expanded', String(expanded));
      });
    });
    section.dataset.videoReady = 'true';
  };

  const style = document.createElement('style');
  style.id = 'timi-video-enhancements';
  style.textContent = `
    .video-section{background:#f8faf5}
    .timi-videos-list{display:flex;flex-direction:column;gap:28px;margin-top:30px}
    .timi-video-feature{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(300px,.85fr);gap:28px;align-items:center;padding:22px;background:#fff;border:1px solid #e1e8d8;border-radius:24px;box-shadow:0 18px 50px rgba(29,48,20,.08)}
    .timi-video-player{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:18px;background:#111}.timi-video-player iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
    .timi-video-copy{padding:8px 10px 8px 4px}.video-kicker{display:inline-block;margin-bottom:10px;color:#4e7d00;font-size:10px;font-weight:950;letter-spacing:.1em}.timi-video-copy h3{margin:0 0 12px;color:#17200f;font-size:clamp(24px,2.5vw,34px);line-height:1.08;letter-spacing:-.03em}.timi-video-copy p{margin:0 0 12px;color:#5d6758;font-size:14px;line-height:1.6}.video-intro{font-size:15px!important;color:#3f493b!important}.video-more-text{display:none}.video-description-expanded .video-more-text{display:block}.video-more-button{border:0;background:transparent;color:#397700;font:inherit;font-size:13px;font-weight:900;padding:5px 0;cursor:pointer;text-decoration:underline;text-underline-offset:3px}.video-more-button:hover{color:#17200f}
    @media(max-width:850px){.timi-video-feature{grid-template-columns:1fr;gap:18px;padding:14px;border-radius:20px}.timi-video-copy{padding:4px 6px 8px}.timi-video-copy h3{font-size:25px}.video-intro{font-size:14px!important}}
  `;
  document.head.appendChild(style);

  const observer = new MutationObserver(renderVideoSection);
  observer.observe(document.body, { childList: true, subtree: true });
  renderVideoSection();
  setTimeout(renderVideoSection, 100);
  setTimeout(renderVideoSection, 500);
});
