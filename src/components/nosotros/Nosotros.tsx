import { GlassCard } from "../containers/GlassCard";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  EyeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Agilidad",
    description:
      "Nuestra metodología ágil impulsa la innovación constante, optimizando cada etapa del desarrollo para ofrecer soluciones más efectivas en menos tiempo.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Seguridad",
    description:
      "La seguridad es el núcleo de cada desarrollo. Implementamos estándares avanzados para garantizar la confidencialidad, integridad y disponibilidad de la información.",
    icon: LockClosedIcon,
  },
  {
    name: "Innovacion",
    description:
      "Impulsamos la innovación constante integrando nuevas tecnologías y metodologías que transforman ideas en soluciones reales y escalables.",
    icon: ArrowPathIcon,
  },
  {
    name: "Flexible",
    description:
      "Orientamos cada proyecto hacia los objetivos del cliente, priorizando la comunicación, la personalización y la mejora continua.”",
    icon: EyeIcon,
  },
];

export function Nosotros() {
  return (
    <GlassCard>
      <div id="nosotros" className="py-18 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              Planificamos - Creamos - Implementamos
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl lg:text-balance">
              Gestionamos soluciones acorde a sus necesidades y objetivos
            </p>

            <p className="mt-6 text-lg/8 text-foreground">
              Fast Track es un sistema integral de gestión de actividades e
              incidencias que centraliza procesos, optimiza flujos de trabajo y
              facilita la colaboración entre roles, garantizando trazabilidad y
              control en tiempo real.
            </p>

            <p className="mt-6 text-lg/8 text-foreground">
              Diseñado como un sistema iterativo e incremental, Fast Track
              evoluciona continuamente, incorporando mejoras basadas en la
              retroalimentación de sus usuarios, asegurando que cada
              actualización aporte valor real y responda a necesidades
              concretas.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-foreground">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-400">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
