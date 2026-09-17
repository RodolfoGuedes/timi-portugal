document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#timi-portugal')) return;

  const faq = document.querySelector('#faq');
  const news = document.querySelector('#noticias');
  const anchor = news || faq;
  if (!anchor) return;

  const section = document.createElement('section');
  section.className = 'section portugal-section';
  section.id = 'timi-portugal';
  section.innerHTML = `
    <div class="container">
      <div class="section-heading"><span>09</span><h2>TIMI em Portugal</h2></div>
      <p class="lead section-lead">A presença física das bicicletas é uma parte importante para compreender a atividade de mobilidade apresentada pelo projeto. Existem relatos, vídeos e materiais de participantes mostrando bicicletas TIMI em Portugal, mas a disponibilidade pode variar por cidade e por momento.</p>

      <div style="margin-top:22px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">
        <div style="padding:20px;border-radius:20px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;font-size:17px;margin-bottom:7px;">📍 Lisboa</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Cidade indicada nos relatos recebidos como tendo presença de bicicletas TIMI.</span></div>
        <div style="padding:20px;border-radius:20px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;font-size:17px;margin-bottom:7px;">📍 Portimão</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Cidade indicada nos relatos recebidos como tendo presença de bicicletas TIMI.</span></div>
        <div style="padding:20px;border-radius:20px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;font-size:17px;margin-bottom:7px;">📍 Aveiro</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Cidade indicada nos relatos recebidos como tendo presença de bicicletas TIMI.</span></div>
        <div style="padding:20px;border-radius:20px;background:#f5f9ef;border:1px solid #dfe8d3;"><strong style="display:block;font-size:17px;margin-bottom:7px;">📍 Porto</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Foi comunicada uma expansão para o Porto. Como a implementação pode mudar, a disponibilidade deve ser confirmada antes de se deslocar.</span></div>
      </div>

      <div style="margin-top:22px;padding:22px;border-radius:20px;background:#f5f9ef;border:1px solid #dfe8d3;">
        <strong style="display:block;font-size:18px;margin-bottom:12px;">Como é apresentada a utilização pública?</strong>
        <div class="referral-steps"><div><b>01</b><span>Localizar uma bicicleta disponível</span></div><div><b>02</b><span>Aceder à aplicação do serviço</span></div><div><b>03</b><span>Ler o QR Code da bicicleta</span></div><div><b>04</b><span>Utilizar o serviço conforme o tarifário e as regras aplicáveis</span></div></div>
      </div>

      <div style="margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;">
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">🎥 Vídeos e visitas</strong><span style="font-size:12px;line-height:1.6;color:#687263;">Participantes têm partilhado vídeos, entrevistas e visitas a locais onde as bicicletas são apresentadas. A área de vídeos desta página reúne alguns desses materiais para consulta.</span></div>
        <div style="padding:18px;border-radius:18px;background:#fff;border:1px solid #dfe7d8;"><strong style="display:block;margin-bottom:6px;">🚲 Operação física x modalidades</strong><span style="font-size:12px;line-height:1.6;color:#687263;">A existência física de bicicletas e o funcionamento das modalidades de participação são informações diferentes. A presença das bicicletas demonstra uma atividade de mobilidade, mas não comprova, por si só, a origem, sustentabilidade ou garantia dos valores apresentados nas modalidades.</span></div>
      </div>

      <div class="financial-note" style="margin-top:20px;">
        <b>Disponibilidade em constante evolução</b>
        <span>As cidades acima refletem informações e relatos atualmente recebidos sobre a TIMI. Este site não apresenta a lista como um mapa oficial em tempo real. Antes de viajar para experimentar uma bicicleta, confirme a localização e a disponibilidade atuais através dos canais do projeto.</span>
      </div>
    </div>`;

  anchor.insertAdjacentElement('beforebegin', section);
});