import { GlassCard } from "../containers/GlassCard";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";

function classNames(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const tiers = [
  {
    name: "Basico",
    id: "tier-hobby",
    href: "#contacto",
    priceMonthly: "$15.000",
    description: "El plan perfecto para pequeñas organizaciones",
    features: [
      "Hasta 3 operadores",
      "Hasta 15 profesionales",
      "Backups semanales",
      "Soporte 24/7",
    ],
    featured: false,
  },
  {
    name: "Premium",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$45.200",
    description: "Ideal para organizaciones grandes y en expansión.",
    features: [
      "Hasta 10 operadores",
      "Hasta 30 profesionales",
      "Backups semanales",
      "Soporte 24/7",
      "Soluciones personalizadas",
      "Soporte dedicado iterativo",
    ],
    featured: true,
  },
];

export function Planes() {
  return (
    <GlassCard>
      <div className="py-18 sm:py-20" id="planes">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Planes</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
            Elegi el plan perfecto que se adapte a tu organizacion y necesidades
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-foreground sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-white/10 backdrop-blur-md border border-white/20 md:rounded-xl p-6 shadow-lg  mt-5 text-foreground left-1/2 -translate-x-1/2"
                  : "bg-white/10 backdrop-blur-md border border-white/20 md:rounded-xl p-6 shadow-lg  mt-5 text-foreground",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-white/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-400",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-foreground" : "text-foreground",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-foreground" : "text-foreground",
                    "text-base"
                  )}
                >
                  /mes
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-foreground" : "text-foreground",
                  "mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-foreground" : "text-foreground",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-400",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-x-4 mt-8">
                <Button
                  asChild
                  variant="disrruptive"
                  size="lg"
                  className="mx-auto"
                >
                  <a href="#contacto">Comenzar</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
