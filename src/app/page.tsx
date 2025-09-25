import QRGeneratorPage from "@/components/qr-tabs";
import { Logo } from "@/components/images/logo";
import Adsense from "@/components/adSense";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex w-full h-fit items-center justify-center header-background p-4">
          <div className="flex flex-col  sm:flex-row  sm:gap-8 items-center justify-center">
            <Logo />
            <h1 className="text-center text-lg sm:text-2xl lg:text-3xl font-bold text-white">
              QR Creator - Gerador de QR Code
            </h1>
          </div>
        </div>
        <main className="flex-1 flex flex-col lg:flex-row gap-8 p-4 sm:p-8 lg:p-20 items-stretch">
          <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:max-w-1/4 gap-4 lg:gap-6 lg:h-[26rem] self-stretch">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              Conecte-se e Compartilhe em Segundos. Crie Seus QR Codes
              Personalizados Rapidamente!
            </h1>
            <p className="text-sm sm:text-base text-textSecondary max-w-md">
              Ágil, Seguro e com Opções Ilimitadas de Personalização. Teste{" "}
              Gratuitamente!
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:h-[26rem]">
            <QRGeneratorPage />
          </div>
        </main>
        <footer className="flex gap-[24px] flex-wrap items-center justify-center min-h-[10rem] w-full">
          <Adsense />
        </footer>
      </div>
    </>
  );
}
