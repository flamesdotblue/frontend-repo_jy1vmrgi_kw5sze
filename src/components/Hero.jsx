import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white">
      {/* subtle gradient blob */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-100 to-blue-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Optimisez votre espace <span className="text-blue-600">Notion</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl">
            Des templates élégants et efficaces pour organiser votre vie et votre travail. Minimalistes, clairs et pensés pour la productivité.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#templates"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 shadow-sm hover:shadow-md transition-shadow"
            >
              Explorer les templates <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#apropos"
              className="text-sm font-medium text-blue-600 hover:text-violet-600"
            >
              En savoir plus
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500"/> Prêts à l’emploi</div>
            <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500"/> Design soigné</div>
            <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500"/> Mises à jour incluses</div>
          </div>
        </div>
      </div>
    </section>
  );
}
