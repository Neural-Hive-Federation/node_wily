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
      
      const accentColor = '#FF6B35';

const posts = [
  {
    id: 1,
    title: 'Servicios Digitales para tu negocio',
    content: 'En Wily, ofrecemos soluciones digitales innovadoras para impulsar tu negocio.',
    date: '22 de febrero de 2023',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 2,
    title: '¿Cómo podemos ayudarte?',
    content: 'Nuestro equipo de expertos está aquí para ayudarte a encontrar la solución perfecta para tus necesidades digitales.',
    date: '15 de enero de 2023',
    image: 'https://via.placeholder.com/400x300',
  },
];

const App = () => {
  
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Wily <span style={{ color: accentColor }}>Digital</span></h2>
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
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Wily Update</span>
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
      <div className="flex items-center gap-4 mt-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Calificación de Google: ⭐ 4.8 (120 reseñas)</h2>
      </div>
      <div className="flex justify-center mt-12">
        <a href="https://wa.me/573125678901?text=Hola! Vengo desde su sitio web." className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
          Reservar <ArrowRight size={14} />
        </a>
      </div>
      <div className="flex justify-center mt-12">
        <a href="https://www.google.com/maps/search/?api=1&query=7.9398,-72.4989" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
          Cómo Llegar <ArrowRight size={14} />
        </a>
      </div>
      <footer className="bg-gray-900 text-gray-400 text-sm p-4 mt-12">
        Powered by PNN Portal Neural Nexus | Nexus Hive Federation
        <a href="https://neural-nexus-inky.vercel.app/" className="text-gray-400 hover:opacity-70 transition-opacity">https://neural-nexus-inky.vercel.app/</a>
        <div className="flex items-center gap-2 mt-2">
          <a href="#" className="text-gray-400 hover:opacity-70 transition-opacity">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-gray-400 hover:opacity-70 transition-opacity">
            <i className="fab fa-facebook" />
          </a>
          <a href="#" className="text-gray-400 hover:opacity-70 transition-opacity">
            <i className="fab fa-tiktok" />
          </a>
          <a href="#" className="text-gray-400 hover:opacity-70 transition-opacity">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </footer>
    </section>
  );
};

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="41a2ff9e-9288-4ebf-95b7-dec2ff0f0bb3" />

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