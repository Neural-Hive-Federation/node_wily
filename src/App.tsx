import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const accentColor = '#FF6B35';

  const posts = [
    {
      id: 1,
      title: 'Servicios Digitales de Wily',
      content: 'Plataforma inteligente de negocios auto-actualizable para Wily',
      image: 'https://picsum.photos/300',
      date: '22 de Febrero de 2024',
    },
    {
      id: 2,
      title: 'Nuestra Misión',
      content: 'Ofrecer soluciones innovadoras y personalizadas para nuestros clientes',
      image: 'https://picsum.photos/300',
      date: '15 de Enero de 2024',
    },
    {
      id: 3,
      title: '¿Qué ofrecemos?',
      content: 'Desarrollo de plataformas de negocios auto-actualizables y servicios de consultoría',
      image: 'https://picsum.photos/300',
      date: '10 de Diciembre de 2023',
    },
  ];

  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const enviarMensaje = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('https://api-email.com/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setEnviado(true);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <nav className="py-4 bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold uppercase tracking-tighter italic">
            Wily <span style={{ color: accentColor }}>Servicios Digitales</span>
          </h2>
          <a
            href="https://wa.me/?text=Hola! Vengo desde su sitio web."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: accentColor }}
          >
            Reservar
          </a>
        </div>
      </nav>
      <section className="py-20 px-8 max-w-6xl mx-auto bg-[linear-gradient(to_bottom, #f7f7f7, #fff)]">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">
            Wily <span style={{ color: accentColor }}>Servicios Digitales</span>
          </h2>
          <span className="text-lg font-bold">⭐ 4.8 (120 reseñas)</span>
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
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    Wily Update
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                  Leer Más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto flex justify-center">
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=7.9398,-72.4989"
              target="_blank"
              rel="noreferrer"
            >
              Cómo Llegar
            </a>
          </button>
        </div>
      </section>
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto flex justify-center">
          <form onSubmit={enviarMensaje} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="p-2 rounded-md border border-gray-400 hover:border-gray-600 transition-border"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
              className="p-2 rounded-md border border-gray-400 hover:border-gray-600 transition-border"
            />
            <textarea
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="p-2 rounded-md border border-gray-400 hover:border-gray-600 transition-border h-20"
            />
            {enviado ? (
              <p className="text-green-600">Mensaje enviado con éxito!</p>
            ) : (
              <button type="submit" className="bg-[#FF6B35] p-2 rounded-md text-white hover:bg-[#FF9C6E] transition-colors">
                Enviar
              </button>
            )}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </section>
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto flex justify-center">
          <p className="text-sm font-bold">
            Powered by{' '}
            <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noreferrer">
              PNN Portal Neural Nexus
            </a>{' '}
            |{' '}
            <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noreferrer">
              Nexus Hive Federation
            </a>
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;