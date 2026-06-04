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
  return (
    <div className="min-h-screen">
      {/* Logo — not sticky, just sits at top */}
      <div className="py-2 px-4 text-center border-b border-[#c8a45a]/20">
        <div className="flex items-center justify-center gap-3">
          <span className="text-[#c8a45a] text-2xl">❧</span>
          <span className="text-[#c8a45a] text-sm tracking-[0.35em] uppercase font-semibold">
            Kebab Istambul
          </span>
          <span className="text-[#c8a45a] text-2xl">❧</span>
        </div>
      </div>

      {/* Menu Header */}
      <header className="pt-4 pb-2 px-4 text-center">
        <h1 className="text-[#c0392b] text-3xl font-black tracking-widest uppercase leading-none">
          MENU
        </h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-px w-12 bg-[#c8a45a]" />
          <span className="text-[#c8a45a] text-sm">✦</span>
          <div className="h-px w-12 bg-[#c8a45a]" />
        </div>
      </header>

      {/* Sticky Category Nav — between MENU title and food items */}
      <nav className="tab-nav sticky top-0 z-50 overflow-x-auto mt-4">
        <div className="flex gap-1 px-2 py-2 w-max">
          {[
            { emoji: "🍽️", label: "Specials", href: "#specials" },
            { emoji: "🌯", label: "Rollo", href: "#rollo-kebab" },
            { emoji: "🥙", label: "Pita", href: "#pita-kebab" },
            { emoji: "🍔", label: "Burger", href: "#burger-falafel" },
            { emoji: "🍗", label: "Pollo", href: "#pollo-asado" },
            { emoji: "🍕", label: "Pizza", href: "#pizzas" },
            { emoji: "🍟", label: "Kapsalon", href: "#kapsalon" },
            { emoji: "🧆", label: "Patatas", href: "#patatas" },
          ].map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-100 active:translate-y-0.5 active:brightness-125"
              style={{
                background: "linear-gradient(180deg, #2a2a2a 0%, #151515 100%)",
                boxShadow: "0 3px 0 rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(200,164,90,0.15)",
              }}
            >
              <span className="text-xl leading-none">{tab.emoji}</span>
              <span className="text-[10px] font-semibold text-[#c8a45a] uppercase tracking-wide leading-none">{tab.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Menu Items */}
      <main className="px-3 sm:px-4 pb-10 w-full max-w-lg mx-auto">
        <div id="specials" className="scroll-mt-14">
        <ul className="space-y-0">
          {menuItems.map((item) => (
            <li key={item.id}>
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

        {/* Extra Category Sections */}
        <div className="mt-8 space-y-6">
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
            <div key={section.title} id={idMap[section.title]} className="scroll-mt-14 border border-[#c0392b]/40 rounded-sm overflow-hidden">
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
            </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pb-8 text-zinc-400 text-xs tracking-wide">
        All meals include a soft drink unless stated otherwise
      </footer>
    </div>
  );
}
