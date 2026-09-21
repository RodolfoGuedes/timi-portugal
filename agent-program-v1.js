document.addEventListener('DOMContentLoaded', () => {
  const modalities = document.getElementById('opcoes');
  if (!modalities || document.getElementById('programa-agentes')) return;
  const section = document.createElement('section');
  section.id = 'programa-agentes';
  section.className = 'section timi-agent-program';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>PROGRAMA DE AGENTES</span><h2>Conheça a progressão por equipas</h2></div>
      <p class="lead section-lead">Além das modalidades e da atividade diária, a TIMI disponibiliza um programa separado de agentes, baseado em indicações e na formação de equipas. A participação nesse programa não é obrigatória para quem utiliza apenas a sua modalidade.</p>
      <div class="timi-agent-highlight">
        <div><span class="timi-agent-eyebrow">PRIMEIRO MARCO · AGENTE NÍVEL 1</span><h3>Como se qualificar?</h3><p>Para se qualificar como <strong>Agente Nível 1</strong>, é necessário indicar <strong>pelo menos 5 pessoas</strong> e cada uma delas deve aderir, no mínimo, à modalidade <strong>T3</strong> (T3 ou superior).</p><p class="timi-agent-note">Cinco contactos ou inscrições sem adesão qualificada não cumprem, por si só, este requisito. A qualificação e a elegibilidade para eventuais bónus são condições distintas.</p></div>
        <div class="timi-agent-number" aria-label="Cinco indicações qualificadas"><strong>5</strong><span>indicações<br>qualificadas</span></div>
      </div>
      <div class="timi-agent-levels">
        <article><span>01</span><h3>Nível 1</h3><p>Indicar pelo menos cinco pessoas com adesão individual à modalidade T3 ou superior.</p></article>
        <article><span>02</span><h3>Nível 2</h3><p>A progressão para este nível envolve a formação de dois agentes de Nível 1. Consulte as condições de qualificação na plataforma.</p></article>
        <article><span>03</span><h3>Nível 3</h3><p>A progressão para este nível envolve a formação de dois agentes de Nível 2. Consulte as condições de qualificação na plataforma.</p></article>
      </div>
      <details class="timi-agent-conditions"><summary>O que devo verificar sobre os bónus?</summary><p>O programa inclui bónus de promoção e bónus associados a períodos específicos. Os requisitos de elegibilidade, a acumulação de bónus e os prazos de pagamento dependem das regras do programa. Consulte as condições na plataforma antes de participar. Os valores não constituem garantia de pagamento.</p></details>
      <p class="timi-agent-footnote">O programa de agentes é separado dos valores diários associados às modalidades. Não é necessário recrutar pessoas para realizar a atividade diária da sua própria modalidade.</p>
      <a class="timi-agent-link" href="#indicacao">Ler mais sobre indicações e participação →</a>
    </div>`;
  modalities.insertAdjacentElement('afterend', section);
  const style = document.createElement('style');
  style.textContent = `
    .timi-agent-program{background:#f5f9f0;color:#1d2b18}
    .timi-agent-program .section-heading h2{color:#1d2b18}
    .timi-agent-highlight{display:grid;grid-template-columns:minmax(0,1fr) 170px;gap:22px;align-items:center;background:#fff;border:1px solid #dce9d1;border-radius:24px;padding:clamp(22px,4vw,38px);margin:28px 0 20px}
    .timi-agent-eyebrow{font-size:12px;font-weight:850;letter-spacing:.06em;color:#3b7b22}
    .timi-agent-highlight h3{font-size:clamp(26px,4vw,37px);line-height:1.15;margin:10px 0 14px;color:#17360e}
    .timi-agent-highlight p{line-height:1.65;margin:0 0 12px;color:#344332}
    .timi-agent-highlight .timi-agent-note{font-size:13px;color:#596854;margin:0}
    .timi-agent-number{background:#dcff91;border-radius:20px;min-height:170px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:#214a11}
    .timi-agent-number strong{font-size:80px;line-height:1;font-weight:900}.timi-agent-number span{font-size:14px;line-height:1.35;font-weight:800}
    .timi-agent-levels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .timi-agent-levels article{background:#fff;border:1px solid #dce9d1;border-radius:19px;padding:22px}
    .timi-agent-levels article>span{color:#448322;font-weight:900;font-size:12px}.timi-agent-levels h3{color:#19380e;margin:10px 0}.timi-agent-levels p{color:#53614d;font-size:14px;line-height:1.6;margin:0}
    .timi-agent-conditions{background:#fff;border:1px solid #dce9d1;border-radius:17px;margin-top:18px;padding:18px 22px}
    .timi-agent-conditions summary{cursor:pointer;font-weight:800;color:#17360e}.timi-agent-conditions p{font-size:14px;line-height:1.65;color:#4b5846}
    .timi-agent-footnote{font-size:13px;line-height:1.65;color:#56624f;margin:20px 0 12px}.timi-agent-link{color:#286c0b;font-weight:800}
    @media(max-width:700px){.timi-agent-highlight{grid-template-columns:1fr}.timi-agent-number{min-height:110px;flex-direction:row;gap:12px}.timi-agent-number strong{font-size:62px}.timi-agent-levels{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);
});