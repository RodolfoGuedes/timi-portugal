document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#faq');
  if (!section) return;

  const config = window.TIMI_CONFIG || {};
  const telegramUrl = config.telegramUrl && config.telegramUrl !== '#'
    ? config.telegramUrl
    : 'https://t.me/TIMIPortugalBot';

  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>10</span><h2>Regras e dúvidas frequentes</h2></div>
      <p class="lead section-lead">Esta área reúne as principais regras e dúvidas relatadas sobre a participação. Como condições podem ser alteradas, confirme sempre a versão vigente dentro da aplicação e com o responsável pelo acompanhamento.</p>

      <div class="faq-list">
        <details open><summary>O que acontece se eu perder o código diário?</summary><p>Existem duas janelas de ativação: 10:00–13:00 e 19:00–22:00, horário de Portugal. É necessário utilizar apenas uma delas por dia elegível. Se perder as duas janelas, o valor daquele dia não é creditado e não pode ser recuperado posteriormente.</p></details>

        <details><summary>Posso ficar vários dias sem fazer a atividade?</summary><p>Segundo as informações recebidas, o participante deve manter presença e acompanhar o projeto. Foi relatada uma regra de até 3 dias consecutivos de ausência. Períodos superiores podem levar a medidas na conta, incluindo redução temporária do valor diário ou, em situações de inatividade prolongada, bloqueio/exclusão. Situações justificadas podem ser analisadas pelo responsável, mas os valores dos dias perdidos não são recuperados.</p></details>

        <details><summary>O valor diário pode ser reduzido?</summary><p>Foi relatado que, em situações de ausência ou inatividade, a gestão pode aplicar temporariamente uma redução do valor diário. Também foi relatado um caso em que, após justificação ao responsável, o valor original foi restabelecido. Esta informação deve ser confirmada nas regras vigentes, pois não temos documentação independente que estabeleça quando essa medida é aplicada.</p></details>

        <details><summary>Preciso indicar pessoas para receber o valor diário?</summary><p>Segundo as condições apresentadas, não. A indicação é opcional. O participante pode não indicar ninguém durante o ciclo e continuar sujeito às condições da sua própria modalidade e às atividades diárias exigidas. Eventuais bónus por indicação seguem regras separadas.</p></details>

        <details><summary>Posso sair antes dos 365 dias e receber o valor da modalidade de volta?</summary><p>Pelas informações atualmente recebidas, não existe um procedimento normal de cancelamento com reembolso antecipado antes do final do ciclo de 365 dias. A condição de reembolso de 50% apresentada refere-se ao encerramento normal após a conclusão do ciclo, conforme as regras vigentes.</p></details>

        <details><summary>O que acontece no final dos 365 dias?</summary><p>Segundo as condições apresentadas, o participante pode renovar por mais um ciclo pagando 50% do valor original da modalidade ou encerrar após o ciclo, situação em que está previsto um reembolso correspondente a 50% do valor original. Estas condições devem ser confirmadas na plataforma no momento da decisão.</p></details>

        <details><summary>Existe taxa para levantar?</summary><p>Segundo as informações recebidas, cada levantamento está sujeito a uma taxa de 25%. Os mínimos atualmente indicados são 50 USDT para T3 e 100 USDT para T4. O mínimo atualmente indicado para T5 é 200 USDT. Taxas, mínimos e demais condições podem mudar.</p></details>

        <details><summary>Quanto tempo demora um levantamento?</summary><p>Na experiência relatada, o envio da TIMI para a OKX costuma levar aproximadamente 3 dias úteis. Depois do recebimento, a conversão para euros e a transferência bancária dependem da plataforma e do banco utilizados. Esses prazos não são garantidos.</p></details>

        <details><summary>O que é o BonChat? É uma aplicação da TIMI?</summary><p>Não segundo as informações recebidas. O BonChat é uma ferramenta externa de comunicação utilizada pelos responsáveis para organizar grupos, divulgar códigos, formações, eventos, comunicados e acompanhamento dos participantes. A aplicação TIMI e o BonChat são serviços distintos.</p></details>

        <details><summary>Por que existe um código diário?</summary><p>O código foi descrito como um mecanismo de participação e acompanhamento, e não como uma ativação técnica de uma bicicleta específica. Ele incentiva o participante a entrar regularmente nos grupos, acompanhar notícias, regras, formações, eventos e outras informações do projeto.</p></details>

        <details><summary>A aplicação pode pedir outras atividades além do código?</summary><p>Foi relatado que, em determinados momentos, a aplicação pode apresentar vídeos, mensagens ou conteúdos informativos que precisam ser visualizados antes da atividade diária, especialmente quando existem comunicados importantes.</p></details>

        <details><summary>Os valores de 5, 13 e 30 USDT são garantidos?</summary><p>Não devem ser interpretados como garantia deste site. São valores diários apresentados nas informações do programa e dependem das regras, dos dias elegíveis, da realização das atividades exigidas e do cumprimento das condições da plataforma. Além disso, levantamentos estão sujeitos às taxas aplicáveis.</p></details>

        <details><summary>Existe um contrato individual em PDF?</summary><p>Segundo o relato recebido, não é normalmente fornecido um contrato individual em PDF ou por e-mail. As regras, condições e informações do programa são disponibilizadas dentro da aplicação. É recomendável ler e guardar as condições vigentes antes de participar.</p></details>
      </div>

      <div class="financial-note" style="margin-top:22px;">
        <b>Informações relatadas x documentação oficial</b>
        <span>Parte das informações desta página resulta da experiência e das orientações recebidas por participantes. Sempre que uma regra envolver valores, taxas, bloqueio, renovação, reembolso ou transferência de criptoativos, confirme-a diretamente nas condições atuais da plataforma antes de tomar uma decisão.</span>
      </div>

      <div class="cta-row" style="margin-top:20px;"><a class="btn btn-primary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Ainda tenho uma dúvida</a></div>
    </div>`;
});