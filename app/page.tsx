"use client";
import { useState, useEffect } from "react";

const menuItems = [
  {
    id: 1,
    name: "1/2 Chicken",
    description: "Con patata con bebida",
    price: "10.95",
    image: "/menu1.png",
  },
  {
    id: 2,
    name: "Chicken Karry",
    description: "With pilow rice, soft drink",
    price: "13.95",
    image: "/menu2.png",
  },
  {
    id: 3,
    name: "Chicken Tikka Masolla",
    description: null,
    price: "13.95",
    image: "/menu3.png",
  },
  {
    id: 4,
    name: "Fish and Chips",
    description: "With drinks",
    price: "12.95",
    image: "/menu4.png",
  },
  {
    id: 5,
    name: "Seekh Kebab",
    description: "With rice or chips or salad (any one) – with drinks",
    price: "10.95",
    image: "/menu5.png",
  },
  {
    id: 6,
    name: "FriKandel",
    description: "With chips and salad, with drinks",
    price: "11.95",
    image: "/menu6.png",
  },
  {
    id: 7,
    name: "Chicken Finger",
    description: "With rice and salad, drinks",
    price: "10.95",
    image: "/menu7.png",
  },
  {
    id: 8,
    name: "Fry Chicken",
    description: "With drinks – with salad, chips",
    price: "11.95",
    image: "/menu8.png",
  },
  {
    id: 9,
    name: "Onion Bazi",
    description: "Tortilla de Cebolla",
    price: "4.95",
    image: "/menu9.png",
  },
];

const extraSections = [
  {
    title: "Rollo Kebab",
    note: "Rollos con queso gratinado",
    items: [
      { name: "Rollo Kebab", sub: "Ternera o Pollo", price: "5.00", menu: "Menú 9.00" },
      { name: "Rollo Kebab", sub: "Medium", price: "7.00", menu: "Menú 11.00" },
      { name: "Rollo Kebab", sub: "XXL", price: "9.00", menu: "Menú 13.00" },
      { name: "Kebab Especial", sub: null, price: "11.00", menu: "Menú 15.00" },
    ],
  },
  {
    title: "Pita Kebab",
    note: null,
    items: [
      { name: "Pita Kebab", sub: "Ternera o Pollo", price: "5.00", menu: null },
      { name: "Pita Kebab", sub: "De Ternera o Pollo", price: "6.00", menu: null },
      { name: "Pita Kebab", sub: "Verdura o Falafel", price: "5.00", menu: null },
    ],
  },
  {
    title: "Hamburguesa · Falafel · Lahmacum",
    note: null,
    items: [
      { name: "Lahmacum", sub: null, price: "6.50", menu: null },
      { name: "Hamburguesa", sub: "Ternera o Pollo", price: "5.00", menu: null },
      { name: 'Falafel "Plato"', sub: "Arroz, Patatas, Ensalada", price: "8.00", menu: null },
      { name: "Alitas de Pollo", sub: null, price: "4.00", menu: null },
      { name: "Nugget de Pollo", sub: null, price: "4.00", menu: null },
    ],
  },
  {
    title: "Pollo Asado",
    note: "Con arroz o patatas o ensalada o pimientos fritos",
    items: [
      { name: "½ Pollo Asado", sub: "Para llevar", price: "6.00", menu: null },
      { name: "Pollo Asado Entero", sub: "Para llevar", price: "12.00", menu: null },
      { name: "Pollo Asado", sub: "Para comer aquí", price: "18.00", menu: null },
      { name: "½ Pollo Asado", sub: "Para comer aquí", price: "10.00", menu: null },
      { name: "Ensalada Mixta", sub: null, price: "5.00", menu: null },
      { name: "Arroz Blanco", sub: null, price: "4.00", menu: null },
      { name: "Barra de Pan", sub: null, price: "1.00", menu: null },
    ],
  },
  {
    title: "Pizzas",
    note: null,
    items: [
      { name: "Margarita", sub: null, price: "8.00", menu: null },
      { name: "Vegetariana", sub: null, price: "8.00", menu: null },
      { name: "Kebab Pollo", sub: null, price: "9.00", menu: null },
      { name: "Kebab Ternera", sub: null, price: "9.00", menu: null },
      { name: "Kebab Mixto", sub: null, price: "9.00", menu: null },
      { name: "Atún", sub: null, price: "9.00", menu: null },
      { name: "4 Quesos", sub: null, price: "9.00", menu: null },
      { name: "Pepperoni · Salami", sub: null, price: "9.00", menu: null },
    ],
  },
  {
    title: "Kapsalon",
    note: "Patatas fritas, kebab, queso, ensalada, salsa ajo y picante",
    items: [
      { name: "Pequeño", sub: null, price: "7.95", menu: null },
      { name: "Mediano", sub: null, price: "10.95", menu: null },
      { name: "Grande", sub: null, price: "13.95", menu: null },
      { name: "Gigante (XXL)", sub: null, price: "17.95", menu: null },
    ],
  },
  {
    title: "Pita Kash · Patatas · Doner Box",
    note: null,
    items: [
      { name: "Pita Kash · Pita Queso", sub: null, price: "5.00", menu: null },
      { name: "Patatas Gratinadas", sub: "Cheese & Chips", price: "6.00", menu: null },
      { name: "Doner Box", sub: null, price: "6.50", menu: null },
      { name: "Patatas Pequeñas", sub: null, price: "2.00", menu: null },
      { name: "Patatas Medianas", sub: null, price: "4.00", menu: null },
      { name: "Patatas Grande", sub: null, price: "6.00", menu: null },
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("#rollo-kebab");
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setShowSplash(false), 2600);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center"
          style={{
            background: "radial-gradient(ellipse at center, #1a0a00 0%, #0a0500 60%, #000 100%)",
            transition: "opacity 0.6s ease",
            opacity: fadeOut ? 0 : 1,
            pointerEvents: fadeOut ? "none" : "auto",
          }}
        >
          {/* Decorative top line */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#c8a45a]" />
            <span className="text-[#c8a45a] text-xl">✦</span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#c8a45a]" />
          </div>

          {/* Ornament */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#c8a45a] text-4xl">❧</span>
            <span className="text-[#c8a45a] text-4xl">❧</span>
          </div>

          {/* Name */}
          <h1 className="text-white text-4xl font-black tracking-[0.3em] uppercase mb-2">
            Costa Kebab
          </h1>
          <h1 className="text-[#c0392b] text-5xl font-black tracking-[0.25em] uppercase mb-6">
            Istambul 1
          </h1>

          {/* Tagline */}
          <p className="text-[#c8a45a]/60 text-xs tracking-[0.4em] uppercase mb-10">
            Authentic Flavours
          </p>

          {/* Decorative bottom line */}
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#c8a45a]" />
            <span className="text-[#c8a45a] text-xl">✦</span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#c8a45a]" />
          </div>

          {/* Loading dots */}
          <div className="flex gap-1.5 mt-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#c8a45a]/50"
                style={{
                  animation: `splashPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div style={{ visibility: showSplash && !fadeOut ? "hidden" : "visible" }}>
    <div className="min-h-screen">
      {/* Logo — not sticky, just sits at top */}
      <div className="py-3 px-4">
        {/* Brand name */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-[#c8a45a] text-2xl">❧</span>
          <span className="text-[#c8a45a] text-sm tracking-[0.35em] uppercase font-semibold">
            Costa Kebab Istambul 1
          </span>
          <span className="text-[#c8a45a] text-2xl">❧</span>
        </div>
        {/* Social + Location icons */}
        <div className="flex items-center justify-center gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#c8a45a]/70 hover:text-[#c8a45a] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#c8a45a]/70 hover:text-[#c8a45a] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          {/* Divider */}
          <div className="w-px h-4 bg-[#c8a45a]/30" />
          {/* Location */}
          <a
            href="https://maps.app.goo.gl/HzH7JDRTcW3ENWJm8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
            className="flex items-center gap-1.5 text-[#c8a45a]/70 hover:text-[#c8a45a] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-[10px] font-semibold tracking-wide uppercase">Find us</span>
          </a>
        </div>
      </div>

      {/* Sticky Category Nav — between MENU title and food items */}
      <nav className="tab-nav sticky top-0 z-50 overflow-x-auto mt-4">
        <div className="flex gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 w-max sm:w-full sm:justify-center">
          {[
            { emoji: "🌯", label: "Rollo", href: "#rollo-kebab" },
            { emoji: "🥙", label: "Pita", href: "#pita-kebab" },
            { emoji: "🍔", label: "Burger", href: "#burger-falafel" },
            { emoji: "🍗", label: "Pollo", href: "#pollo-asado" },
            { emoji: "🍕", label: "Pizza", href: "#pizzas" },
            { emoji: "🍟", label: "Kapsalon", href: "#kapsalon" },
            { emoji: "🧆", label: "Patatas", href: "#patatas" },
            { emoji: "🍽️", label: "Specials", href: "#specials" },
            { emoji: "🍛", label: "Bangladeshi", href: "#bangladeshi" },
          ].map((tab) => {
            const isActive = activeTab === tab.href;
            return (
            <a
              key={tab.href}
              href={tab.href}
              onClick={() => setActiveTab(tab.href)}
              className="shrink-0 flex flex-col items-center gap-1 px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-150 active:scale-95"
              style={{
                background: isActive
                  ? "linear-gradient(180deg, #c0392b 0%, #96281b 100%)"
                  : "linear-gradient(180deg, #2a2a2a 0%, #151515 100%)",
                boxShadow: isActive
                  ? "0 3px 0 rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.15) inset, 0 0 0 1px rgba(192,57,43,0.8)"
                  : "0 3px 0 rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(200,164,90,0.15)",
              }}
            >
              <span className="text-xl sm:text-3xl leading-none">{tab.emoji}</span>
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wide leading-none"
                style={{ color: isActive ? "#fff" : "#c8a45a" }}
              >{tab.label}</span>
            </a>
            );
          })}
        </div>
      </nav>

      {/* Main Menu Items */}
      <main className="px-3 sm:px-4 pb-10 w-full max-w-lg mx-auto">

        {/* Extra Category Sections */}
        <div className="mt-4 space-y-6">
          {extraSections.map((section) => {
            const idMap: Record<string, string> = {
              "Rollo Kebab": "rollo-kebab",
              "Pita Kebab": "pita-kebab",
              "Hamburguesa · Falafel · Lahmacum": "burger-falafel",
              "Pollo Asado": "pollo-asado",
              "Pizzas": "pizzas",
              "Kapsalon": "kapsalon",
              "Pita Kash · Patatas · Doner Box": "patatas",
            };
            return (
            <div key={section.title} id={idMap[section.title]} className="scroll-mt-20 border border-[#c0392b]/40 rounded-sm overflow-hidden">
              {/* Category Header */}
              <div className="bg-[#c0392b] px-3 py-1.5">
                <h2 className="text-white text-sm font-black tracking-widest uppercase">
                  {section.title}
                </h2>
              </div>

              {/* Items */}
              <div className="px-3 py-2 space-y-0">
                {section.note && (
                  <p className="text-[#c8a45a] text-xs italic mb-2">{section.note}</p>
                )}
                {section.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between gap-2 py-1.5">
                      <div className="flex-1 min-w-0">
                        <span className="text-white text-sm font-bold">{item.name}</span>
                        {item.sub && (
                          <span className="text-white/55 text-xs ml-1">({item.sub})</span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-2 shrink-0">
                        <span className="text-[#c8a45a] font-bold text-sm">{item.price}€</span>
                        {item.menu && (
                          <span className="text-white/50 text-xs">{item.menu}</span>
                        )}
                      </div>
                    </div>
                    {i < section.items.length - 1 && (
                      <div className="border-b border-dashed border-white/10" />
                    )}
                  </div>
                ))}
              </div>

              {/* Section image */}
              {section.title === "Rollo Kebab" && (
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/rollo.png"
                    alt="Rollo Kebab"
                    className="w-2/3 h-auto object-contain drop-shadow-[0_8px_24px_rgba(192,57,43,0.5)]"
                  />
                </div>
              )}

              {/* Section image */}
              {section.title === "Pizzas" && (
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/pizza.png"
                    alt="Pizzas"
                    className="w-2/3 h-auto object-contain drop-shadow-[0_8px_24px_rgba(192,57,43,0.5)]"
                  />
                </div>
              )}
            </div>
            );
          })}
        </div>

        {/* Specials */}
        <div id="specials" className="scroll-mt-20 mt-8">
          {/* Specials Header */}
          <div className="pt-4 pb-2 px-4 text-center">
            <h1 className="text-[#c0392b] text-3xl font-black tracking-widest uppercase leading-none">
              MENU
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-px w-12 bg-[#c8a45a]" />
              <span className="text-[#c8a45a] text-sm">✦</span>
              <div className="h-px w-12 bg-[#c8a45a]" />
            </div>
          </div>
          <ul className="space-y-0">
            {menuItems.map((item) => (
              <li key={item.id} className="menu-row">
                <div className="flex items-center gap-2 sm:gap-3 py-3 sm:py-4 min-h-24 sm:min-h-27.5">
                  {/* Number badge */}
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#c0392b] flex items-center justify-center">
                    <span className="text-[#c0392b] text-xs sm:text-sm font-bold leading-none">
                      {item.id}
                    </span>
                  </div>

                  {/* Name + description + price */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm sm:text-base leading-snug">
                      {item.name}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm leading-snug mt-0.5 min-h-4 sm:min-h-5">
                      {item.description ?? ""}
                    </p>
                    <p className="text-[#c8a45a] font-bold text-base sm:text-lg mt-1 leading-snug">
                      {item.price}£
                    </p>
                  </div>

                  {/* Item image — responsive size */}
                  <div className="shrink-0 w-28 h-16 sm:w-40 sm:h-22.5 flex items-center justify-center overflow-visible pb-3 sm:pb-4">
                    {"image" in item && item.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image as string}
                        alt={item.name}
                        className="menu-img w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>
                {/* Divider */}
                {item.id < menuItems.length && (
                  <div className="border-b border-dashed border-white/20" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Promotional Banner */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#c8a45a]/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/bg-image.png"
            alt="Pide aquí tu Sangría o Tinto de Verano"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bangladeshi Food */}
        <div id="bangladeshi" className="scroll-mt-20 mt-6 border border-[#c0392b]/40 rounded-sm overflow-hidden">
          <div className="bg-[#c0392b] px-3 py-1.5 flex items-center justify-between">
            <h2 className="text-white text-sm font-black tracking-widest uppercase">Bangladeshi Food</h2>
            <span className="text-[#c8a45a] text-xs font-semibold italic">Solo una vez a la semana · Halal</span>
          </div>
          <div className="px-3 py-2 space-y-0">
            {[
              { name: "Chicken Biryani + Drink", price: "12.00" },
              { name: "Beef Biryani + Drink", price: "15.00" },
              { name: "Fish Biryani + Drink", price: "15.00" },
              { name: "Beef Curry + Rice + Drink", price: "15.00" },
              { name: "Chicken Curry + Rice + Drink", price: "12.00" },
              { name: "White Rice", price: "4.00" },
            ].map((item, i, arr) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-2 py-1.5">
                  <span className="text-white text-sm font-bold">{item.name}</span>
                  <span className="text-[#c8a45a] font-bold text-sm shrink-0">{item.price}€</span>
                </div>
                {i < arr.length - 1 && <div className="border-b border-dashed border-white/10" />}
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Las Salsas + Address */}
      <div className="px-3 sm:px-4 pb-6 w-full max-w-lg mx-auto space-y-4">
        {/* Las Salsas */}
        <div className="border border-[#c0392b]/40 rounded-sm overflow-hidden">
          <div className="bg-[#c0392b] px-3 py-1.5">
            <h2 className="text-white text-sm font-black tracking-widest uppercase">Las Salsas:</h2>
          </div>
          <div className="px-3 py-2">
            <ul className="text-white/70 text-sm font-semibold uppercase leading-relaxed">
              <li>Ajo/Yogurt <span className="text-white/40 text-xs normal-case">(con gluten)</span></li>
              <li>Ketchup</li>
              <li>Picante</li>
              <li>B.B.Q.</li>
              <li>Mayonesa</li>
              <li>Mango</li>
              <li>Ali Oli</li>
            </ul>
          </div>
        </div>

        {/* Address & Contact */}
        <div className="border border-[#c8a45a]/20 rounded-sm overflow-hidden bg-white">
          {/* Stacked layout: info on top, map below */}
          <div className="flex flex-col">
            {/* Address & contact */}
            <div className="flex-1 px-4 py-4 space-y-3">
              <p className="text-black text-lg font-bold leading-snug">C/ Bulto 22</p>
              <p className="text-black text-lg leading-snug">La Carihuela</p>
              <p className="text-black text-lg leading-snug">29620 Torremolinos</p>
              <p className="text-black text-lg leading-snug">Málaga</p>
              <p className="text-gray-500 text-base leading-snug">T/O Café de Babbelaar</p>
              <a href="tel:612491089" className="flex items-center gap-2 pt-1 text-[#c8a45a] font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.5 2C6.261 2 2 6.261 2 11.5c0 1.886.526 3.648 1.432 5.153L2 22l5.428-1.411A9.454 9.454 0 0011.5 21c5.239 0 9.5-4.261 9.5-9.5S16.739 2 11.5 2z"/>
                </svg>
                612 491 089
              </a>
              <div className="flex flex-col gap-2 pt-1">
                <a href="https://instagram.com/costakebabistambul1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Costa Kebab Istambul 1
                </a>
                <a href="https://facebook.com/costakebabistambul1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Costa Kebab Istambul 1
                </a>
                <a href="https://tiktok.com/@costakebabistambul1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                  Costa Kebab Istambul 1
                </a>
              </div>
            </div>
            {/* Full-width map below */}
            <a
              href="https://maps.app.goo.gl/HzH7JDRTcW3ENWJm8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100!2d-4.5024!3d36.6207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f18!3m3!1m2!1s0xd72f7b8b1f1f1f1%3A0x0!2sC%2F+Bulto+22%2C+La+Carihuela%2C+29620+Torremolinos!5e0!3m2!1sen!2ses!4v1"
                width="100%"
                height="450"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Costa Kebab Istambul 1 location"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-8 text-zinc-500 text-xs tracking-wide">
        © {new Date().getFullYear()} Costa Kebab Istambul 1. All rights reserved.
      </footer>
    </div>
      </div>
    </>
  );
}
