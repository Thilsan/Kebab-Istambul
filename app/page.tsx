const menuItems = [
  {
    id: 1,
    name: "1/2 Chicken",
    description: "Con patata con bebida",
    price: "10.95",
  },
  {
    id: 2,
    name: "Chicken Karry",
    description: "With pilow rice, soft drink",
    price: "13.95",
  },
  {
    id: 3,
    name: "Chicken Tikka Masolla",
    description: null,
    price: "13.95",
  },
  {
    id: 4,
    name: "Fish and Chips",
    description: "With drinks",
    price: "12.95",
  },
  {
    id: 5,
    name: "Seekh Kebab",
    description: "With rice or chips or salad (any one) – with drinks",
    price: "10.95",
  },
  {
    id: 6,
    name: "FriKandel",
    description: "With chips and salad, with drinks",
    price: "11.95",
  },
  {
    id: 7,
    name: "Chicken Finger",
    description: "With rice and salad, drinks",
    price: "10.95",
  },
  {
    id: 8,
    name: "Fry Chicken",
    description: "With drinks – with salad, chips",
    price: "11.95",
  },
  {
    id: 9,
    name: "Onion Bazi",
    description: "Tortilla de Cebolla",
    price: "4.95",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white pt-8 pb-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-[#c8a45a] text-lg">❧</span>
          <span className="text-[#c8a45a] text-xs tracking-[0.3em] uppercase font-medium">
            Kebab Istambul
          </span>
          <span className="text-[#c8a45a] text-lg">❧</span>
        </div>
        <h1 className="text-[#c0392b] text-6xl font-black tracking-widest uppercase leading-none">
          MENU
        </h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="h-px w-12 bg-[#c8a45a]" />
          <span className="text-[#c8a45a] text-sm">✦</span>
          <div className="h-px w-12 bg-[#c8a45a]" />
        </div>
      </header>

      {/* Menu Items */}
      <main className="px-4 pb-10 max-w-lg mx-auto">
        <ul className="space-y-0">
          {menuItems.map((item) => (
            <li key={item.id}>
              <div className="flex items-start gap-3 py-4">
                {/* Number badge */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#c0392b] flex items-center justify-center mt-0.5">
                  <span className="text-[#c0392b] text-sm font-bold leading-none">
                    {item.id}
                  </span>
                </div>

                {/* Name + description */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-semibold text-base leading-snug">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="text-zinc-500 text-sm leading-snug mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <span className="text-[#c8a45a] font-bold text-lg leading-snug">
                    {item.price}
                    <span className="text-[#c8a45a] text-base font-normal">
                      £
                    </span>
                  </span>
                </div>
              </div>
              {/* Divider */}
              {item.id < menuItems.length && (
                <div className="border-b border-dashed border-zinc-300" />
              )}
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="text-center pb-8 text-zinc-400 text-xs tracking-wide">
        All meals include a soft drink unless stated otherwise
      </footer>
    </div>
  );
}
