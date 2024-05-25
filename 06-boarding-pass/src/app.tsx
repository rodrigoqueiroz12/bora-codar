import { Plane } from 'lucide-react'

import { env } from './lib/env'
import { generateQrCodeUrl } from './utils/generate-qr-code-url'

export default function App() {
  const qrCodeUrl = generateQrCodeUrl({
    data: env.VITE_LINKEDIN_PROFILE_URL,
  })

  return (
    <main className="h-[100dvh] gap-5 flex items-center justify-center flex-col">
      <h1 className="font-medium text-xl">Cartão de Embarque</h1>

      <section className="max-w-80 text-center space-y-5">
        <div className="text-zinc-900 divide-y divide-dashed divide-zinc-900/20">
          <div className="bg-zinc-50 px-8 py-6 rounded-3xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-70">Voo</span>
                <span className="font-medium">RS995</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm opacity-70">Data</span>
                <span className="font-medium">23/05/2023</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-70">São Paulo, Brasil</span>
                <span className="text-sm opacity-70">São Francisco, EUA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[2.5rem] font-medium leading-tight">
                  GRU
                </span>
                <Plane strokeWidth={1} className="fill-zinc-900" />
                <span className="text-[2.5rem] font-medium leading-tight">
                  SFO
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-80">17:00</span>
                <span className="flex items-start opacity-80">
                  04:48<span className="text-[0.625rem]">+1</span>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 px-8 py-6 rounded-3xl flex items-center justify-between">
            <div className="flex flex-col items-start">
              <span className="text-sm opacity-70">Passageiro</span>
              <span className="font-medium">Rodrigo Queiroz</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm opacity-70">Assento</span>
              <span className="font-medium">28A</span>
            </div>
          </div>
          <div className="bg-zinc-50 px-8 py-6 rounded-3xl space-y-6">
            <div className="flex justify-between items-center">
              <div className="space-y-4">
                <div className="flex flex-col items-start gap-[2px]">
                  <span className="text-sm opacity-70">Embarque</span>
                  <span className="bg-[#633BBC] px-2 py-1 rounded-lg text-zinc-50">
                    16:15
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm opacity-70">Terminal</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm opacity-70">Portão</span>
                  <span className="font-medium">15</span>
                </div>
              </div>

              <div className="">
                <img src={qrCodeUrl} alt="" className="size-40" />
                <span className="text-sm opacity-70">Grupo de embarque: 3</span>
              </div>
            </div>

            <div className="opacity-80">
              <span className="font-medium">Atenção</span>: o portão fecha 16:45
            </div>
          </div>
        </div>
        <div className="text-sm font-normal leading-[24px] opacity-70">
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </div>
      </section>
    </main>
  )
}
