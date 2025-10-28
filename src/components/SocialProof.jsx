import { Quote, Star, User, Mail, Twitter, Linkedin } from "lucide-react";

const testimonials = [
  {
    name: "Alexandre B.",
    role: "Freelance Designer",
    text: "Un design clair, j'ai enfin un système qui me suit au quotidien.",
  },
  {
    name: "Sofia M.",
    role: "Étudiante",
    text: "Parfait pour mes cours et mes projets. Simple et efficace.",
  },
  {
    name: "Thomas R.",
    role: "Product Manager",
    text: "Gain de temps énorme. Les templates sont vraiment bien pensés.",
  },
];

const faqs = [
  {
    q: "Comment utiliser les templates ?",
    a: "Après l'achat, vous dupliquez le template dans votre espace Notion et vous personnalisez les pages en quelques clics.",
  },
  {
    q: "Les mises à jour sont-elles incluses ?",
    a: "Oui. Vous recevrez les améliorations futures directement par email.",
  },
  {
    q: "Puis-je demander un remboursement ?",
    a: "Oui, sous 7 jours si le produit ne vous convient pas.",
  },
];

export default function SocialProof() {
  return (
    <section id="apropos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Ils nous font confiance</h3>
            <p className="mt-2 text-gray-600">Des créateurs, entrepreneurs et étudiants satisfaits.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-gray-200 p-5 bg-white">
                  <Quote className="h-5 w-5 text-blue-500" />
                  <blockquote className="mt-3 text-gray-700">{t.text}</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
              <span className="ml-2 text-sm text-gray-600">4.9/5 basé sur 250+ avis</span>
            </div>
          </div>

          {/* FAQ / About */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">À propos</h3>
            <p className="mt-2 text-gray-600">
              Nous créons des systèmes Notion minimalistes et durables. Notre objectif: vous faire gagner du temps et réduire la friction au quotidien.
            </p>

            <div className="mt-6 space-y-4">
              {faqs.map((f, idx) => (
                <details key={idx} className="group rounded-xl border border-gray-200 p-4 open:bg-white">
                  <summary className="cursor-pointer list-none font-medium text-gray-900 flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 text-blue-600 group-open:text-violet-600">+</span>
                  </summary>
                  <p className="mt-2 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>

            <div id="contact" className="mt-8">
              <h4 className="text-sm font-semibold text-gray-900">Nous contacter</h4>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <a href="mailto:hello@notionflow.co" className="inline-flex items-center gap-2 text-blue-600 hover:text-violet-600">
                  <Mail className="h-4 w-4" /> hello@notionflow.co
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-violet-600">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-violet-600">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
