document.addEventListener('DOMContentLoaded', () => {
  const withdrawals = document.querySelector('#levantamentos');
  if (!withdrawals || document.querySelector('#participar')) return;

  const config = window.TIMI_CONFIG || {};
  const affiliateUrl = config.affiliateUrl && config.affiliateUrl !== '#'
    ? config.affiliateUrl
    : 'https://timihqs.com/#/pages/login/registerView?code=d3of54';
  const telegramUrl = config.telegramUrl && config.telegramUrl !== '#'
    ? config.telegramUrl
    : 'https://t.me/TIMIPortugalBot';

  const section = document.createElement('section');
  section.className = 'section participation-section';
  section.id = 'participar';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>07</span><h2>Como participar</h2></div>
      <p class="lead section-lead">Para ativar uma modalidade, o procedimento relatado utiliza uma plataforma de criptoativos como intermediária entre euros e o saldo utilizado na TIMI. Antes de transferir qualquer valor, confirme todos os dados diretamente nas aplicações envolvidas.</p>

      <div style="margin-top:24px;padding:24px;border-radius:22px;background:#f5f9ef;border:1px solid #dfe8d3;">
        <strong style="display:block;font-size:18px;margin-bottom:16px;">Fluxo apresentado</strong>
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:13px;line-height:1.4;">
          <span style="padding:11px 15px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>1. EUR</b><br><small>valor em euros</small></span>
          <b>→</b>
          <span style="padding:11px 15px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>2. OKX</b><br><small>entrada de fundos</small></span>
          <b>→</b>
          <span style="padding:11px 15px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>3. USDT / USDC</b><br><small>conversão</small></span>
          <b>→</b>
          <span style="padding:11px 15px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>4. Polygon</b><br><small>rede de transferência*</small></span>
          <b>→</b>
          <span style="padding:11px 15px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>5. TIMI</b><br><small>saldo na plataforma</small></span>
          <b>→</b>
          <span style="padding:11px 15px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>6. Modalidade</b><br><small>T2, T3 ou T4</small></span>
        </div>
      </div>

      <div class="steps premium-steps" style="margin-top:22px;">
        <article><div class="step-number">01</div><div class="step-icon">🏦</div><h3>Preparar os fundos</h3><p>Depositar ou transferir euros para uma conta própria numa plataforma compatível, como a OKX, seguindo os procedimentos e verificações exigidos pelo serviço.</p></article>
        <article><div class="step-number">02</div><div class="step-icon">💱</div><h3>Converter</h3><p>Converter o valor necessário para o criptoativo suportado no procedimento. As informações recebidas mencionam USDT ou USDC.</p></article>
        <article><div class="step-number">03</div><div class="step-icon">🔗</div><h3>Transferir</h3><p>Utilizar os dados de depósito fornecidos pela TIMI e selecionar exatamente a moeda e a rede indicadas pela plataforma.</p></article>
        <article><div class="step-number">04</div><div class="step-icon">🚲</div><h3>Ativar a modalidade</h3><p>Depois da confirmação do saldo na TIMI, selecionar a modalidade pretendida e confirmar as condições antes da ativação.</p></article>
      </div>

      <div class="financial-note" style="margin-top:20px;">
        <b>⚠ Atenção especial à rede e ao endereço</b>
        <span>Uma transferência de criptoativos enviada para uma rede ou endereço incompatível pode não ser recuperável. Não copie endereços ou dados de transferência deste site: utilize sempre os dados apresentados diretamente na sua própria conta TIMI e confirme moeda, rede, endereço e valor antes de enviar.</span>
      </div>

      <div style="margin-top:18px;padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;">
        <strong style="display:block;margin-bottom:7px;">USDT, USDC e Polygon</strong>
        <span style="font-size:12px;line-height:1.6;color:#687263;">USDT (Tether) e USDC (USD Coin) são criptoativos diferentes. Polygon é uma rede blockchain utilizada para transferências. A moeda e a rede precisam corresponder exatamente ao que estiver indicado pela plataforma no momento da operação. Taxas e condições externas da OKX ou da rede também podem aplicar-se.</span>
      </div>

      <div class="cta-row" style="margin-top:20px;">
        <a class="btn btn-primary" href="${affiliateUrl}" target="_blank" rel="noopener noreferrer">Abrir plataforma TIMI</a>
        <a class="btn btn-secondary" href="${telegramUrl}" target="_blank" rel="noopener noreferrer">💬 Tirar dúvidas no Telegram</a>
      </div>

      <p style="margin-top:14px;color:#78806f;font-size:11px;line-height:1.55;">Este é um resumo do procedimento relatado e não substitui as instruções atuais das plataformas. Serviços de criptoativos envolvem riscos operacionais e podem aplicar taxas, verificações e limites próprios.</p>
    </div>`;

  withdrawals.insertAdjacentElement('afterend', section);
});