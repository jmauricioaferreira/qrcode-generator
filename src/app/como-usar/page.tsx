import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como Usar o QR Creator - Tutorial Completo",
  description:
    "Aprenda como usar o QR Creator passo a passo. Tutorial completo para criar QR Codes personalizados de forma fácil e rápida.",
  keywords:
    "como usar qr creator, tutorial qr code, guia qr code, instruções qr creator, qr code url, qr code whatsapp, qr code wifi, qr code texto, qr code vcard, qr code instagram, qr code youtube, qr code pix, qr code localização, cor de fundo do qr, personalizar qr code",
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
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Escolha o Tipo de QR Code</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <p className="text-textSecondary mb-4">Você pode criar QR Codes para diferentes finalidades. Acesse diretamente cada tipo:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Link href="/qr-code-url" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">🌐 URL</h3>
                      <p className="text-sm text-textSecondary">Links para sites, páginas e recursos na web.</p>
                    </Link>
                    <Link href="/qr-code-whatsapp" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">📱 WhatsApp</h3>
                      <p className="text-sm text-textSecondary">Inicie conversas com número pré-preenchido.</p>
                    </Link>
                    <Link href="/qr-code-texto" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">📝 Texto</h3>
                      <p className="text-sm text-textSecondary">Mensagens e informações exibidas ao escanear.</p>
                    </Link>
                    <Link href="/qr-code-wifi" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">📶 Wi‑Fi</h3>
                      <p className="text-sm text-textSecondary">Compartilhe acesso à rede automaticamente.</p>
                    </Link>
                    <Link href="/qr-code-vcard" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">👤 VCard</h3>
                      <p className="text-sm text-textSecondary">Contato em formato de cartão virtual.</p>
                    </Link>
                    <Link href="/qr-code-instagram" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">📷 Instagram</h3>
                      <p className="text-sm text-textSecondary">Abra perfis ou links de conteúdo.</p>
                    </Link>
                    <Link href="/qr-code-youtube" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">▶️ YouTube</h3>
                      <p className="text-sm text-textSecondary">Direcione para vídeos ou canais.</p>
                    </Link>
                    <Link href="/qr-code-pix" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">💸 PIX</h3>
                      <p className="text-sm text-textSecondary">Chave ou payload de pagamento.</p>
                    </Link>
                    <Link href="/qr-code-localizacao" className="border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">📍 Localização</h3>
                      <p className="text-sm text-textSecondary">Geo coordenadas Lat,Lng.</p>
                    </Link>
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

                  <h3 className="text-lg font-semibold text-primary mb-3">Cores</h3>
                  <p className="text-textSecondary mb-4">Personalize duas cores: <strong>Cor do QR</strong> e <strong>Cor de Fundo</strong>. Use as paletas sugeridas ou selecione uma cor personalizada.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Cor do QR</h4>
                      <div className="flex justify-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded bg-[#000000]"></span>
                        <span className="w-6 h-6 rounded bg-[#1d1c52]"></span>
                        <span className="w-6 h-6 rounded bg-[#3b82f6]"></span>
                        <span className="w-6 h-6 rounded bg-[#28f064]"></span>
                      </div>
                      <p className="text-xs text-textSecondary">Evite baixo contraste com o fundo.</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Cor de Fundo</h4>
                      <div className="flex justify-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded bg-[#ffffff] border"></span>
                        <span className="w-6 h-6 rounded bg-[#f8fafc]"></span>
                        <span className="w-6 h-6 rounded bg-[#f1f5f9]"></span>
                        <span className="w-6 h-6 rounded bg-[#e5e7eb]"></span>
                      </div>
                      <p className="text-xs text-textSecondary">Fundo claro melhora a leitura.</p>
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
                      <li>Mantenha alto contraste entre cor e fundo</li>
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
                      <li>Use senhas seguras para Wi‑Fi</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Links Rápidos</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/qr-code-url" className="border border-gray-200 p-4 rounded-lg">QR Code para URL</Link>
                  <Link href="/qr-code-whatsapp" className="border border-gray-200 p-4 rounded-lg">QR Code para WhatsApp</Link>
                  <Link href="/qr-code-texto" className="border border-gray-200 p-4 rounded-lg">QR Code para Texto</Link>
                  <Link href="/qr-code-wifi" className="border border-gray-200 p-4 rounded-lg">QR Code para Wi‑Fi</Link>
                  <Link href="/qr-code-vcard" className="border border-gray-200 p-4 rounded-lg">QR Code para VCard</Link>
                  <Link href="/qr-code-instagram" className="border border-gray-200 p-4 rounded-lg">QR Code para Instagram</Link>
                  <Link href="/qr-code-youtube" className="border border-gray-200 p-4 rounded-lg">QR Code para YouTube</Link>
                  <Link href="/qr-code-pix" className="border border-gray-200 p-4 rounded-lg">QR Code para PIX</Link>
                  <Link href="/qr-code-localizacao" className="border border-gray-200 p-4 rounded-lg">QR Code para Localização</Link>
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
