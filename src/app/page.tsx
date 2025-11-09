import QRGeneratorPage from "@/components/qr-tabs";
import { Logo } from "@/components/images/logo";
import Navigation from "@/components/navigation";
import Al5smBanner from "@/components/al5smBanner";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background flex flex-col">
        <header className="flex w-full h-fit items-center justify-center header-background p-4">
          <div className="flex flex-col sm:flex-row sm:gap-8 items-center justify-center">
            <Logo />
            <h1 className="text-center text-lg sm:text-2xl lg:text-3xl font-bold text-white">
              QR Creator - Gerador da Meu QR Code
            </h1>
          </div>
        </header>
        <main className="flex-1 flex flex-col lg:flex-row gap-8 p-4 sm:p-8 lg:p-20 items-stretch">
          <section className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:max-w-1/4 gap-4 lg:gap-6 lg:h-[26rem] self-stretch">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              Conecte-se e Compartilhe em Segundos. Crie Seus QR Codes
              Personalizados Rapidamente!
            </h2>
            <p className="text-sm sm:text-base text-textSecondary max-w-md">
              Ágil, Seguro e com Opções Ilimitadas de Personalização. Teste{" "}
              Gratuitamente!
            </p>
            <div className="hidden lg:block">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Recursos Principais:
              </h3>
              <ul className="text-sm text-textSecondary space-y-2">
                <li>• Gerador de QR Code para URLs</li>
                <li>• QR Code para WhatsApp</li>
                <li>• QR Code para Wi-Fi</li>
                <li>• QR Code para texto livre</li>
                <li>• Personalização de cores e tamanhos</li>
                <li>• Download em alta qualidade PNG</li>
                <li>• Interface intuitiva e responsiva</li>
              </ul>
            </div>
          </section>
          <section
            className="flex-1 flex justify-center lg:h-[26rem]"
            aria-label="Gerador de QR Code"
          >
            <QRGeneratorPage />
          </section>
        </main>

        {/* Banner externo (substitui o AdSense) - tamanho contido */}
        <section className="py-6 flex justify-center">
          <Al5smBanner style={{ width: 300, minHeight: 250 }} />
        </section>

        {/* Seção de conteúdo adicional para SEO */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Por que Escolher o QR Creator?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Rápido e Fácil
                  </h3>
                  <p className="text-textSecondary">
                    Crie QR Codes em segundos com nossa interface intuitiva. Sem
                    complicações, sem cadastro necessário.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Personalização Total
                  </h3>
                  <p className="text-textSecondary">
                    Escolha cores, tamanhos e formatos. Torne seus QR Codes
                    únicos e alinhados com sua marca.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    100% Seguro
                  </h3>
                  <p className="text-textSecondary">
                    Seus dados são processados localmente. Não armazenamos
                    informações pessoais ou QR Codes gerados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de casos de uso */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Casos de Uso Populares
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    🏢 Para Empresas
                  </h3>
                  <ul className="text-textSecondary space-y-2">
                    <li>• Menus digitais em restaurantes</li>
                    <li>• Links para redes sociais</li>
                    <li>• Compartilhamento de Wi-Fi</li>
                    <li>• Contatos e informações</li>
                    <li>• Promoções e ofertas</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    👤 Para Pessoas
                  </h3>
                  <ul className="text-textSecondary space-y-2">
                    <li>• Compartilhamento de contatos</li>
                    <li>• Links para redes sociais</li>
                    <li>• Informações de contato</li>
                    <li>• Textos e mensagens</li>
                    <li>• Eventos e convites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">QR Creator</h3>
              <p className="text-gray-300 mb-4">
                A ferramenta mais completa para criar QR Codes personalizados
                gratuitamente.
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <a
                  href="/sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="/como-usar"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Como Usar
                </a>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                © 2024 QR Creator. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
