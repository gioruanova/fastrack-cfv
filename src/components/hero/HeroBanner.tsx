import { Button } from "../ui/button";
import { ShapeLeft, ShapeRight } from "../ui/shape";

export function HeroBanner() {
  return (
    <div id="backToTop" className="pt-20 md:pt-0">
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <ShapeLeft />
        <div className="mx-auto max-w-2xl pb-25 sm:py-48 lg:py-45">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-foreground ring-1 ring-white/10 hover:ring-white/20">
              <span className="mr-1.5">Desarrollamos para un mundo real.</span>
              <a href="#nosotros" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0 m"></span>
                Conocé nuestra Vision <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl italic">
              <div>
                <span className="extra-bold mr-1">Fast</span>
                <span className="font-extralight">Track</span>
              </div>
              <p className="mt-6 text-5xl font-light not-italic text-pretty">
                Gestionamos tus necesidades y objetivos
              </p>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-foreground sm:text-xl/8">
              Fast Track transforma desafíos reales en soluciones inteligentes,
              adaptándose y evolucionando junto a vos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="disrruptive" size="lg">
                <a href="#planes">Comenzá Hoy</a>
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
        <ShapeRight />
      </div>
    </div>
  );
}
