import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, MapPin, Phone } from 'lucide-react';

const SalesAdvisorWidget = ({ nodeName, adn }: { nodeName: string; adn: string }) => {
  const accentColor = '#FF6B35';
  const glassmorphism = 'backdrop-blur-md bg-white/10 border border-white/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-4 left-4 z-50 max-w-xs rounded-2xl p-4 ${glassmorphism} border border-orange-400/20`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
          <span className="text-xs font-black text-white">N</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Asesor Neural</span>
            <span className="text-[8px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full border border-orange-400/30">
              ACTIVO
            </span>
          </div>
          <h4 className="text-sm font-black uppercase tracking-tighter">
            {nodeName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Online</span>
          </h4>
          <p className="text-xs text-gray-300 mt-2 leading-relaxed">{adn}</p>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const accentColor = '#FF6B35';
  const glassmorphism = 'backdrop-blur-md bg-white/10 border border-white/10';

  const posts = [
    {
      id: 1,
      title: 'REPARACIONES NEURALES PARA TU HOGAR',
      content: 'Transformamos tus espacios con precisión quirúrgica. Cada reparación es una sinapsis perfecta entre funcionalidad y diseño futurista.',
      date: '16 SEP 2024',
      image: '/assets/wily-repair-1.webp',
    },
    {
      id: 2,
      title: 'OFICIOS CON PRECISIÓN CUÁNTICA',
      content: 'Nuestros técnicos certificados por la Federación Neural ejecutan cada tarea con la exactitud de un algoritmo de IA de nivel élite.',
      date: '15 SEP 2024',
      image: '/assets/wily-repair-2.webp',
    },
    {
      id: 3,
      title: 'MANTENIMIENTO DE SISTEMAS DOMÉSTICOS',
      content: 'Optimizamos tus instalaciones como si fueran nodos de la red Neural Nexus, garantizando flujo perfecto de energía y recursos.',
      date: '14 SEP 2024',
      image: '/assets/wily-repair-3.webp',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: 'fa-instagram', available: false },
    { name: 'Facebook', url: '#', icon: 'fa-facebook', available: false },
    { name: 'TikTok', url: '#', icon: 'fa-tiktok', available: false },
    { name: 'YouTube', url: '#', icon: 'fa-youtube', available: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget
        nodeName="Wily"
        adn="&quot;ADN del Negocio: Plataforma inteligente de negocios auto-actualizable para Wily. Plantilla elegida: prism&quot;"
      />

      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-0 w-full z-50 py-4 ${glassmorphism}`}
        >
          <div className="container mx-auto px-8 flex justify-between items-center">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black uppercase tracking-tighter"
            >
              Wily<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Nexus</span>
            </motion.h1>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${glassmorphism} hover:bg-white/20 transition-all`}
            >
              <a
                href="https://wa.me/573011362432?text=Hola!%20Vengo%20desde%20su%20sitio%20web%20Neural%20Nexus."
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black uppercase tracking-widest flex items-center gap-2"
              >
                <MessageCircle size={14} /> Reservar Ahora
              </a>
            </motion.button>
          </div>
        </motion.nav>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-32 pb-20 px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Feed</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-3xl ${glassmorphism} p-6 hover:border-orange-400/30 transition-all`}
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                        Wily Nexus
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-500/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-400/30">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {post.content}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Explorar Misión <ArrowRight size={14} />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                Ubicación <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Neural</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className={`rounded-3xl ${glassmorphism} p-8`}>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
                  <MapPin size={20} /> ¿Dónde Estamos?
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Nuestro centro de operaciones se encuentra en la ciudad de Cúcuta, nodo estratégico de la Federación Neural Nexus.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.google.com/maps/search/?api=1&query=Wily%20Cúcuta"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${glassmorphism} hover:bg-white/20 transition-all`}
                >
                  <MapPin size={16} /> Cómo Llegar
                </motion.a>
              </div>
              <div className={`rounded-3xl ${glassmorphism} p-8`}>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
                  <Phone size={20} /> Contacto Élite
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Conéctate con nuestro protocolo de atención premium a través de WhatsApp Neural.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/573011362432?text=Hola!%20Vengo%20desde%20su%20sitio%20web%20Neural%20Nexus."
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all`}
                >
                  <MessageCircle size={16} /> WhatsApp Neural
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`py-12 px-8 ${glassmorphism} border-t border-white/5`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-4">
                  Wily<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Nexus</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Soluciones de oficios con tecnología Neural Nexus. Precisión cuántica para tus espacios.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-4">
                  Enlaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Rápidos</span>
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ubicación</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reservar</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-4">
                  Redes <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Neurales</span>
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.2 }}
                      href={social.available ? social.url : '#'}
                      className={`text-gray-400 hover:text-white transition-colors ${!social.available && 'opacity-50 cursor-not-allowed'}`}
                    >
                      <i className={`fab ${social.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                ⭐ 4.8 (120 reseñas) | Nodo Cúcuta - Federación Neural Nexus
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-4 md:mt-0">
                Powered by{' '}
                <a
                  href="https://neural-nexus-inky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Portal Neural Nexus
                </a>{' '}
                |{' '}
                <a
                  href="https://neural-nexus-inky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Nexus Hive Federation
                </a>
              </span>
            </div>
          </div>
        </motion.footer>

        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/573011362432?text=Hola!%20Vengo%20desde%20su%20sitio%20web%20Neural%20Nexus."
          target="_blank"
          rel="noreferrer"
          className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full ${glassmorphism} flex items-center justify-center bg-green-500/20 border border-green-400/30 hover:bg-green-500/30 transition-all`}
        >
          <MessageCircle size={24} className="text-green-400" />
        </motion.a>
      </div>

      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Wily</h3>
                <p className="text-slate-400 text-sm mt-1">Cúcuta</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Wily%20C%C3%BAcuta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/573011362432?text=Hola! Vengo desde su sitio web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
}

export default App;