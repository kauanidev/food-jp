const footerSections = [
  {
    title: "Contato",
    links: ["+55 21 9999-9999", "email@gmail.com"],
  },
  {
    title: "Sobre nós",
    links: ["Menu", "Valores", "Página principal"],
  },
  {
    title: "Serviços",
    links: ["Entrega", "Retirada"],
  },
];

export const Footer = () => {
  return (
    <footer className="container mx-auto flex-col lg:flex-row flex items-center gap-10 sm:gap-20 pb-[60px] sm:pb-[100px] sm:px-10 lg:px-0">
      <p className="font-bold font-title text-[40px] text-dark-10">
        Food<span className="text-brand">JP</span>
      </p>
      <div className="flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 sm:gap-4 flex justify-between w-full lg:max-w-[60%]">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-2xl lg:text-3xl font-medium text-dark-10 mb-4 sm:mb-6 font-title">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li className="lg:text-lg text-dark-20" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
