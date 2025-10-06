import { Button } from "../ui/button";

export function HeroBanner() {
  return (
    <div id="backToTop" className="pt-20 md:pt-0">
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          ></div>
        </div>
        <div className="mx-auto max-w-2xl pb-25 sm:py-48 lg:py-45">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-white/10 hover:ring-white/20">
              Desarrollamos para un mundo real.{" "}
              <a href="#nosotros" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Conozca nuestra Vision <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl italic">
              <div>
                <strong>Fast</strong> <span className="extra-light">Track</span>
              </div>
              <p className="mt-6 text-5xl font-light not-italic text-pretty">
                Gestionando sus soluciones en base a sus necesidades
              </p>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-foreground sm:text-xl/8">
              Fast Track transforma desafíos reales en soluciones inteligentes,
              adaptándose y evolucionando junto a usted.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="disrruptive" size="lg">
                <a href="#planes">Comience Hoy</a>
              </Button>
              <a
                href="#propuesta"
                className="text-sm/6 font-semibold text-foreground"
              >
                Como fuinciona <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          ></div>
        </div>
      </div>
    </div>
  );
}
