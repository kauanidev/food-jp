export const Placement = () => {
  return (
    <section className="container mx-auto py-[100px]">
      <h2 className="text-center lg:text-left text-3xl sm:text-5xl font-semibold font-title text-dark-10 leading-[123%] mb-10 sm:mb-12">
        Localização
      </h2>
      <div className="w-fullflex flex-col justify-center items-center">
        <img
          className="mb-10 sm:mb-14 rounded-2xl"
          src="/image/map.png"
          alt="Mapa da localização do restaurante. Praia Vermelha/Urca."
        />
        <div className="h-12 sm:h-[70px] flex justify-center items-center w-full">
          <div className="h-full flex-1 border rounded-l-[10px] border-dark-10 w-full max-w-[630px] flex items-center">
            <img className="px-2 sm:px-5" src="/image/pin.svg" />
            <input
              className="flex-1 sm:text-2xl text-dark-10 w-full h-full focus:outline-none bg-dark-40"
              placeholder="Localização para entrega"
            />
          </div>
          <button className="border border-brand bg-brand px-2 sm:px-5 h-full rounded-r-[10px] text-2xl text-dark-40 font-semibold">
            <img
              className="min-w-[20px]"
              src="/image/search.svg"
              alt="pesquisar"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
