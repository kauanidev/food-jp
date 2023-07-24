export const Instructions = () => {
  return (
    <section className="container mx-auto flex items-center justify-between flex-col lg:flex-row gap-20 lg:gap-4">
      <img
        className="aspect-square lg:aspect-auto lg:h-[500px] w-[604px] object-cover rounded-2xl"
        src="/image/plate.png"
        alt="Prato quente tradicional japonês"
      />
      <div className="text-center lg:text-left lg:max-w-[500px] text-dark-10">
        <h2 className="text-3xl md:text-5xl font-semibold font-title mb-6 leading-[130%]">
          Feita de forma tradicional
        </h2>
        <p className="text-xl md:text-2xl mb-10 leading-[160%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          className="text-xl md:text-2xl font-medium text-brand underline underline-offset-8"
          href="#"
        >
          Ler mais sobre o modo de preparo
        </a>
      </div>
    </section>
  );
};
