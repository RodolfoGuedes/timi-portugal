document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#indicacao');
  if (!section) return;

  const config = window.TIMI_CONFIG || {};
  const telegramUrl = config.telegramUrl && config.telegramUrl !== '#'
    ? config.telegramUrl
    : 'https://t.me/TIMIPortugalBot';

  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>08</span><h2>Indicações e crescimento da comunidade</h2></div>
      <p class="lead section-lead">A TIMI utiliza também a divulgação entre participantes como uma das formas de tornar o projeto conhecido. Indicar outras pessoas é opcional e, segundo as regras apresentadas, não é uma condição para receber o valor diário associado à sua própria modalidade.</p>

      <div style="margin-top:22px;display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px;">
        <div style="padding:20px;border-radius:20px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;font-size:16px;margin-bottom:7px;">👤 Pode participar sem indicar ninguém</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Um participante pode permanecer durante o ciclo sem fazer indicações. O valor diário da modalidade está associado ao cumprimento das regras da própria participação, incluindo as atividades diárias exigidas.</span></div>
        <div style="padding:20px;border-radius:20px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;font-size:16px;margin-bottom:7px;">🤝 Indicação é opcional</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Quem desejar pode apresentar o projeto a outras pessoas, compartilhar a sua experiência e ajudar na divulgação da marca e da comunidade.</span></div>
        <div style="padding:20px;border-radius:20px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;font-size:16px;margin-bottom:7px;">📈 Existe um programa de progressão</strong><span style="font-size:12px;line-height:1.6;color:#687263;">As informações recebidas indicam níveis e benefícios adicionais ligados à participação e às indicações. Os critérios e benefícios podem variar conforme as regras vigentes.</span></div>
      </div>

      <div class="referral-simple-box" style="margin-top:20px;padding:22px;border-radius:20px;background:#f5f9ef;border:1px solid #dfe8d3;">
        <strong style="display:block;font-size:18px;margin-bottom:12px;">Como funciona de forma simples?</strong>
        <div class="referral-steps"><div><b>01</b><span>Você conhece e utiliza o projeto</span></div><div><b>02</b><span>Se quiser, compartilha com outra pessoa</span></div><div><b>03</b><span>A pessoa conhece as condições e decide por si própria</span></div></div>
      </div>

      <style>
        #indicacao .referral-simple-box{color:#17200f!important;background:#f5f9ef!important}
        #indicacao .referral-simple-box>strong{color:#17200f!important}
        #indicacao .referral-simple-box .referral-steps div{background:#fff!important;border:1px solid #d8e3cf!important;color:#17200f!important}
        #indicacao .referral-simple-box .referral-steps b{color:#75a900!important;font-weight:950!important}
        #indicacao .referral-simple-box .referral-steps span{color:#263121!important;font-weight:800!important;text-shadow:none!important}
      </style>

      <div class="financial-note" style="margin-top:18px;">
        <b>Sem obrigação de recrutamento</b>
        <span>Segundo as informações apresentadas, não é necessário indicar um número mínimo de pessoas para manter o valor diário da modalidade. Eventuais bónus ou progressões por indicação são adicionais e seguem regras próprias.</span>
      </div>

      <div style="margin-top:18px;padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;">
        <strong style="display:block;margin-bottom:6px;">Por que não mostramos aqui todos os níveis e bónus?</strong>
        <span style="font-size:12px;line-height:1.6;color:#687263;">O objetivo desta página é apresentar o funcionamento geral. Critérios de progressão, percentagens e benefícios específicos devem ser confirmados nas regras vigentes e explicados durante o acompanhamento do participante, evitando informação desatualizada ou incompleta.</span>
      </div>

      <div class="cta-row" style="margin-top:20px;"><a class="btn btn-primary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Perguntar sobre indicações</a></div>
    </div>`;
});