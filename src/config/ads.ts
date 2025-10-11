// Configurações de anúncios
export const adConfig = {
  // Google AdSense
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-1113577441435329",
  slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT || "2960169125",
  format: process.env.NEXT_PUBLIC_ADSENSE_FORMAT || "auto",

  // Google Site Verification
  googleVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    "seu-codigo-verificacao-google",
};
