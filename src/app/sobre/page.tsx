import { Metadata } from "next";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Sobre o QR Creator - Gerador de QR Code Gratuito",
  description:
    "Conheça o QR Creator, a ferramenta mais completa para criar QR Codes personalizados. Saiba mais sobre nossa missão e recursos.",
  keywords:
    "sobre qr creator, gerador qr code, ferramenta qr code, missão qr creator",
};

export default function Sobre() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">
              Sobre o QR Creator
            </h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Nossa Missão
                </h2>
                <p className="text-textSecondary mb-4">
                  O QR Creator nasceu com a missão de democratizar o acesso à
                  tecnologia de QR Codes, oferecendo uma ferramenta gratuita,
                  intuitiva e poderosa para criar códigos QR personalizados de
                  alta qualidade.
                </p>
                <p className="text-textSecondary">
                  Acreditamos que a tecnologia deve ser acessível a todos, e por
                  isso desenvolvemos uma plataforma que permite a qualquer
                  pessoa, independentemente do conhecimento técnico, criar QR
                  Codes profissionais em segundos.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Por que Escolher o QR Creator?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      100% Gratuito
                    </h3>
                    <p className="text-textSecondary">
                      Nossa ferramenta é completamente gratuita, sem limitações
                      de uso ou necessidade de cadastro.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Fácil de Usar
                    </h3>
                    <p className="text-textSecondary">
                      Interface intuitiva que permite criar QR Codes em poucos
                      cliques, sem conhecimento técnico.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Alta Qualidade
                    </h3>
                    <p className="text-textSecondary">
                      QR Codes gerados em alta resolução, perfeitos para
                      impressão e uso profissional.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Múltiplos Tipos
                    </h3>
                    <p className="text-textSecondary">
                      Suporte para URLs, WhatsApp, Wi-Fi, texto livre e muito
                      mais.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Recursos Principais
                </h2>
                <ul className="list-disc list-inside text-textSecondary space-y-2">
                  <li>Gerador de QR Code para URLs e links</li>
                  <li>QR Code para contato WhatsApp direto</li>
                  <li>QR Code para compartilhamento de redes Wi-Fi</li>
                  <li>QR Code para texto livre e personalizado</li>
                  <li>Personalização de cores e tamanhos</li>
                  <li>Download em formato PNG de alta qualidade</li>
                  <li>Interface responsiva para desktop e mobile</li>
                  <li>Processamento instantâneo e seguro</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Tecnologia e Segurança
                </h2>
                <p className="text-textSecondary mb-4">
                  O QR Creator utiliza as mais modernas tecnologias web para
                  garantir performance, segurança e confiabilidade:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary">Privacidade</h4>
                    <p className="text-sm text-textSecondary">
                      Seus dados são processados localmente
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary">Performance</h4>
                    <p className="text-sm text-textSecondary">
                      Geração instantânea de QR Codes
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary">
                      Confiabilidade
                    </h4>
                    <p className="text-sm text-textSecondary">
                      Algoritmos testados e aprovados
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Casos de Uso
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Para Empresas
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary space-y-1">
                      <li>Menus digitais em restaurantes</li>
                      <li>Links para redes sociais</li>
                      <li>Compartilhamento de Wi-Fi</li>
                      <li>Contatos e informações</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Para Pessoas
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary space-y-1">
                      <li>Compartilhamento de contatos</li>
                      <li>Links para redes sociais</li>
                      <li>Informações de contato</li>
                      <li>Textos e mensagens</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Comece Agora
                </h2>
                <p className="text-textSecondary mb-6">
                  Não perca tempo! Crie seu primeiro QR Code personalizado em
                  segundos.
                </p>
                <a
                  href="/"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Criar QR Code Agora
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
