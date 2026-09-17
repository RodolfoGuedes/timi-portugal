const WEBHOOK_URL = 'https://timi-portugal.vercel.app/api/telegram';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return res.status(500).json({ ok: false, error: 'TELEGRAM_BOT_TOKEN is not configured' });
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        allowed_updates: ['message', 'callback_query'],
        drop_pending_updates: true
      })
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
      return res.status(502).json({ ok: false, telegram: data });
    }

    return res.status(200).json({
      ok: true,
      message: 'Telegram webhook configured successfully',
      webhook: WEBHOOK_URL
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error?.message || 'Unknown error' });
  }
}
