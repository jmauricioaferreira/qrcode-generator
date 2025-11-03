/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://meuqrcode.online", // seu domínio
  generateRobotsTxt: true, // gera robots.txt automaticamente
  changefreq: "weekly", // frequência esperada de atualização
  priority: 0.8, // prioridade média das páginas
  sitemapSize: 5000,
  exclude: ["/404"], // opcional — evita páginas de erro
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
