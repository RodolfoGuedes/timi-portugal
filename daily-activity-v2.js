document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#como-funciona');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>02</span><h2>Como funciona no dia a dia?</h2></div>
      <p class="lead section-lead">A participação não é totalmente passiva. Nos dias elegíveis, o participante precisa acompanhar os canais de comunicação, obter o código diário e inseri-lo na aplicação dentro de uma das janelas disponíveis.</p>

      <div id="video-funcionamento" class="timi-daily-video" style="margin:28px auto 34px;max-width:390px;text-align:center">
        <div style="position:relative;width:100%;aspect-ratio:9/16;overflow:hidden;border-radius:20px;background:#102010;box-shadow:0 12px 30px rgba(20,45,10,.15)">
          <iframe src="https://www.youtube-nocookie.com/embed/xehlUP11U7I" title="Vídeo TIMI: como funciona a atividade diária" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <a href="https://www.youtube.com/shorts/xehlUP11U7I" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:12px;color:#287400;font-weight:700">Ver vídeo no YouTube ↗</a>
      </div>

      <div class="steps premium-steps">
        <article><div class="step-number">01</div><div class="step-icon">💬</div><h3>Acompanhe o grupo</h3><p>O código diário é divulgado nos grupos utilizados para acompanhamento e comunicação com os participantes.</p></article>
        <article><div class="step-number">02</div><div class="step-icon">🔑</div><h3>Obtenha o código</h3><p>Consulte o código disponibilizado no período correspondente. Basta realizar uma ativação válida por dia elegível.</p></article>
        <article><div class="step-number">03</div><div class="step-icon">📲</div><h3>Insira na aplicação</h3><p>Entre na aplicação TIMI e introduza o código dentro de uma das janelas de ativação.</p></article>
        <article><div class="step-number">04</div><div class="step-icon">✓</div><h3>Conclua a atividade</h3><p>Com a ativação concluída, a participação daquele dia fica registada conforme as regras vigentes do programa.</p></article>
      </div>

      <div class="activation-card">
        <div><span>JANELAS DE ATIVAÇÃO</span><strong>Escolha uma por dia elegível</strong></div>
        <div class="time-pill"><b>10:00–13:00</b><small>horário de Portugal</small></div>
        <div class="or">ou</div>
        <div class="time-pill"><b>19:00–22:00</b><small>horário de Portugal</small></div>
        <div class="activation-note">Se utilizar o código na primeira janela, não é necessário utilizá-lo novamente à noite.</div>
      </div>

      <div style="margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;">
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">📅 Quando ocorre?</strong><span style="font-size:12px;line-height:1.5;color:#687263;">Segundo as informações apresentadas, as ativações e valores diários aplicam-se aos dias úteis elegíveis, excluindo sábados, domingos e feriados nacionais.</span></div>
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">⏰ E se perder os dois horários?</strong><span style="font-size:12px;line-height:1.5;color:#687263;">Se o código não for inserido em nenhuma das duas janelas, o valor correspondente àquele dia não é recuperado posteriormente.</span></div>
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">📢 Por que acompanhar os grupos?</strong><span style="font-size:12px;line-height:1.5;color:#687263;">Além do código, os grupos são utilizados para comunicados, formações, eventos, novidades e informações relevantes sobre o projeto.</span></div>
      </div>

      <div class="financial-note" style="margin-top:18px;">
        <b>Participação e presença</b>
        <span>As informações recebidas indicam que o participante deve manter-se ativo e acompanhar as comunicações do projeto. Ausências prolongadas podem estar sujeitas às regras e medidas previstas pela plataforma. Os detalhes dessas situações serão apresentados na área de regras e dúvidas frequentes.</span>
      </div>
    </div>`;
});