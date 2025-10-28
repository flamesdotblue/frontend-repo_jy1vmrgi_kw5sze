import Header from "./components/Header";
import Hero from "./components/Hero";
import TemplatesSection from "./components/TemplatesSection";
import SocialProof from "./components/SocialProof";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Header />
      <main>
        <Hero />
        <TemplatesSection />
        <SocialProof />
      </main>
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} NotionFlow. Tous droits réservés.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-blue-600 hover:text-violet-600">Mentions légales</a>
              <a href="#" className="text-blue-600 hover:text-violet-600">Conditions</a>
              <a href="#" className="text-blue-600 hover:text-violet-600">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
