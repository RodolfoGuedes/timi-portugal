document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#ciclo');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="cycle-intro">
        <div class="section-heading"><span>05</span><h2>O ciclo de 365 dias</h2></div>
        <p class="lead">Segundo as condições apresentadas aos participantes, cada modalidade tem duração de 365 dias. Ao concluir esse período, o participante pode decidir entre continuar por mais um ciclo ou encerrar a participação, conforme as regras vigentes da plataforma.</p>
      </div>

      <div class="cycle-flow">
        <div class="cycle-start"><span>DURAÇÃO</span><strong>365</strong><small>DIAS</small></div>
        <div class="cycle-arrow">→</div>
        <div class="cycle-choice">
          <div><b>🔄 CONTINUAR</b><span>Segundo as condições apresentadas, a renovação para um novo ciclo de 365 dias corresponde a 50% do valor original da modalidade.</span></div>
          <div><b>↪ ENCERRAR</b><span>Segundo as condições apresentadas, ao concluir normalmente o ciclo e optar por não renovar, está previsto um reembolso correspondente a 50% do valor original da modalidade.</span></div>
        </div>
      </div>

      <div class="example-card">
        <span>EXEMPLO — MODALIDADE T4</span>
        <strong>Valor original: 1.300 USDT</strong>
        <div><b>Renovar por mais 365 dias</b><em>650 USDT*</em></div>
        <div><b>Encerrar após o ciclo</b><em>650 USDT*</em></div>
        <small>*Exemplo baseado na regra de 50% que foi apresentada aos participantes. Deve ser confirmado nas condições vigentes da plataforma no momento da renovação ou encerramento.</small>
      </div>

      <div style="margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;">
        <div style="padding:18px;border-radius:18px;background:#f5f9ef;border:1px solid #dfe8d3;"><strong style="display:block;margin-bottom:6px;">⏳ E se quiser sair antes?</strong><span style="font-size:12px;line-height:1.55;color:#697365;">Pelas informações atualmente recebidas, não existe um mecanismo normal de cancelamento com reembolso antecipado do valor da modalidade antes do fim dos 365 dias.</span></div>
        <div style="padding:18px;border-radius:18px;background:#f5f9ef;border:1px solid #dfe8d3;"><strong style="display:block;margin-bottom:6px;">📋 As regras podem ser consultadas?</strong><span style="font-size:12px;line-height:1.55;color:#697365;">As condições e informações do programa são disponibilizadas dentro da aplicação. Antes de participar, é importante consultar as regras vigentes diretamente na plataforma.</span></div>
      </div>

      <div class="financial-note" style="margin-top:18px;">
        <b>Informação importante</b>
        <span>O reembolso de 50% no encerramento e a renovação por 50% são condições apresentadas para o final normal do ciclo de 365 dias. Esta página não oferece garantia independente de pagamento ou reembolso; prevalecem as condições vigentes da plataforma.</span>
      </div>
    </div>`;
});