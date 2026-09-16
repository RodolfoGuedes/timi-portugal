document.addEventListener('DOMContentLoaded', () => {
  const config = window.TIMI_CONFIG || {};
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    if (config.affiliateUrl && config.affiliateUrl !== '#') link.href = config.affiliateUrl;
  });
  document.querySelectorAll('[data-telegram]').forEach(link => {
    if (config.telegramUrl && config.telegramUrl !== '#') link.href = config.telegramUrl;
  });
});
