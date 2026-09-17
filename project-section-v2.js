document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#projeto');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>01</span><h2>Como funciona a TIMI</h2></div>
      <div class="project-grid">
        <div>
          <p class="lead big-lead">A TIMI é apresentada como um projeto de mobilidade partilhada baseado em bicicletas convencionais e elétricas, utilizadas pelo público através de uma aplicação e leitura de QR Code.</p>
          <p class="body-copy">Nos locais onde o serviço está disponível, o utilizador encontra uma bicicleta, lê o QR Code através da aplicação e paga pela utilização. A operação das bicicletas constitui a atividade de mobilidade associada ao projeto.</p>
          <p class="body-copy">Além da utilização pública das bicicletas, existe um modelo de participação através de modalidades associadas a equipamentos da operação. Segundo as condições apresentadas aos participantes, cada modalidade possui regras próprias, período de participação e valores indicados.</p>
        </div>
        <div class="project-points">
          <div><b>🚲</b><strong>Bicicletas partilhadas</strong><span>Mobilidade urbana através de bicicletas convencionais e elétricas.</span></div>
          <div><b>📱</b><strong>Utilização por QR Code</strong><span>O público utiliza a aplicação para aceder às bicicletas disponíveis e pagar pelo serviço.</span></div>
          <div><b>🌍</b><strong>Expansão</strong><span>O projeto está a desenvolver a sua presença em Portugal e apresenta planos de expansão na Europa.</span></div>
          <div><b>🤝</b><strong>Participação</strong><span>Existem modalidades que permitem participar no projeto, sujeitas às regras e condições da plataforma.</span></div>
        </div>
      </div>
      <div class="project-explainer" style="margin-top:34px;padding:22px 24px;border-radius:20px;background:#f4f9ea;border:1px solid #e1e8d8;">
        <strong style="display:block;font-size:18px;margin-bottom:8px;">Em resumo</strong>
        <span style="color:#65705d;line-height:1.6;">Bicicletas disponíveis ao público → utilização através da aplicação e QR Code → serviço de mobilidade → modalidades de participação associadas ao projeto.</span>
      </div>
      <p style="margin-top:14px;color:#78806f;font-size:11px;line-height:1.55;">Esta página apresenta o funcionamento comunicado aos participantes. Detalhes económicos, condições e valores das modalidades devem ser consultados nas regras vigentes da plataforma antes de qualquer decisão.</p>
    </div>`;
});