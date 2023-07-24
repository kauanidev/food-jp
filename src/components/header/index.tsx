const navItems = [
  {
    title: "Início",
    href: "inicio",
  },
  {
    title: "Cardápio",
    href: "cardapio",
  },
  {
    title: "Sobre",
    href: "sobre",
  },
];

export const Header = () => {
  return (
    <header className="container mx-auto py-10 flex items-center justify-between">
      <p className="font-bold font-title text-2xl lg:text-[40px] text-dark-10">
        Food<span className="text-brand">JP</span>
      </p>
      <nav className="items-center justify-center gap-[90px] hidden lg:flex">
        {navItems.map((navItem) => (
          <a
            className="font-medium text-2xl text-dark-10 hover:text-brand transition-colors"
            href={`#${navItem.href}`}
            key={navItem.href}
          >
            {navItem.title}
          </a>
        ))}
      </nav>
      <button className="hidden lg:block px-[60px] py-2.5 rounded-[10px] border-2 border-dark-10 text-2xl font-semibold text-dark-10 hover:text-brand transition-colors hover:border-brand">
        Entrar
      </button>

      <button className="block lg:hidden">
        <img src="/image/menu.svg" />
      </button>
    </header>
  );
};
