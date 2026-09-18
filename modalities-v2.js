document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#opcoes');
  if (!section) return;

  const config = window.TIMI_CONFIG || {};
  const affiliateUrl = config.affiliateUrl && config.affiliateUrl !== '#'
    ? config.affiliateUrl
    : 'https://timihqs.com/#/pages/login/registerView?code=d3of54';

  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>04</span><h2>Modalidades de participação</h2></div>
      <p class="lead section-lead">Entre as modalidades atualmente apresentadas, este site destaca T3, T4 e T5. Cada uma possui um valor de participação e um valor diário indicado nas informações do programa.</p>

      <div class="options-grid premium-options">
        <article class="option-card">
          <div class="option-ribbon">T5</div>
          <div class="option-label">AVANÇADA+</div>
          <div class="option-price"><strong>2.700</strong><span>USDT</span></div>
          <div class="daily"><small>Valor diário indicado</small><b>63 USDT</b></div>
          <div class="option-copy">Modalidade de maior valor entre as três opções atualmente apresentadas.</div>
          <a class="btn btn-primary full" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Quero conhecer</a>
        </article>

        <article class="option-card">
          <div class="option-ribbon">T3</div>
          <div class="option-label">MODALIDADE</div>
          <div class="option-price"><strong>560</strong><span>USDT</span></div>
          <div class="daily"><small>Valor diário indicado</small><b>13 USDT</b></div>
          <div class="option-copy">Modalidade intermédia entre as opções atualmente apresentadas.</div>
          <a class="btn btn-primary full" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Ver plataforma</a>
        </article>

        <article class="option-card">
          <div class="option-ribbon">T4</div>
          <div class="option-label">MODALIDADE</div>
          <div class="option-price"><strong>1.300</strong><span>USDT</span></div>
          <div class="daily"><small>Valor diário indicado</small><b>30 USDT</b></div>
          <div class="option-copy">Modalidade de maior valor entre as três opções apresentadas nesta página.</div>
          <a class="btn btn-primary full" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Ver plataforma</a>
        </article>
      </div>

      <div class="financial-note">
        <b>Como interpretar estes valores</b>
        <span>560, 1.300 e 2.700 USDT correspondem aos valores atualmente apresentados para as modalidades T3, T4 e T5. Os valores de 13, 30 e 63 USDT são os valores diários indicados para essas modalidades.</span>
      </div>

      <div style="margin-top:14px;padding:16px 18px;border-radius:17px;background:#fff;border:1px solid #dce6d1;color:#697365;font-size:11px;line-height:1.55;">
        <strong style="display:block;color:#17200f;margin-bottom:5px;">Importante antes de participar</strong>
        As modalidades fazem parte de um programa com regras próprias. Condições de ativação, ciclo, continuidade, encerramento e demais requisitos são explicados nas secções seguintes e devem ser confirmados nas regras vigentes da plataforma.
      </div>
    </div>`;
});