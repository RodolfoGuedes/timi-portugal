document.addEventListener('DOMContentLoaded', () => {
  const config = window.TIMI_CONFIG;
  const current = location.pathname.split('/').pop() || 'index.html';
  const links = [['index.html','Início'],['projeto.html','O Projeto'],['como-funciona.html','Como funciona'],['modalidades.html','Modalidades'],['comunidade.html','Comunidade'],['faq.html','Dúvidas']];

  const header = document.querySelector('[data-header]');
  if (header) header.innerHTML = `<div class="container nav"><a class="brand" href="index.html" aria-label="TIMI Portugal"><span>◉</span>TIMI</a><button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><i></i><i></i><i></i></button><nav class="nav-links" aria-label="Navegação principal">${links.map(([url,label]) => `<a href="${url}"${current === url ? ' class="active"' : ''}>${label}</a>`).join('')}<a class="nav-cta" data-affiliate>Participar</a></nav></div>`;

  const footer = document.querySelector('[data-footer]');
  if (footer) footer.innerHTML = `<div class="container footer-grid"><div><a class="brand" href="index.html"><span>◉</span>TIMI</a><p>Mobilidade, tecnologia e comunidade em Portugal.</p></div><div><b>Explorar</b>${links.slice(1).map(([url,label]) => `<a href="${url}">${label}</a>`).join('')}</div><div><b>Conectar</b><a data-telegram>Telegram</a><a href="${config.instagramUrl}" target="_blank" rel="noopener">Instagram</a></div><div><b>Começar</b><a class="footer-button" data-affiliate>Criar conta →</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} TIMI Portugal</span><span>Site informativo da comunidade TIMI Portugal.</span></div>`;

  document.querySelectorAll('[data-affiliate]').forEach(a => {
    a.href = config.affiliateUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    a.addEventListener('click', () => {
      if (typeof window.fbq === 'function') {
        fbq('track', 'Lead', {
          content_name: 'TIMI Platform Outbound Click'
        });
      }
    });
  });

  document.querySelectorAll('[data-telegram]').forEach(a => {
    a.href = config.telegramUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
  });

  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }), {threshold: .12});

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
