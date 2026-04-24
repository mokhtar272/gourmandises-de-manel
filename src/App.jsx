import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Creations', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const PRODUCTS = [
  { name: 'Layer Cake', sub: 'Custom Birthday Cake', price: '3 500 – 6 000 DA', desc: 'Tiered cake decorated to order for birthdays and special occasions, prepared with love and meticulous aesthetics.', large: true },
  { name: 'Cupcakes', sub: 'Assorted Delights', price: '350 – 600 DA / piece', desc: 'Individual filled and decorated sweet bites, perfect for gifting or sharing with the family.' },
  { name: 'Gourmet Box', sub: 'Gift-Ready Collection', price: '1 500 – 3 000 DA', desc: 'A curated assortment of homemade pastries presented in a beautiful box — ideal for gifts and special moments.', large: true },
  { name: 'Cheesecake', sub: 'Signature Homemade', price: '2 500 – 4 000 DA', desc: 'Creamy cheesecake in various flavours, crafted with carefully selected quality ingredients.' },
  { name: 'Cookies & Brownies', sub: 'Classic Revisited', price: '300 – 500 DA / piece', desc: 'Generous, soft and flavourful biscuits and brownies — timeless classics with an irresistible homemade twist.' },
];

const REVIEWS = [
  { name: 'Yasmine B.', stars: 5, text: '"I ordered a layer cake for my daughter\'s birthday and the result was MAGNIFICENT! The taste even more so! Manel is super responsive and attentive. I recommend 100%."' },
  { name: 'Karim D.', stars: 5, text: '"A box of cakes ordered for my mum — she was overjoyed! Impeccable presentation, exceptional taste. You can really feel it\'s made with heart."' },
  { name: 'Nadia M.', stars: 5, text: '"The cupcakes I received were perfect, as beautiful as in the photos. Fast delivery in Algiers. Manel is truly talented, we always come back!"' },
];

const FAQS = [
  { q: 'How do I place an order?', a: 'Simply send a direct message (DM) on Instagram @gourmandisesdemanel specifying the type of creation you want, the desired date and your preferences. Manel will respond quickly.' },
  { q: 'Do you deliver to my door?', a: 'Yes, delivery is available throughout Algiers and its surroundings. Delivery details and fees are to be confirmed directly with Manel via DM.' },
  { q: 'Can I customise my order?', a: "Absolutely! Customisation is Manel's speciality — specify your colours, flavours, theme and desired inscriptions when placing your order." },
  { q: 'How far in advance should I order?', a: 'It is recommended to order at least 48 to 72 hours in advance, especially for birthday cakes and elaborate creations.' },
  { q: 'Do you use halal ingredients?', a: 'Yes, all creations are prepared with halal ingredients, in accordance with Algerian standards.' },
];

const LOGO_URL = "https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-19/238973952_3112545512359782_2207144930242940892_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42MjYuQzMifQ%3D%3D&_nc_ohc=NsCxtGhPTaoQ7kNvwGgu8dQ&_nc_oc=AdqFG5PZObkqZL6gvPijvMAdOZQdd3_ckJVKY8Y7nztpu8YxnwDM_JpqZZluk8Z4HB4&_nc_zt=24&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_ss=7360f&oh=00_Af2YmB6-rrFGWA0Wrbl4ktIGYZ_1Us6b8FnAaSUpC3cxAQ&oe=69F17E79";
const IG_URL = "https://www.instagram.com/gourmandisesdemanel?igsh=MTkyZTkwZ3Z3ajAyMg==";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={LOGO_URL} alt="Gourmandises de Manel" className="h-10 w-auto object-contain rounded-full ring-2 ring-[#C8845A]/30" />
          <span className="font-display font-bold text-[#C8845A] text-lg hidden sm:block tracking-tight">Gourmandises de Manel</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-gray-700 hover:text-[#C8845A] transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={IG_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-[#C8845A] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#b57349] transition-colors shadow-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Order Now
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 hover:text-[#C8845A] transition-colors">{l.label}</a>
            ))}
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#C8845A] text-white text-sm font-semibold px-4 py-2.5 rounded-full justify-center">Order on Instagram</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fff8f4] via-white to-[#fdeee3]">
      <div className="bg-mesh-hero absolute inset-0 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#C8845A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#e8a87c]/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="inline-flex items-center gap-2 bg-[#C8845A]/10 text-[#C8845A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14l-5-5 1.414-1.414L11 13.172l7.586-7.586L20 7l-9 9z"/></svg>
            100% Handmade · Ben Aknoun, Algiers
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-gray-900">Pastries made</span><br />
            <span className="bg-gradient-to-r from-[#C8845A] via-[#e8a87c] to-[#b57349] bg-clip-text text-transparent">with heart,</span><br />
            <span className="text-gray-900">savoured</span><br />
            <span className="text-gray-900">with love.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
            Custom creations by Manel — a self-taught culinary artist trusted by 46,000 food lovers across Algeria. No factories, no assembly lines. Just passion in every bite.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-[#C8845A] hover:bg-[#b57349] text-white font-bold px-7 py-3.5 rounded-full shadow-xl shadow-[#C8845A]/30 transition-all hover:scale-105 hover:-translate-y-0.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Order via Instagram
            </a>
            <a href="#products" className="inline-flex items-center gap-2 border-2 border-[#C8845A] text-[#C8845A] font-bold px-7 py-3.5 rounded-full hover:bg-[#C8845A]/5 transition-all">
              See Creations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>
          <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200/80">
            {[['46K+', 'Instagram followers'], ['100%', 'Halal ingredients'], ['48h', 'Advance notice']].map(([n, l]) => (
              <div key={n}>
                <div className="font-display text-2xl font-black text-[#C8845A]">{n}</div>
                <div className="text-xs text-gray-500 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[460px] h-[460px]">
            <div className="absolute inset-0 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-gradient-to-br from-[#C8845A]/20 via-[#e8c5a8]/30 to-[#fdeee3] animate-blob" />
            <div className="absolute inset-8 rounded-[60%_40%_40%_60%/40%_60%_40%_60%] bg-gradient-to-tr from-[#f5d4bb]/40 via-[#C8845A]/10 to-transparent animate-blob-reverse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-64 h-64 opacity-80" fill="none">
                <circle cx="150" cy="90" r="50" fill="#C8845A" fillOpacity="0.15" />
                <circle cx="150" cy="90" r="36" fill="#C8845A" fillOpacity="0.25" />
                <path d="M100 140 Q150 100 200 140 L210 230 Q150 260 90 230 Z" fill="#C8845A" fillOpacity="0.18" />
                <path d="M115 145 Q150 115 185 145 L192 215 Q150 238 108 215 Z" fill="#C8845A" fillOpacity="0.3" />
                <circle cx="120" cy="75" r="8" fill="#e8a87c" fillOpacity="0.6" />
                <circle cx="180" cy="75" r="8" fill="#e8a87c" fillOpacity="0.6" />
                <path d="M130 200 Q150 215 170 200" stroke="#C8845A" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="70" cy="160" r="18" fill="#f5d4bb" fillOpacity="0.7" />
                <circle cx="230" cy="160" r="14" fill="#f5d4bb" fillOpacity="0.7" />
                <circle cx="150" cy="270" r="12" fill="#C8845A" fillOpacity="0.2" />
                <path d="M60 180 Q55 160 70 155 Q85 150 80 170" fill="#e8c5a8" fillOpacity="0.5" />
                <path d="M240 175 Q238 157 225 155 Q212 153 215 173" fill="#e8c5a8" fillOpacity="0.5" />
              </svg>
            </div>
            <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl p-3 border border-[#C8845A]/10">
              <div className="text-xs font-bold text-[#C8845A]">Layer Cake</div>
              <div className="text-xs text-gray-500">from 3 500 DA</div>
            </div>
            <div className="absolute bottom-12 left-4 bg-white rounded-2xl shadow-xl p-3 border border-[#C8845A]/10">
              <div className="text-xs font-bold text-[#C8845A]">Free customisation</div>
              <div className="text-xs text-gray-500">on every order</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function Features() {
  const items = [
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />, title: 'Made with passion', desc: 'Every creation is prepared by hand with authentic love and meticulous attention to detail.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />, title: 'Fully customisable', desc: 'Colours, flavours, themes, inscriptions — your vision becomes a delicious reality.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />, title: 'Algiers delivery', desc: 'Available across Algiers and surrounding areas. Confirm your zone directly with Manel.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, title: '100% Halal', desc: 'All creations prepared with halal-certified ingredients, respecting Algerian standards.' },
  ];
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#C8845A] mb-3">Why choose Manel?</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Good food, good mood</h2>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <motion.div key={f.title} variants={item} whileHover={{ y: -6, scale: 1.02 }} className="bg-gradient-to-br from-[#fff8f4] to-white border border-[#C8845A]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#C8845A]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C8845A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{f.icon}</svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-[#fff8f4] to-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#C8845A] mb-3">The menu</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Our Creations</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`${p.large ? 'md:col-span-4' : 'md:col-span-2'} group relative bg-white border border-[#C8845A]/10 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-[#C8845A]/10 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8845A]/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <span className="inline-block bg-[#C8845A]/10 text-[#C8845A] text-xs font-bold px-3 py-1 rounded-full mb-3">{p.sub}</span>
                <h3 className="font-display text-2xl font-black text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#C8845A] text-lg">{p.price}</span>
                  <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 bg-[#C8845A] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#b57349] transition-colors">
                    Order
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 bg-gradient-to-r from-[#C8845A] to-[#e8a87c] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Looking for something special?</p>
            <p className="text-white/80 text-sm">All creations can be fully personalised — just ask!</p>
          </div>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="shrink-0 bg-white text-[#C8845A] font-bold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-lg">
            Customise my order
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#C8845A22_0%,_transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-widest font-bold text-[#C8845A] mb-4">The story</p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
            A self-taught creator<br />
            <span className="bg-gradient-to-r from-[#C8845A] to-[#e8c5a8] bg-clip-text text-transparent">born of passion.</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Manel is a self-taught culinary creator based in Ben Aknoun, Algiers. With over 46,000 Instagram followers and 138 publications, she built her community by sharing her sincere passion for homemade pastry and cooking.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Her self-taught journey reflects a determination and natural talent that captivated a wide Algerian audience. No factory, no production line — just two skilled hands, a real culinary passion and the desire to offer you the very best of homemade.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[['46K+', 'Followers'], ['138', 'Publications'], ['5★', 'Average rating']].map(([n, l]) => (
              <div key={n}>
                <div className="font-display text-3xl font-black text-[#C8845A]">{n}</div>
                <div className="text-xs text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#C8845A]/20 to-[#C8845A]/5 border border-white/5 p-8">
            <blockquote className="text-xl font-light text-white/90 leading-relaxed italic mb-6">
              «&nbsp;Pas d'usine, pas de chaîne de production — juste deux mains habiles, une vraie passion culinaire et le désir de vous offrir le meilleur du fait maison.&nbsp;»
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8845A] to-[#e8a87c] flex items-center justify-center text-white font-bold text-xl">M</div>
              <div>
                <div className="font-bold text-white">Manel</div>
                <div className="text-xs text-gray-400">Culinary Creator · Ben Aknoun, Algiers</div>
              </div>
            </div>
            <div className="mt-6 flex gap-2 flex-wrap">
              {['Authentic passion', 'Homemade craft', 'Culinary creativity', 'Direct relationship', 'Generosity'].map(tag => (
                <span key={tag} className="text-xs bg-[#C8845A]/15 text-[#e8a87c] border border-[#C8845A]/20 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#C8845A] mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 tracking-tight">They loved it.</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-[#fff8f4] to-white border border-[#C8845A]/10 rounded-3xl p-7 shadow-sm">
              <div className="text-[#C8845A] text-xl mb-4">{'★'.repeat(r.stars)}</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C8845A] to-[#e8a87c] flex items-center justify-center text-white text-sm font-bold">{r.name[0]}</div>
                <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
          <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#C8845A] font-semibold text-sm hover:underline">
            See more reviews on Instagram
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#fff8f4] to-white">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#C8845A] mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Your questions, answered.</h2>
        </motion.div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white border border-[#C8845A]/10 rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                <span className="font-semibold text-gray-900 text-sm">{f.q}</span>
                <svg className={`w-5 h-5 text-[#C8845A] shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-widest font-bold text-[#C8845A] mb-4">Order</p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
            Ready to treat<br /><span className="bg-gradient-to-r from-[#C8845A] to-[#e8c5a8] bg-clip-text text-transparent">yourself?</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">Contact Manel directly via Instagram DM to discuss your order — she'll guide you through every detail to create your perfect custom treat.</p>
          <div className="space-y-4">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />, label: 'Location', val: 'Ben Aknoun, Algiers' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />, label: 'Orders', val: 'Via Instagram DM — no phone required' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />, label: 'Delivery zones', val: 'Algiers & surroundings — confirm with Manel' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C8845A]/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#C8845A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{item.icon}</svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                  <div className="text-sm text-gray-200 font-medium">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <div className="bg-gradient-to-br from-[#C8845A]/15 to-transparent border border-white/5 rounded-3xl p-8 space-y-5">
            <h3 className="font-display text-2xl font-bold text-white">How to order</h3>
            {[['Send a DM on Instagram', '@gourmandisesdemanel'], ['Describe your creation', 'Type, flavour, date, theme...'], ['Confirm & pay', 'Cash on delivery available'], ['Receive your treat', 'Delivered to your door in Algiers']].map(([s, d], i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#C8845A] text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{s}</div>
                  <div className="text-xs text-gray-400">{d}</div>
                </div>
              </div>
            ))}
            <a href={IG_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-[#C8845A] to-[#e8a87c] text-white font-bold py-3.5 rounded-2xl mt-4 hover:opacity-90 transition-opacity shadow-lg shadow-[#C8845A]/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Message on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={LOGO_URL} alt="Gourmandises de Manel" className="h-7 w-auto opacity-70 rounded-full" />
              <span className="font-display font-bold text-white text-base">Gourmandises de Manel</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">Fait maison avec passion, savouré avec amour. Homemade pastries crafted with heart in Ben Aknoun, Algiers.</p>
            <div className="flex gap-3 mt-4">
              <a href={IG_URL} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C8845A]/20 flex items-center justify-center text-gray-400 hover:text-[#C8845A] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Quick links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => <li key={l.label}><a href={l.href} className="text-gray-500 text-sm hover:text-[#C8845A] transition-colors">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Ben Aknoun, Algiers</li>
              <li>Orders via DM Instagram</li>
              <li>Delivery across Algiers</li>
              <li>Cash on delivery</li>
              <li>Min. 48–72h notice</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© 2024 Gourmandises de Manel · All rights reserved.</p>
          <p className="text-xs text-gray-600">Made with passion in Algiers, Algeria</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <motion.a
        href={IG_URL} target="_blank" rel="noreferrer"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#C8845A] to-[#e8a87c] rounded-full flex items-center justify-center shadow-2xl shadow-[#C8845A]/40"
        title="Contact on Instagram"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </motion.a>
    </div>
  );
}