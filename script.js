document.addEventListener('DOMContentLoaded', () => {
  const config = window.TIMI_CONFIG || {};
  const affiliateUrl = config.affiliateUrl && config.affiliateUrl !== '#' ? config.affiliateUrl : 'https://timihqs.com/#/pages/login/registerView?code=d3of54';
  const telegramUrl = config.telegramUrl && config.telegramUrl !== '#' ? config.telegramUrl : 'https://t.me/rodolfoguedes';

  document.title = 'TIMI Portugal | Conheça o projeto';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', 'Conheça a TIMI, entenda como funciona o programa, consulte as modalidades apresentadas e fale com um responsável antes de participar.');

  const header = document.querySelector('.site-header');
  if (header) {
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="#top" aria-label="TIMI">TIMI</a>
        <nav class="nav-links" aria-label="Navegação principal">
          <a class="nav-link" href="#projeto">O projeto</a>
          <a class="nav-link" href="#como-funciona">Como funciona</a>
          <a class="nav-link" href="#opcoes">Modalidades</a>
          <a class="nav-link" href="#faq">FAQ</a>
          <a class="nav-telegram" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">Telegram</a>
        </nav>
      </div>`;
  }

  const main = document.querySelector('main');
  if (!main) return;

  main.innerHTML = `
    <section class="hero" id="top">
      <div class="hero-orb orb-one"></div><div class="hero-orb orb-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">MOBILIDADE • TECNOLOGIA • PARTICIPAÇÃO</div>
          <h1>Conheça a <span>TIMI</span> e descubra como funciona.</h1>
          <p class="hero-text">Uma nova proposta ligada à mobilidade através de bicicletas e equipamentos partilhados, com um modelo de participação acompanhado por plataforma digital.</p>
          <div class="hero-price-line"><span>A partir de</span><strong>560 USDT</strong><small>modalidade atualmente apresentada</small></div>
          <div class="cta-row">
            <a class="btn btn-primary" href="#opcoes">Ver modalidades</a>
            <a class="btn btn-secondary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Falar no Telegram</a>
          </div>
          <p class="microcopy">Conheça as condições antes de decidir. Os valores apresentados não constituem garantia de resultados futuros.</p>
        </div>
        <div class="hero-card" aria-label="Bicicleta de mobilidade partilhada">
          <div class="hero-photo"></div>
          <div class="hero-photo-shade"></div>
          <div class="hero-card-content"><span>🚲 MOBILIDADE PARTILHADA</span><strong>Tecnologia aplicada à mobilidade urbana</strong></div>
        </div>
      </div>
      <div class="container hero-proof"><span>✓ Plataforma digital</span><span>✓ Comunidade</span><span>✓ Modalidades de participação</span><span>✓ Suporte por Telegram</span></div>
    </section>

    <section class="section project-section" id="projeto">
      <div class="container">
        <div class="section-heading"><span>01</span><h2>O projeto TIMI</h2></div>
        <div class="project-grid">
          <div>
            <p class="lead big-lead">A proposta apresentada pela TIMI combina mobilidade urbana, bicicletas convencionais e elétricas e um modelo de participação acompanhado digitalmente.</p>
            <p class="body-copy">As informações recebidas descrevem uma expansão para o mercado europeu, com Portugal entre os mercados iniciais, além de uma estratégia de crescimento baseada em comunidade, divulgação e parceiros locais.</p>
          </div>
          <div class="project-points">
            <div><b>🚲</b><strong>Mobilidade</strong><span>Bicicletas e equipamentos ligados à mobilidade partilhada.</span></div>
            <div><b>📱</b><strong>Plataforma</strong><span>Ativação e acompanhamento através de aplicação.</span></div>
            <div><b>👥</b><strong>Comunidade</strong><span>Grupos, reuniões, partilha de experiências e suporte.</span></div>
            <div><b>🌍</b><strong>Expansão</strong><span>Informações recebidas apontam para expansão europeia a partir de Portugal.</span></div>
          </div>
        </div>
        <div class="local-presence"><div><span>Presença divulgada</span><strong>Leiria</strong></div><div><span>Presença divulgada</span><strong>Portimão</strong></div><div><span>Outras localizações</span><strong>Em expansão</strong></div></div>
      </div>
    </section>

    <section class="section how-section" id="como-funciona">
      <div class="container">
        <div class="section-heading"><span>02</span><h2>Como funciona?</h2></div>
        <p class="lead section-lead">A ideia é simples: escolher uma modalidade, utilizar a plataforma e acompanhar a participação de acordo com as regras do programa.</p>
        <div class="steps premium-steps">
          <article><div class="step-number">01</div><div class="step-icon">💳</div><h3>Escolha</h3><p>Conheça as modalidades apresentadas e escolha a que pretende conhecer melhor.</p></article>
          <article><div class="step-number">02</div><div class="step-icon">📲</div><h3>Receba o código</h3><p>O processo diário utiliza um código disponibilizado para ativação na aplicação.</p></article>
          <article><div class="step-number">03</div><div class="step-icon">🚲</div><h3>Ative</h3><p>Insira o código na aplicação e realize uma ativação num dos períodos disponíveis.</p></article>
          <article><div class="step-number">04</div><div class="step-icon">📊</div><h3>Acompanhe</h3><p>Acompanhe a sua participação, atividade e condições através dos canais disponibilizados.</p></article>
        </div>
        <div class="activation-card"><div><span>ATIVAÇÃO DIÁRIA</span><strong>Escolha um dos períodos</strong></div><div class="time-pill"><b>10:00–13:00</b><small>manhã</small></div><div class="or">ou</div><div class="time-pill"><b>19:00–22:00</b><small>noite</small></div><div class="activation-note">Uma ativação por dia, conforme as condições apresentadas.</div></div>
      </div>
    </section>

    <section class="section testimonial-section" id="experiencia">
      <div class="container testimonial-grid">
        <div class="testimonial-visual"><div class="quote-mark">“</div><span>EXPERIÊNCIA PESSOAL</span><strong>Primeiro conheci.<br>Depois experimentei.<br>Então decidi compartilhar.</strong></div>
        <div class="testimonial-copy">
          <div class="section-heading"><span>03</span><h2>Eu também comecei pelo mais baixo.</h2></div>
          <p>Quando conheci a TIMI, preferi começar por uma modalidade de menor valor para entender na prática como funcionava.</p>
          <p>Acompanhei a plataforma, conheci a comunidade, realizei as ativações e acompanhei os recebimentos. Depois dessa experiência pessoal, decidi continuar e fazer um upgrade.</p>
          <p>Hoje compartilho o projeto com pessoas que tenham interesse em conhecer a proposta e esclarecer as suas dúvidas.</p>
          <div class="testimonial-highlight">“Antes de apresentar para outras pessoas, eu quis experimentar pessoalmente.”</div>
          <small>Relato pessoal. Uma experiência individual não representa garantia de resultados futuros.</small>
        </div>
      </div>
    </section>

    <section class="section options-section" id="opcoes">
      <div class="container">
        <div class="section-heading"><span>04</span><h2>Escolha como começar</h2></div>
        <p class="lead section-lead">Três modalidades foram selecionadas para apresentação no site. Compare os valores e conheça as condições antes de avançar.</p>
        <div class="options-grid premium-options">
          <article class="option-card"><div class="option-ribbon">T5</div><div class="option-label">AVANÇADA+</div><div class="option-price"><strong>2.700</strong><span>USDT</span></div><div class="daily"><small>Valor diário indicado</small><b>63 USDT</b></div><div class="option-copy">A modalidade de maior valor entre as três opções apresentadas.</div><a class="btn btn-primary full" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Quero conhecer</a></article>
          <article class="option-card featured-option"><div class="popular">MAIS PROCURADA</div><div class="option-ribbon">T3</div><div class="option-label">INTERMÉDIA</div><div class="option-price"><strong>560</strong><span>USDT</span></div><div class="daily"><small>Valor diário indicado</small><b>13 USDT</b></div><div class="option-copy">Uma modalidade intermédia para quem pretende aumentar a participação.</div><a class="btn btn-primary full" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Quero conhecer</a></article>
          <article class="option-card"><div class="option-ribbon">T4</div><div class="option-label">AVANÇADA</div><div class="option-price"><strong>1.300</strong><span>USDT</span></div><div class="daily"><small>Valor diário indicado</small><b>30 USDT</b></div><div class="option-copy">A modalidade de maior valor entre as três opções apresentadas.</div><a class="btn btn-primary full" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Quero conhecer</a></article>
        </div>
        <div class="financial-note"><b>⚠ Informação importante</b><span>Os valores e valores diários acima são os apresentados nas informações recebidas. A contabilização depende das regras, dias elegíveis e condições do programa. Não representam promessa ou garantia de retorno futuro.</span></div>
      </div>
    </section>

    <section class="section cycle-section" id="ciclo">
      <div class="container">
        <div class="cycle-intro"><div class="section-heading"><span>05</span><h2>Um ciclo de 365 dias</h2></div><p class="lead">Segundo as informações apresentadas, cada equipamento/participação tem um ciclo de 365 dias. No final do ciclo, existem condições específicas para continuar ou encerrar.</p></div>
        <div class="cycle-flow">
          <div class="cycle-start"><span>CICLO</span><strong>365</strong><small>DIAS</small></div>
          <div class="cycle-arrow">→</div>
          <div class="cycle-choice"><div><b>🔄 CONTINUAR</b><span>Renovação indicada como 50% do valor original, conforme as condições do programa.</span></div><div><b>↪ ENCERRAR</b><span>Devolução indicada como 50% do valor original, conforme as condições do programa.</span></div></div>
        </div>
        <div class="example-card"><span>EXEMPLO APRESENTADO</span><strong>T4 • US$1.300</strong><div><b>Renovação</b><em>US$650</em></div><div><b>Encerramento</b><em>US$650*</em></div><small>*Valores exemplificativos baseados nas informações recebidas e sujeitos às condições oficiais.</small></div>
      </div>
    </section>

    <section class="section rewards-section" id="beneficios">
      <div class="container">
        <div class="section-heading"><span>06</span><h2>Mais formas de participar</h2></div>
        <div class="rewards-grid">
          <div class="reward-card"><i>🎡</i><h3>Promoções</h3><p>Roletas e campanhas podem oferecer pontos, prémios ou valores adicionais conforme cada ação.</p></div>
          <div class="reward-card"><i>⭐</i><h3>Pontos</h3><p>Algumas atividades e reuniões podem estar associadas a sistemas de pontuação e recompensas.</p></div>
          <div class="reward-card"><i>👥</i><h3>Indicação</h3><p>A indicação é opcional. Bónus, quando aplicáveis, dependem das regras da campanha ou programa.</p></div>
          <div class="reward-card"><i>🏆</i><h3>Prémios</h3><p>Campanhas específicas podem disponibilizar prémios e outras formas de reconhecimento.</p></div>
        </div>
      </div>
    </section>

    <section class="section referral-section" id="indicacao">
      <div class="container referral-grid">
        <div><div class="section-heading"><span>07</span><h2>Gostou? Compartilhe.</h2></div><p class="lead">A indicação não é apresentada como requisito para participar. Se você conhecer alguém interessado, pode compartilhar a sua experiência e apresentar o projeto.</p></div>
        <div class="referral-steps"><div><b>01</b><span>Você compartilha</span></div><div><b>02</b><span>A pessoa conhece</span></div><div><b>03</b><span>Se participar, poderá existir bónus</span></div></div>
      </div>
    </section>

    <section class="section community-section" id="comunidade">
      <div class="container community-grid">
        <div class="community-card"><span>COMUNIDADE TIMI</span><strong>Não precisa conhecer o projeto sozinho.</strong><div class="community-icons"><b>WhatsApp</b><b>BonChat</b><b>Reuniões</b></div></div>
        <div><div class="section-heading"><span>08</span><h2>Acompanhe, pergunte e conheça.</h2></div><p class="lead">Os áudios descrevem grupos onde participantes compartilham experiências, acompanham atualizações e conversam sobre o projeto.</p><a class="btn btn-primary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Falar no Telegram</a></div>
      </div>
    </section>

    <section class="section news-section" id="noticias">
      <div class="container">
        <div class="section-heading"><span>09</span><h2>Notícias & eventos</h2></div>
        <p class="lead section-lead">Acompanhe os materiais e eventos divulgados relacionados com a presença da TIMI em Portugal.</p>
        <div class="news-grid">
          <article class="news-card"><div class="news-visual photo-like event"><span class="visual-label">EVENTO</span><span class="visual-icon">🍇</span></div><div class="news-body"><span class="news-kicker">Palmela • 3–8 setembro 2026</span><h3>Festa das Vindimas 2026</h3><p>Materiais recebidos associam a TIMI ao evento e a ações de mobilidade e demonstração de produtos.</p><small>Informação baseada nos materiais recebidos para esta página.</small></div></article>
          <article class="news-card"><div class="news-visual"><span class="visual-label">PORTUGAL</span><span class="visual-icon">🚲</span></div><div class="news-body"><span class="news-kicker">Presença local</span><h3>Lojas 4S e centros de formação</h3><p>Materiais recebidos apresentam localizações em Regueira de Pontes/Leiria, Praia da Rocha/Portimão, S. João da Madeira e Pinhal Novo/Palmela.</p><small>Confirme moradas, horários e serviços através dos canais oficiais.</small></div></article>
          <article class="news-card"><div class="news-visual prize"><span class="visual-label">CAMPANHA</span><span class="visual-icon">🎁</span></div><div class="news-body"><span class="news-kicker">Lançamento em Lisboa</span><h3>Sorteio de prémios divulgado</h3><p>Foi divulgado material sobre uma campanha associada ao lançamento em Lisboa, com vários prémios e regras próprias.</p><small>A campanha indicada tinha data-limite de 12 de setembro de 2026 e é mantida como registo.</small></div></article>
        </div>
      </div>
    </section>

    <section class="section safety-section" id="seguranca">
      <div class="container safety-grid">
        <div><div class="section-heading"><span>10</span><h2>Conheça antes de decidir.</h2></div><p class="lead">Uma apresentação profissional também precisa explicar os limites. Consulte as condições, leia o guia de segurança e tire dúvidas antes de colocar qualquer valor.</p></div>
        <div class="safety-actions"><a class="safety-link" href="guia-seguranca.html"><span>01</span><b>Guia de Segurança</b><small>Avalie informações, sinais de alerta e cuidados antes de participar.</small><strong>Ver guia →</strong></a><a class="safety-link" href="aviso-legal.html"><span>02</span><b>Aviso Legal</b><small>Consulte responsabilidades, privacidade e informações legais do site.</small><strong>Ver aviso →</strong></a></div>
      </div>
    </section>

    <section class="section final-cta" id="participar">
      <div class="container final-cta-inner"><span class="final-kicker">TIMI PORTUGAL</span><h2>Quer entender melhor antes de participar?</h2><p>Escolha o caminho que faz mais sentido para você.</p><div class="final-actions"><a class="btn btn-primary" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">🚀 Quero participar</a><a class="btn btn-light" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Quero mais informações</a></div><small>Você não precisa decidir tudo agora. Conheça as condições e esclareça as suas dúvidas primeiro.</small></div>
    </section>

    <section class="section faq-section" id="faq"><div class="container narrow"><div class="section-heading"><span>11</span><h2>Perguntas frequentes</h2></div>
      <details><summary>Preciso indicar pessoas para participar?</summary><p>Não. Segundo as informações apresentadas, a indicação é opcional. Quem participa pode compartilhar o projeto e, quando aplicável, receber bónus de acordo com as regras.</p></details>
      <details><summary>Quais são as modalidades apresentadas?</summary><p>O site apresenta T3 de 560 USDT, T4 de 1.300 USDT e T5 de 2.700 USDT, com valores diários indicados de 13, 30 e 63 USDT, respetivamente.</p></details>
      <details><summary>Como funciona a ativação diária?</summary><p>As informações recebidas descrevem a utilização de um código na aplicação e dois períodos disponíveis: 10h–13h ou 19h–22h. É indicada uma ativação por dia.</p></details>
      <details><summary>Fins de semana e feriados contam?</summary><p>Segundo o relato recebido, o valor diário é contabilizado em dias úteis, excluindo fins de semana e feriados nacionais. Confirme sempre a regra vigente.</p></details>
      <details><summary>Quanto dura o ciclo?</summary><p>As informações recebidas indicam um ciclo de 365 dias.</p></details>
      <details><summary>O que acontece depois dos 365 dias?</summary><p>Foi apresentada a possibilidade de renovar por 50% do valor original ou encerrar com devolução de 50% do valor original, sempre sujeita às condições oficiais do programa.</p></details>
      <details><summary>Existem promoções e pontos?</summary><p>Sim. Os relatos descrevem roletas, reuniões, códigos, pontos e campanhas que podem oferecer prémios ou valores adicionais conforme as regras de cada ação.</p></details>
      <details><summary>Posso tirar dúvidas antes de participar?</summary><p>Sim. Utilize o Telegram para conversar com um responsável e esclarecer as condições antes de avançar.</p></details>
    </div></section>
  `;

  const footer = document.querySelector('.footer');
  if (footer) {
    footer.innerHTML = `<div class="container footer-inner"><div><div class="brand">TIMI</div><p>Mobilidade, tecnologia e participação.</p></div><div class="footer-actions"><a href="#projeto">O projeto</a><a href="#opcoes">Modalidades</a><a href="#faq">FAQ</a><a href="guia-seguranca.html">Segurança</a><a href="${telegramUrl}" target="_blank" rel="noopener noreferrer">Telegram</a></div></div><div class="container disclaimer"><b>Informação importante:</b> este site apresenta informações recebidas e materiais de divulgação. Valores, condições, campanhas e eventuais benefícios estão sujeitos às regras oficiais aplicáveis. Nada nesta página constitui garantia de retorno financeiro. Faça a sua própria avaliação antes de participar.</div>`;
  }

  const style = document.createElement('style');
  style.textContent = `
    :root{--lime:#b8f500;--green:#38a800;--dark:#10170c;--ink:#17200f;--muted:#697361;--soft:#f4f9ea;--line:#e1e8d8}
    html{scroll-behavior:smooth;scroll-padding-top:82px}body{background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.container{width:min(calc(100% - 40px),1120px);margin:auto}
    .site-header{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.96);backdrop-filter:blur(16px);border-bottom:1px solid #edf0e8;box-shadow:0 4px 20px rgba(30,50,10,.05)}.nav{height:76px}.brand{font-size:26px;font-weight:950;letter-spacing:-.06em;color:#11170c!important;text-decoration:none}.nav-links{gap:22px}.nav-link{color:#3f4738;font-weight:750;text-decoration:none;font-size:13px}.nav-link:hover{color:var(--green)}.nav-telegram{padding:10px 15px;border-radius:999px;background:var(--lime);color:#152000;text-decoration:none;font-weight:900;font-size:12px;box-shadow:0 6px 18px rgba(70,120,0,.14)}
    .hero{min-height:650px;padding:68px 0 30px;background:radial-gradient(circle at 82% 22%,rgba(184,245,0,.28),transparent 30%),linear-gradient(135deg,#f2ffd9 0%,#fff 55%,#ecffd1 100%);position:relative;overflow:hidden}.hero-grid{grid-template-columns:1.02fr .98fr;gap:54px;align-items:center}.hero-copy{position:relative;z-index:2}.eyebrow{display:inline-flex;padding:9px 13px;border-radius:999px;background:#218800;color:#fff;font-size:10px;font-weight:950;letter-spacing:.09em;box-shadow:0 7px 18px rgba(30,100,0,.15)}.hero h1{font-size:clamp(48px,6vw,78px);line-height:.94;letter-spacing:-.065em;color:var(--ink);margin:20px 0 22px;max-width:720px}.hero h1 span{color:var(--green)}.hero-text{font-size:18px;line-height:1.6;color:#586250;max-width:650px}.hero-price-line{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap;margin-top:22px}.hero-price-line span,.hero-price-line small{color:#737c6b;font-size:12px}.hero-price-line strong{font-size:28px;letter-spacing:-.04em}.hero-price-line small{width:100%}.cta-row{margin:25px 0 11px}.btn{min-height:52px;padding:0 22px;border-radius:999px;font-weight:900;box-shadow:0 8px 20px rgba(35,70,10,.10);text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:7px;transition:.2s transform,.2s box-shadow}.btn:hover{transform:translateY(-2px);box-shadow:0 12px 25px rgba(35,70,10,.14)}.btn-primary{background:var(--lime);color:#152000}.btn-secondary{background:#fff;border:1px solid #dbe3d1;color:#273020}.microcopy{font-size:11px;color:#78806f;max-width:640px}.hero-card{height:475px;border-radius:34px;overflow:hidden;position:relative;box-shadow:0 25px 55px rgba(40,80,10,.18);border:7px solid rgba(255,255,255,.9)}.hero-photo{position:absolute;inset:0;background-image:url('https://lightmobie.pt/wp-content/uploads/2026/07/bici_urban-mc_verde-lightmobie.webp');background-size:cover;background-position:center}.hero-photo-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,30,4,.03),rgba(8,25,3,.58))}.hero-card-content{position:absolute;left:24px;right:24px;bottom:24px;background:rgba(255,255,255,.94);border-radius:17px;padding:15px 17px;box-shadow:0 10px 25px rgba(20,40,10,.15)}.hero-card-content span{font-size:10px;font-weight:950;color:#4b7e1b;letter-spacing:.08em}.hero-card-content strong{display:block;font-size:18px;margin-top:4px}.hero-proof{display:flex;gap:22px;flex-wrap:wrap;padding-top:22px;color:#5b6652;font-size:12px;font-weight:750}.hero-proof span:before{content:'•';color:var(--green);margin-right:6px}.hero-orb{position:absolute;border-radius:50%;filter:blur(4px);opacity:.2}.orb-one{width:250px;height:250px;background:var(--lime);right:-100px;top:40px}.orb-two{width:180px;height:180px;background:#6cd338;left:-100px;bottom:-50px}
    .section{padding:92px 0}.section-heading{display:flex;align-items:center;gap:13px;margin-bottom:26px}.section-heading span{font-size:11px;font-weight:950;color:#65a53a;letter-spacing:.12em}.section-heading h2{margin:0;font-size:clamp(34px,4.3vw,54px);line-height:.98;letter-spacing:-.055em;color:var(--ink)}.section-lead{max-width:750px;font-size:17px;margin:-6px 0 30px}.big-lead{font-size:25px;line-height:1.35;color:#2c3525}.body-copy{color:#65705d;max-width:650px}.project-section{background:#fff}.project-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:start}.project-points{display:grid;grid-template-columns:1fr 1fr;gap:12px}.project-points div{padding:20px;border:1px solid var(--line);border-radius:18px;background:#fbfdf8;display:grid;grid-template-columns:36px 1fr;column-gap:10px}.project-points b{grid-row:span 2;font-size:24px}.project-points strong{font-size:15px}.project-points span{font-size:12px;color:#6c7567;line-height:1.4}.local-presence{margin-top:34px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.local-presence div{background:var(--soft);border-radius:16px;padding:18px}.local-presence span{display:block;color:#71805f;font-size:10px;font-weight:850;text-transform:uppercase;letter-spacing:.08em}.local-presence strong{font-size:18px;margin-top:4px;display:block}
    .how-section{background:#f7faf3}.premium-steps{grid-template-columns:repeat(4,1fr);gap:13px}.premium-steps article{padding:24px;border:1px solid #dfe7d8;border-radius:20px;background:#fff;box-shadow:0 10px 25px rgba(35,65,10,.05);position:relative}.step-number{font-size:10px;font-weight:950;color:#65a43b}.step-icon{font-size:30px;margin:22px 0 12px}.premium-steps h3{margin:0 0 7px;font-size:20px}.premium-steps p{margin:0;color:#687263;font-size:13px}.activation-card{margin-top:20px;padding:20px;border-radius:22px;background:#16200f;color:#fff;display:grid;grid-template-columns:1.4fr 1fr auto 1fr 1.3fr;gap:12px;align-items:center}.activation-card>div:first-child span{display:block;color:#b8f500;font-size:10px;font-weight:950;letter-spacing:.1em}.activation-card>div:first-child strong{display:block;font-size:16px;margin-top:3px}.time-pill{padding:12px 15px;background:#27341b;border:1px solid rgba(255,255,255,.1);border-radius:14px}.time-pill b{display:block;font-size:15px}.time-pill small{color:#9faa94}.or{text-align:center;color:#7f8b77;font-size:12px}.activation-note{font-size:11px;color:#aeb8a5;line-height:1.4}
    .testimonial-section{background:linear-gradient(135deg,#16200f,#28391a);color:#fff}.testimonial-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:center}.testimonial-visual{min-height:390px;border-radius:30px;background:linear-gradient(145deg,#b8f500,#69bd16);color:#142000;padding:32px;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 25px 50px rgba(0,0,0,.18)}.quote-mark{font-size:130px;line-height:.7;font-family:Georgia,serif;opacity:.25;margin-bottom:auto}.testimonial-visual span{font-size:10px;font-weight:950;letter-spacing:.12em}.testimonial-visual strong{font-size:30px;line-height:1.05;letter-spacing:-.045em;margin-top:12px}.testimonial-copy .section-heading h2{color:#fff}.testimonial-copy .section-heading span{color:#b8f500}.testimonial-copy p{color:#d6decf;line-height:1.65}.testimonial-highlight{margin:24px 0;padding:17px 19px;border-left:4px solid #b8f500;background:rgba(255,255,255,.06);border-radius:0 14px 14px 0;font-size:18px;font-weight:800}.testimonial-copy small{color:#98a391;font-size:10px}
    .options-section{background:linear-gradient(180deg,#efffd1,#fbfff5)}.premium-options{grid-template-columns:repeat(3,1fr);gap:15px}.option-card{position:relative;padding:26px;border:1px solid #dce8c8;border-radius:24px;background:#fff;box-shadow:0 14px 30px rgba(45,80,10,.07);overflow:hidden}.option-card:after{content:'';position:absolute;width:180px;height:180px;border-radius:50%;background:var(--lime);opacity:.12;right:-100px;bottom:-110px}.option-ribbon{font-size:30px;font-weight:950;letter-spacing:-.05em}.option-label{font-size:10px;color:#71815f;font-weight:900;letter-spacing:.1em;margin-top:2px}.option-price{display:flex;align-items:baseline;gap:6px;margin:25px 0 16px}.option-price strong{font-size:47px;line-height:.9;letter-spacing:-.065em}.option-price span{font-size:13px;font-weight:900;color:#647158}.daily{display:flex;align-items:end;justify-content:space-between;padding:13px 0;border-top:1px solid #e5ebdf;border-bottom:1px solid #e5ebdf}.daily small{font-size:11px;color:#717b6d}.daily b{font-size:20px}.option-copy{font-size:12px;color:#697364;min-height:54px;padding:13px 0}.option-card .btn{position:relative;z-index:2}.featured-option{border:2px solid #b6dd54;transform:translateY(-8px);box-shadow:0 20px 40px rgba(55,100,5,.13)}.popular{position:absolute;right:16px;top:16px;background:var(--lime);padding:7px 9px;border-radius:999px;color:#233000;font-size:9px;font-weight:950}.financial-note{margin-top:18px;border:1px solid #dce6d1;background:rgba(255,255,255,.8);border-radius:17px;padding:16px 18px;display:flex;gap:9px;flex-direction:column}.financial-note b{font-size:12px}.financial-note span{font-size:11px;line-height:1.5;color:#697365}
    .cycle-section{background:#fff}.cycle-intro{max-width:720px}.cycle-flow{display:grid;grid-template-columns:180px 60px 1fr;gap:20px;align-items:center;margin-top:28px}.cycle-start{height:180px;border-radius:50%;background:#16200f;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 20px 35px rgba(20,35,10,.13)}.cycle-start span{font-size:10px;color:#b8f500;font-weight:950;letter-spacing:.1em}.cycle-start strong{font-size:55px;line-height:1;letter-spacing:-.08em}.cycle-start small{font-weight:900}.cycle-arrow{font-size:40px;color:#91ad61;text-align:center}.cycle-choice{display:grid;grid-template-columns:1fr 1fr;gap:13px}.cycle-choice div{padding:22px;border-radius:18px;background:#f5f9ef;border:1px solid #dfe8d3}.cycle-choice b{display:block;font-size:14px}.cycle-choice span{display:block;color:#697365;font-size:12px;line-height:1.5;margin-top:7px}.example-card{margin-top:20px;max-width:550px;padding:22px;border-radius:20px;background:#efffd0;border:1px solid #d8e9b5}.example-card>span{display:block;font-size:10px;font-weight:950;color:#66832e;letter-spacing:.1em}.example-card>strong{display:block;font-size:25px;margin:6px 0 14px}.example-card div{display:flex;justify-content:space-between;padding:9px 0;border-top:1px solid rgba(90,120,35,.15)}.example-card em{font-style:normal;font-weight:900}.example-card small{display:block;margin-top:10px;color:#6c765e;font-size:9px}
    .rewards-section{background:#f7faf3}.rewards-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.reward-card{padding:24px;background:#fff;border:1px solid #e0e7da;border-radius:20px}.reward-card i{font-style:normal;font-size:31px}.reward-card h3{margin:17px 0 6px}.reward-card p{font-size:12px;color:#687264;line-height:1.5;margin:0}.referral-section{background:#16200f;color:#fff}.referral-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.referral-section .section-heading h2{color:#fff}.referral-section .section-heading span{color:#b8f500}.referral-section .lead{color:#d4dccd}.referral-steps{display:grid;gap:10px}.referral-steps div{display:flex;align-items:center;gap:15px;padding:17px 19px;border:1px solid rgba(255,255,255,.1);border-radius:15px;background:rgba(255,255,255,.04)}.referral-steps b{color:#b8f500}.referral-steps span{font-weight:750}.community-section{background:#fff}.community-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:center}.community-card{min-height:310px;padding:30px;border-radius:28px;background:linear-gradient(145deg,#efffcf,#c9f66a);display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 18px 35px rgba(70,110,10,.11)}.community-card>span{font-size:10px;font-weight:950;letter-spacing:.12em;color:#557d1f}.community-card>strong{font-size:32px;line-height:1.02;letter-spacing:-.05em;margin-top:10px}.community-icons{display:flex;gap:7px;flex-wrap:wrap;margin-top:22px}.community-icons b{font-size:10px;padding:8px 10px;border-radius:999px;background:#fff;color:#415525}
    .news-section{background:#f7faf4}.news-grid{grid-template-columns:repeat(3,1fr);gap:15px}.news-card{border:1px solid #e0e8da;border-radius:21px;overflow:hidden;background:#fff;box-shadow:0 10px 24px rgba(40,70,15,.05);transition:.2s transform,.2s box-shadow}.news-card:hover{transform:translateY(-3px);box-shadow:0 15px 30px rgba(40,70,15,.1)}.news-visual{height:175px;display:flex;align-items:flex-end;padding:18px;background:linear-gradient(135deg,#183d0d,#55ae00);position:relative}.news-visual.event{background:linear-gradient(135deg,#24400c,#86bd19)}.news-visual.prize{background:linear-gradient(135deg,#142f0d,#42a900 60%,#d9ff6b)}.visual-label{position:absolute;right:14px;top:14px;background:var(--lime);color:#172000;border-radius:999px;padding:7px 10px;font-size:9px;font-weight:950}.visual-icon{font-size:54px;filter:drop-shadow(0 5px 6px rgba(0,0,0,.15))}.news-body{padding:20px}.news-kicker{font-size:9px;font-weight:950;letter-spacing:.1em;text-transform:uppercase;color:#65903e}.news-body h3{font-size:21px;line-height:1.12;letter-spacing:-.035em;margin:7px 0 10px}.news-body p{font-size:12px;color:#667060;line-height:1.55;margin:0 0 14px}.news-body small{font-size:9px;color:#808879;line-height:1.4;display:block}
    .safety-section{background:#f1f5eb}.safety-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:start}.safety-actions{display:grid;gap:12px}.safety-link{display:grid;grid-template-columns:40px 1fr;column-gap:10px;padding:20px;background:#fff;border:1px solid #dfe7d9;border-radius:18px;text-decoration:none;color:var(--ink)}.safety-link span{grid-row:span 3;font-size:10px;color:#5e9c36;font-weight:950}.safety-link b{font-size:16px}.safety-link small{color:#6b7566;font-size:11px;line-height:1.45;margin:5px 0}.safety-link strong{font-size:11px;color:#4e9600}
    .final-cta{padding:100px 0;background:radial-gradient(circle at 50% 0,rgba(184,245,0,.23),transparent 36%),#16200f;color:#fff;text-align:center}.final-cta-inner{max-width:780px}.final-kicker{color:#b8f500;font-size:10px;font-weight:950;letter-spacing:.15em}.final-cta h2{font-size:clamp(40px,5vw,62px);line-height:.98;letter-spacing:-.06em;margin:16px auto}.final-cta p{color:#cbd4c1}.final-actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:25px 0 12px}.btn-light{background:#fff;color:#1a2312}.final-cta small{color:#899482;font-size:10px}.faq-section{background:#f7f8f5}.narrow{max-width:850px}.faq-section details{border-top:1px solid #dce3d8;padding:20px 0}.faq-section details:last-child{border-bottom:1px solid #dce3d8}.faq-section summary{cursor:pointer;font-weight:850;font-size:16px}.faq-section details p{color:#667064;font-size:13px;line-height:1.6;margin:12px 0 0}
    .footer{background:var(--lime);color:#18200e;padding:38px 0 28px}.footer-inner{display:flex;justify-content:space-between;gap:25px}.footer p{color:#51611e;font-size:12px}.footer-actions{display:flex;gap:18px;flex-wrap:wrap}.footer-actions a{color:#26320f;text-decoration:none;font-size:12px;font-weight:800}.disclaimer{border-top:1px solid rgba(40,70,10,.18);margin-top:28px;padding-top:17px;color:#596522;font-size:9px;line-height:1.5}
    .timi-bottom-nav{display:none}
    @media(max-width:850px){
      body{padding-bottom:78px}.container{width:min(calc(100% - 28px),1120px)}.site-header .nav{height:62px}.nav-links{gap:7px}.nav-link{display:none}.nav-telegram{padding:8px 11px;font-size:10px}.brand{font-size:22px}.hero{padding:38px 0 28px;min-height:auto}.hero-grid,.project-grid,.testimonial-grid,.referral-grid,.community-grid,.safety-grid{grid-template-columns:1fr;gap:35px}.hero h1{font-size:45px}.hero-text{font-size:16px}.hero-card{height:330px}.hero-proof{gap:9px;font-size:10px}.section{padding:62px 0}.section-heading h2{font-size:34px}.project-points{grid-template-columns:1fr}.local-presence{grid-template-columns:1fr}.premium-steps,.premium-options,.rewards-grid,.news-grid{grid-template-columns:1fr}.activation-card{grid-template-columns:1fr 1fr;gap:9px}.activation-card>div:first-child{grid-column:1/-1}.activation-note{grid-column:1/-1}.or{display:none}.featured-option{transform:none}.cycle-flow{grid-template-columns:1fr;gap:12px}.cycle-start{width:150px;height:150px;margin:auto}.cycle-arrow{transform:rotate(90deg)}.cycle-choice{grid-template-columns:1fr}.testimonial-visual{min-height:270px}.community-card{min-height:250px}.footer-inner{flex-direction:column}.footer-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.final-cta{padding:78px 0}.timi-bottom-nav{position:fixed;display:grid;grid-template-columns:repeat(4,1fr);left:0;right:0;bottom:0;z-index:999;background:var(--lime);border-top:1px solid #9fd700;box-shadow:0 -7px 20px rgba(30,50,5,.16);padding:7px 6px calc(7px + env(safe-area-inset-bottom))}.timi-bottom-nav a{display:flex;flex-direction:column;align-items:center;gap:2px;text-decoration:none;color:#33420b;font-weight:900;font-size:10px}.timi-bottom-nav span{font-size:20px;line-height:21px}.timi-bottom-nav small{font-size:9px}}
  `;
  document.head.appendChild(style);

  const bottom = document.createElement('nav');
  bottom.className = 'timi-bottom-nav';
  bottom.setAttribute('aria-label','Ações rápidas');
  bottom.innerHTML = `<a href="#top"><span>⌂</span><small>Início</small></a><a href="#opcoes"><span>▣</span><small>Modalidades</small></a><a href="${telegramUrl}" target="_blank" rel="noopener noreferrer"><span>✈</span><small>Telegram</small></a><a href="${affiliateUrl}" target="_blank" rel="noopener noreferrer"><span>↗</span><small>Participar</small></a>`;
  document.body.appendChild(bottom);

  document.querySelectorAll('a[href="https://timihqs.com/#/pages/login/registerView?code=d3of54"]').forEach(a => { a.target='_blank'; a.rel='noopener noreferrer'; });
});