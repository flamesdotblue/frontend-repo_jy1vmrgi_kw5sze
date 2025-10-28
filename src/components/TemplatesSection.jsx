import { ArrowRight, Star } from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Dashboard Productivité",
    price: "24€",
    image: 
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>\
        <rect width='100%' height='100%' fill='white'/>\
        <rect x='24' y='24' width='752' height='452' rx='12' fill='white' stroke='%23E5E7EB'/>\
        <rect x='48' y='60' width='704' height='16' rx='8' fill='%23E5E7EB'/>\
        <rect x='48' y='96' width='220' height='140' rx='10' fill='%23F3F4F6'/>\
        <rect x='288' y='96' width='220' height='140' rx='10' fill='%23F9FAFB'/>\
        <rect x='528' y='96' width='220' height='140' rx='10' fill='%23F3F4F6'/>\
        <rect x='48' y='256' width='700' height='12' rx='6' fill='%23E5E7EB'/>\
        <rect x='48' y='280' width='640' height='12' rx='6' fill='%23E5E7EB'/>\
        <rect x='48' y='304' width='560' height='12' rx='6' fill='%23E5E7EB'/>\
      </svg>",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Second Brain",
    price: "29€",
    image:
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>\
        <rect width='100%' height='100%' fill='white'/>\
        <rect x='24' y='24' width='752' height='452' rx='12' fill='white' stroke='%23E5E7EB'/>\
        <rect x='48' y='60' width='220' height='16' rx='8' fill='%23E5E7EB'/>\
        <rect x='48' y='96' width='704' height='180' rx='10' fill='%23F9FAFB'/>\
        <rect x='48' y='296' width='640' height='12' rx='6' fill='%23E5E7EB'/>\
        <rect x='48' y='320' width='560' height='12' rx='6' fill='%23E5E7EB'/>\
        <rect x='48' y='344' width='520' height='12' rx='6' fill='%23E5E7EB'/>\
      </svg>",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Gestion de Projets",
    price: "19€",
    image:
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>\
        <rect width='100%' height='100%' fill='white'/>\
        <rect x='24' y='24' width='752' height='452' rx='12' fill='white' stroke='%23E5E7EB'/>\
        <rect x='48' y='60' width='300' height='16' rx='8' fill='%23E5E7EB'/>\
        <rect x='48' y='96' width='220' height='300' rx='10' fill='%23F3F4F6'/>\
        <rect x='288' y='96' width='220' height='140' rx='10' fill='%23F9FAFB'/>\
        <rect x='528' y='96' width='220' height='80' rx='10' fill='%23F3F4F6'/>\
        <rect x='288' y='256' width='460' height='140' rx='10' fill='%23F9FAFB'/>\
      </svg>",
    rating: 4.7,
  },
];

function TemplateCard({ item }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-sm transition-all">
      <div className="aspect-[16/10] w-full bg-white">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{item.title}</h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-400" />
            <span className="text-xs text-gray-600">{item.rating}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-900 font-medium">{item.price}</p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
          >
            Voir le template <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TemplatesSection() {
  return (
    <section id="templates" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Templates</h2>
          <p className="mt-2 text-gray-600">Des bases prêtes à l’emploi pour gagner du temps et rester concentré.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <TemplateCard key={t.id} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
