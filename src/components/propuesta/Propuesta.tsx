import Image from "next/image";
import { GlassCard } from "../containers/GlassCard";
import { CodeExample } from "./CodeExample";

export function Propuesta() {
  return (
    <GlassCard>
      <div className=" py-14 sm:py-12" id="propuesta">
        <div className="mx-auto max-w-2xl lg:max-w-7xl ">
          <h2 className="text-center text-base/7 font-semibold text-indigo-400">
            Desarrollo Ágil
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Dedicacion y calidad
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Compatibilidad
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Nos enfocamos que nuestros componentes sean compatibles con todos los navegadores, sin importar la version.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                    <Image
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      className="size-full object-cover object-top"
                      width={152}
                      height={152}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Monitoreamos la performance de nuestros componentes para garantizar una experiencia fluida y fluida.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <Image
                    alt={"Nuestro Producto"}
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                    width={152}
                    height={152}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Seguridad
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Tu informacion y privacidad estan protegidos con el mejor nivel de seguridad garantizando la privacidad de tus datos.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <Image
                    alt="Seguridad y protección de datos"
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                    className="object-cover w-full h-30 max-w-full"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Vanguardia
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                    Nuestro producto es una herramienta de vanguardia que te permite gestionar tus incidencias de forma eficiente y eficaz.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-0 md:left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                    <div className="flex bg-gray-900 outline outline-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          controladorIncidencia.js
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className=" bg-gray-800 overflow-auto">
                      <CodeExample />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
