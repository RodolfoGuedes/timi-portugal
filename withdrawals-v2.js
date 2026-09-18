document.addEventListener('DOMContentLoaded', () => {
  const cycle = document.querySelector('#ciclo');
  if (!cycle || document.querySelector('#levantamentos')) return;

  const section = document.createElement('section');
  section.className = 'section withdrawals-section';
  section.id = 'levantamentos';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>06</span><h2>Levantamentos e recebimento</h2></div>
      <p class="lead section-lead">Os valores acumulados na plataforma podem ser solicitados para uma carteira/conta compatível quando o mínimo da modalidade for atingido. Segundo as informações recebidas, o processo utiliza criptoativos e existe uma taxa aplicada ao levantamento.</p>

      <div class="options-grid premium-options">
        <article class="option-card"><div class="option-ribbon">T5</div><div class="option-label">MÍNIMO PARA LEVANTAR</div><div class="option-price"><strong>—</strong><span></span></div><div class="option-copy">Consulte o mínimo de levantamento atualmente aplicável à modalidade T5.</div></article>
        <article class="option-card"><div class="option-ribbon">T3</div><div class="option-label">MÍNIMO PARA LEVANTAR</div><div class="option-price"><strong>50</strong><span>USDT</span></div><div class="option-copy">Valor mínimo indicado para solicitar um levantamento na modalidade T3.</div></article>
        <article class="option-card"><div class="option-ribbon">T4</div><div class="option-label">MÍNIMO PARA LEVANTAR</div><div class="option-price"><strong>100</strong><span>USDT</span></div><div class="option-copy">Valor mínimo indicado para solicitar um levantamento na modalidade T4.</div></article>
      </div>

      <div class="financial-note" style="margin-top:20px;">
        <b>Taxa de levantamento: 25%</b>
        <span>Segundo as condições atualmente apresentadas, cada levantamento está sujeito a uma taxa de 25%. Exemplo: numa solicitação de 100 em criptoativo, o valor líquido após uma taxa de 25% seria 75, antes de eventuais custos externos de conversão ou transferência.</span>
      </div>

      <div style="margin-top:18px;padding:22px;border-radius:20px;background:#f5f9ef;border:1px solid #dfe8d3;">
        <strong style="display:block;font-size:18px;margin-bottom:14px;">Como o valor chega ao banco?</strong>
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:13px;line-height:1.4;">
          <span style="padding:10px 14px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>TIMI</b><br><small>solicitação</small></span>
          <b>→</b>
          <span style="padding:10px 14px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>Criptoativo</b><br><small>rede Polygon*</small></span>
          <b>→</b>
          <span style="padding:10px 14px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>OKX</b><br><small>recebimento</small></span>
          <b>→</b>
          <span style="padding:10px 14px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>EUR</b><br><small>conversão</small></span>
          <b>→</b>
          <span style="padding:10px 14px;border-radius:14px;background:#fff;border:1px solid #dce5d5;"><b>Banco</b><br><small>transferência</small></span>
        </div>
        <small style="display:block;margin-top:14px;color:#727b6d;line-height:1.55;">*O procedimento relatado utiliza USDT ou USDC e a rede Polygon. Antes de qualquer transferência, moeda, rede e endereço devem ser confirmados diretamente na plataforma, pois transferências de criptoativos podem ser irreversíveis.</small>
      </div>

      <div style="margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;">
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">⏱ TIMI → OKX</strong><span style="font-size:12px;line-height:1.55;color:#687263;">Na experiência relatada, o processamento costuma levar aproximadamente 3 dias úteis. O prazo pode variar e não deve ser entendido como garantia.</span></div>
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">🏦 OKX → Banco</strong><span style="font-size:12px;line-height:1.55;color:#687263;">Depois do recebimento na OKX, o criptoativo pode ser convertido para euros e transferido para uma conta bancária compatível. O prazo depende dos serviços utilizados.</span></div>
      </div>

      <p style="margin-top:14px;color:#78806f;font-size:11px;line-height:1.55;">Os mínimos, taxas, redes e prazos acima refletem as condições/informações atualmente apresentadas e podem ser alterados. Confirme sempre os dados vigentes na aplicação antes de solicitar ou realizar uma transferência.</p>
    </div>`;

  cycle.insertAdjacentElement('afterend', section);
});