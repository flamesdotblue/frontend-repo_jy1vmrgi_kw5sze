import { Eye, Star } from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Dashboard Productivité",
    price: "24€",
    image: 
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>\
        <defs>\
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
            <stop offset='0%' stop-color='%233B82F6' stop-opacity='0.12'/>\
            <stop offset='100%' stop-color='%238B5CF6' stop-opacity='0.12'/>\
          </linearGradient>\
        </defs>\
        <rect width='100%' height='100%' fill='white'/>\
        <rect x='24' y='24' width='752' height='452' rx='12' fill='url(%23g)' stroke='%23E5E7EB'/>\
        <rect x='48' y='60' width='704' height='16' rx='8' fill='%23E5E7EB'/>\
        <rect x='48' y='96' width='220' height='140' rx='10' fill='%23EEF2FF'/>\
        <rect x='288' y='96' width='220' height='140' rx='10' fill='%23EFF6FF'/>\
        <rect x='528' y='96' width='220' height='140' rx='10' fill='%23F5F3FF'/>\
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
        <defs>\
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
            <stop offset='0%' stop-color='%233B82F6' stop-opacity='0.12'/>\
            <stop offset='100%' stop-color='%238B5CF6' stop-opacity='0.12'/>\
          </linearGradient>\
        </defs>\
        <rect width='100%' height='100%' fill='white'/>\
        <rect x='24' y='24' width='752' height='452' rx='12' fill='url(%23g)' stroke='%23E5E7EB'/>\
        <rect x='48' y='60' width='220' height='16' rx='8' fill='%23E5E7EB'/>\
        <rect x='48' y='96' width='704' height='180' rx='10' fill='%23EFF6FF'/>\
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
        <defs>\
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
            <stop offset='0%' stop-color='%233B82F6' stop-opacity='0.12'/>\
            <stop offset='100%' stop-color='%238B5CF6' stop-opacity='0.12'/>\
          </linearGradient>\
        </defs>\
        <rect width='100%' height='100%' fill='white'/>\
        <rect x='24' y='24' width='752' height='452' rx='12' fill='url(%23g)' stroke='%23E5E7EB'/>\
        <rect x='48' y='60' width='300' height='16' rx='8' fill='%23E5E7EB'/>\
        <rect x='48' y='96' width='220' height='300' rx='10' fill='%23F5F3FF'/>\
        <rect x='288' y='96' width='220' height='140' rx='10' fill='%23EFF6FF'/>\
        <rect x='528' y='96' width='220' height='80' rx='10' fill='%23EEF2FF'/>\
        <rect x='288' y='256' width='460' height='140' rx='10' fill='%23EFF6FF'/>\
      </svg>",
    rating: 4.7,
  },
];

function TemplateCard({ item }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/10] w-full bg-white">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{item.title}</h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-400" />
            <span className="text-xs text-gray-600">{item.rating}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-blue-600 font-medium">{item.price}</p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-violet-600"
          >
            Voir le template <Eye className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TemplatesSection() {
  return (
    <section id="templates" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Templates</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Des systèmes prêts à l’emploi pour gagner du temps et rester concentré.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-medium text-blue-600 hover:text-violet-600">Tout voir</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <TemplateCard key={t.id} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
