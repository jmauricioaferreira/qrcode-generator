import Navigation from "@/components/navigation";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">
              Perguntas Frequentes
            </h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Perguntas Gerais
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      O QR Creator é realmente gratuito?
                    </h3>
                    <p className="text-textSecondary">
                      Sim! O QR Creator é 100% gratuito e sempre será. Não
                      cobramos nada pelo uso da ferramenta, não há limitações de
                      quantidade de QR Codes gerados e não é necessário fazer
                      cadastro.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Preciso me cadastrar para usar?
                    </h3>
                    <p className="text-textSecondary">
                      Não! Você pode usar o QR Creator imediatamente sem
                      necessidade de cadastro, login ou criação de conta. Basta
                      acessar o site e começar a criar seus QR Codes.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Meus dados são seguros?
                    </h3>
                    <p className="text-textSecondary">
                      Absolutamente! Todo o processamento é feito localmente no
                      seu navegador. Não armazenamos nenhum dos seus dados ou QR
                      Codes gerados. Sua privacidade é nossa prioridade.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Quantos QR Codes posso gerar?
                    </h3>
                    <p className="text-textSecondary">
                      Não há limite! Você pode gerar quantos QR Codes quiser,
                      quando quiser. Nossa ferramenta não possui restrições de
                      uso.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Sobre QR Codes
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      O que é um QR Code?
                    </h3>
                    <p className="text-textSecondary">
                      QR Code (Quick Response Code) é um código de barras
                      bidimensional que pode armazenar informações como URLs,
                      textos, contatos e muito mais. Pode ser lido por
                      smartphones e outros dispositivos com câmera.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Como escaneio um QR Code?
                    </h3>
                    <p className="text-textSecondary">
                      A maioria dos smartphones modernos tem um leitor de QR
                      Code integrado na câmera. Basta abrir a câmera e apontar
                      para o código. Alternativamente, você pode usar
                      aplicativos específicos de leitura de QR Code.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      QR Codes têm data de validade?
                    </h3>
                    <p className="text-textSecondary">
                      QR Codes em si não expiram, mas o conteúdo pode. Por
                      exemplo, se você criar um QR Code para uma URL que depois
                      é removida, o código ainda funcionará, mas levará a uma
                      página de erro. Links permanecem válidos enquanto o
                      destino existir.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Posso personalizar a aparência do QR Code?
                    </h3>
                    <p className="text-textSecondary">
                      Sim! No QR Creator você pode personalizar a cor do QR Code
                      e escolher entre diferentes tamanhos. Isso ajuda a
                      combinar com sua marca ou preferências visuais.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Tipos de QR Code
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Como funciona o QR Code para WhatsApp?
                    </h3>
                    <p className="text-textSecondary">
                      O QR Code para WhatsApp contém um link especial que,
                      quando escaneado, abre automaticamente o WhatsApp com o
                      número pré-preenchido. O usuário só precisa clicar em
                      "Enviar" para iniciar a conversa.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Como funciona o QR Code para Wi-Fi?
                    </h3>
                    <p className="text-textSecondary">
                      Quando alguém escaneia um QR Code de Wi-Fi, o smartphone
                      automaticamente detecta a rede e solicita a senha. O
                      usuário só precisa confirmar para conectar à rede Wi-Fi.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Posso usar QR Code para texto livre?
                    </h3>
                    <p className="text-textSecondary">
                      Sim! QR Codes de texto são ideais para compartilhar
                      informações, mensagens, instruções ou qualquer conteúdo
                      textual. Quando escaneado, o texto aparece diretamente na
                      tela do dispositivo.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Qual o limite de caracteres em um QR Code?
                    </h3>
                    <p className="text-textSecondary">
                      QR Codes podem armazenar até 4.296 caracteres
                      alfanuméricos ou 7.089 caracteres numéricos. Para a
                      maioria dos usos práticos, esse limite é mais que
                      suficiente.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Problemas Técnicos
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      O QR Code não está sendo gerado. O que fazer?
                    </h3>
                    <p className="text-textSecondary">
                      Verifique se você preencheu o campo de conteúdo e clicou
                      em "Gerar QR Code". Se o problema persistir, tente
                      atualizar a página ou usar um navegador diferente.
                      Certifique-se de que o JavaScript está habilitado.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      O download do PNG não está funcionando. Como resolver?
                    </h3>
                    <p className="text-textSecondary">
                      Primeiro, certifique-se de que gerou um QR Code válido. Se
                      o problema persistir, verifique se seu navegador permite
                      downloads e se não há bloqueadores de pop-up ativos. Tente
                      usar um navegador diferente se necessário.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      O QR Code não está sendo lido pelo celular. Por quê?
                    </h3>
                    <p className="text-textSecondary">
                      Verifique se o QR Code está nítido e bem iluminado. Evite
                      reflexos e sombras. Se o problema persistir, tente
                      aumentar o tamanho do QR Code ou verificar se o conteúdo
                      está correto.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      A ferramenta está lenta. O que pode ser?
                    </h3>
                    <p className="text-textSecondary">
                      A performance pode variar dependendo do seu dispositivo e
                      conexão. Para melhor experiência, use um navegador
                      atualizado e evite muitos programas abertos
                      simultaneamente.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Casos de Uso
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Posso usar QR Codes em materiais impressos?
                    </h3>
                    <p className="text-textSecondary">
                      Sim! QR Codes são ideais para materiais impressos como
                      cartões de visita, flyers, banners e embalagens.
                      Certifique-se de usar um tamanho adequado para a impressão
                      e teste antes de imprimir em grande quantidade.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Como usar QR Codes em redes sociais?
                    </h3>
                    <p className="text-textSecondary">
                      QR Codes podem ser usados em posts, stories e perfis das
                      redes sociais para direcionar seguidores para links
                      externos, contatos ou informações adicionais. É uma forma
                      eficaz de engajamento.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      QR Codes funcionam em eventos?
                    </h3>
                    <p className="text-textSecondary">
                      Perfeitamente! QR Codes são muito populares em eventos
                      para compartilhar informações, contatos, Wi-Fi, programas
                      e muito mais. São práticos e profissionais.
                    </p>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Ainda tem dúvidas?
                </h2>
                <p className="text-textSecondary mb-6">
                  Se não encontrou a resposta que procurava, entre em contato
                  conosco ou consulte nossa página "Como Usar" para mais
                  detalhes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/como-usar"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Como Usar
                  </a>
                  <Link
                    href="/"
                    className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    Criar QR Code
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
