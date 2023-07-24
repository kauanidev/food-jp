export const Hero = () => {
  return (
    <section className="container mx-auto flex justify-between items-center mb-[100px] sm:mt-[60px]">
      <div className="text-dark-10 text-center lg:text-left">
        <h1 className="font-semibold font-title text-3xl sm:text-5xl mb-6">
          Comida Oriental
        </h1>
        <p className="text-xl sm:text-2xl lg:max-w-[520px] mb-8 sm:mb-12">
          A culinária Japonesa é bastante equilibrada, sendo muito rica em
          peixes (ômega 3), vegetais, massas e ingredientes frescos.
        </p>
        <button className="bg-brand px-[90px] py-3.5 rounded-[10px] text-xl sm:text-2xl font-semibold text-dark-40 w-full sm:w-max">
          Cardápio
        </button>
      </div>
      <img className="hidden lg:block" src="/image/sushi.png" alt="Sushi" />
    </section>
  );
};
