import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget 
        nodeName="Wily" 
        adn="&quot;{\&quot;report\&quot;:\&quot;Plataforma inteligente de negocios auto-actualizable para Wily\&quot;,\&quot;opportunity_score\&quot;:95,\&quot;google_place_id\&quot;:\&quot;manual\&quot;,\&quot;location\&quot;:{\&quot;latitude\&quot;:7.9398,\&quot;longitude\&quot;:-72.4989},\&quot;custom_parameters\&quot;:{\&quot;template\&quot;:\&quot;prism\&quot;,\&quot;color\&quot;:\&quot;#FF6B35\&quot;,\&quot;business_name\&quot;:\&quot;Wily\&quot;,\&quot;niche\&quot;:\&quot;Servicios Digitales\&quot;,\&quot;city\&quot;:\&quot;Cúcuta\&quot;,\&quot;description\&quot;:\&quot;Plataforma inteligente de negocios auto-actualizable para Wily\&quot;}}&quot;" 
      />
      
      // App.tsx




const accentColor = '#FF6B35'; // Cambiado a orange-500

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

interface FeaturedProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
}

const featured: FeaturedProps = {
  title: "Solución Integral para Negocios",
  excerpt: "Plataforma inteligente de negocios auto-actualizable para Wily.",
  category: "Servicios",
  readTime: "5 min",
  author: "Wily",
};

const posts: Post[] = [
  {
    id: 1,
    title: "Servicios Digitales",
    content: "Solución integral para negocios.",
    date: "10 de febrero de 2023",
    image: "https://via.placeholder.com/600x400",
  },
];


  
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Solución {featured.category}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Actualización</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                Leer Más <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-12 mt-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Prueba Social</h2>
        <div className="text-3xl font-black uppercase tracking-tighter italic ml-4">
          <span style={{ color: accentColor }}>⭐</span> 4.8 (120 reseñas)
        </div>
      </div>
      <div className="bg-orange-500 p-4 rounded-lg text-white text-center mb-12">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            window.location.href = 'https://wa.me/?text=Hola! Vengo desde su sitio web.';
          }}
        >
          Reservar
        </button>
      </div>
      {posts[0].image && (
        <div className="bg-white p-4 rounded-lg text-gray-600 text-center mb-12">
          <button
            className="bg-gray-200 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = 'https://www.google.com/maps/search/?api=1&query=7.9398,-72.4989';
            }}
          >
            Cómo Llegar
          </button>
        </div>
      )}
      <footer className="bg-gray-800 p-4 text-gray-300 text-center mb-12">
        <div className="flex justify-center items-center">
          <a
            href="https://neural-nexus-inky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            Powered by PNN Portal Neural Nexus
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h10M7 16h10M2 16h16M2 12h16m14 0H2m14 0h16"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zM12 20v-2.5a2.5 2.5 0 00-5 0 2.5 2.5 0 005 0v2.5m0-10a2.5 2.5 0 015 0 2.5 2.5 0 015 0 2.5 2.5 0 01-5 0z"
              />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
}

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="e7fd2e42-5d57-47c1-bc31-c2ccda1e19e6" />

      {/* Sección de Ubicación Física */}
      
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Wily</h3>
                <p className="text-slate-400 text-sm mt-1">Cúcuta</p>
                <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">Cúcuta</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=7.9398,-72.4989" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
      

      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">WILY</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            
            
            
            
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;