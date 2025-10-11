import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como Usar o QR Creator - Tutorial Completo",
  description:
    "Aprenda como usar o QR Creator passo a passo. Tutorial completo para criar QR Codes personalizados de forma fácil e rápida.",
  keywords:
    "como usar qr creator, tutorial qr code, guia qr code, instruções qr creator",
};

export default function ComoUsar() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">
              Como Usar o QR Creator
            </h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Tutorial Passo a Passo
                </h2>
                <p className="text-textSecondary mb-6">
                  Siga este guia simples para criar seus QR Codes personalizados
                  em poucos minutos.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  1. Escolha o Tipo de QR Code
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <p className="text-textSecondary mb-4">
                    Na página principal, você encontrará 4 abas diferentes para
                    escolher o tipo de conteúdo:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">
                        🌐 URL
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Para links de sites, páginas web, vídeos do YouTube,
                        etc.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">
                        📱 WhatsApp
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Para contato direto via WhatsApp com número de telefone.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">
                        📝 Texto
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Para qualquer texto livre, mensagens, informações, etc.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">
                        📶 Wi-Fi
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Para compartilhar senha de rede Wi-Fi automaticamente.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  2. Digite o Conteúdo
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-textSecondary mb-4">
                    Após escolher o tipo, digite o conteúdo correspondente:
                  </p>
                  <ul className="list-disc list-inside text-textSecondary space-y-2">
                    <li>
                      <strong>URL:</strong> Cole ou digite o link completo (ex:
                      https://exemplo.com)
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> Digite o número com código do
                      país (ex: 5511999999999)
                    </li>
                    <li>
                      <strong>Texto:</strong> Digite qualquer texto que deseja
                      compartilhar
                    </li>
                    <li>
                      <strong>Wi-Fi:</strong> Digite a senha da rede Wi-Fi
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  3. Personalize o QR Code
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Tamanho
                  </h3>
                  <p className="text-textSecondary mb-4">
                    Escolha entre três tamanhos disponíveis:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-primary mx-auto mb-2 rounded"></div>
                      <p className="text-sm font-semibold">Pequeno (110px)</p>
                      <p className="text-xs text-textSecondary">
                        Para uso em documentos
                      </p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-primary mx-auto mb-2 rounded"></div>
                      <p className="text-sm font-semibold">Médio (180px)</p>
                      <p className="text-xs text-textSecondary">Uso geral</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 bg-primary mx-auto mb-2 rounded"></div>
                      <p className="text-sm font-semibold">Grande (250px)</p>
                      <p className="text-xs text-textSecondary">
                        Para impressão
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Cores
                  </h3>
                  <p className="text-textSecondary mb-4">
                    Personalize a cor do QR Code:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-[#1d1c52] mx-auto mb-2 rounded"></div>
                      <p className="text-sm font-semibold">Primária</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-[#28f064] mx-auto mb-2 rounded"></div>
                      <p className="text-sm font-semibold">Acento</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-[#3b82f6] mx-auto mb-2 rounded"></div>
                      <p className="text-sm font-semibold">Texto</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  4. Gere e Baixe
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ol className="list-decimal list-inside text-textSecondary space-y-3">
                    <li>
                      Clique no botão <strong>&quot;Gerar QR Code&quot;</strong>
                    </li>
                    <li>Visualize o QR Code gerado na área de preview</li>
                    <li>
                      Clique em <strong>&quot;Baixar PNG&quot;</strong> para
                      salvar em seu dispositivo
                    </li>
                    <li>O arquivo será salvo automaticamente com nome único</li>
                  </ol>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Dicas e Truques
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      💡 Dicas de Uso
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary space-y-2">
                      <li>Teste sempre o QR Code antes de imprimir</li>
                      <li>Use URLs curtas para melhor legibilidade</li>
                      <li>Mantenha o contraste entre cor e fundo</li>
                      <li>
                        Evite códigos muito complexos em tamanhos pequenos
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      ⚠️ Cuidados
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary space-y-2">
                      <li>Verifique se o link está funcionando</li>
                      <li>Teste em diferentes dispositivos</li>
                      <li>Mantenha backup dos QR Codes importantes</li>
                      <li>Use senhas seguras para Wi-Fi</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Casos de Uso Práticos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      🏢 Para Empresas
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary space-y-2">
                      <li>Menus digitais em restaurantes</li>
                      <li>Links para redes sociais</li>
                      <li>Compartilhamento de Wi-Fi</li>
                      <li>Contatos e informações</li>
                      <li>Promoções e ofertas</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      👤 Para Pessoas
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary space-y-2">
                      <li>Compartilhamento de contatos</li>
                      <li>Links para redes sociais</li>
                      <li>Informações de contato</li>
                      <li>Textos e mensagens</li>
                      <li>Eventos e convites</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Pronto para Começar?
                </h2>
                <p className="text-textSecondary mb-6">
                  Agora que você sabe como usar, crie seu primeiro QR Code
                  personalizado!
                </p>
                <Link
                  href="/"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Criar QR Code Agora
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
