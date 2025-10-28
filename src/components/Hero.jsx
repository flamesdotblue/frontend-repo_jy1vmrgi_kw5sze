import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Des templates Notion clairs, simples et efficaces
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Conçus pour une organisation sans friction. Un style épuré, des bases solides, et juste ce qu’il faut pour rester concentré.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#templates"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-black transition-colors"
            >
              Explorer les templates <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#apropos"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300"
            >
              En savoir plus
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gray-900"/> Prêts à l’emploi
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gray-900"/> Design minimaliste
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gray-900"/> Mises à jour incluses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
