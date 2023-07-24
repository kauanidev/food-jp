type MenuItemProps = {
  item: {
    image: string;
    name: string;
    description: string;
    price: number;
  };
};

export const MenuItem = ({ item }: MenuItemProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(item.price);

  return (
    <div className="bg-dark-30 rounded-[32px] flex flex-col items-center text-center sm:min-h-[450px] px-4 pb-[32px]">
      <img
        className="h-[290px] w-[290px] object-contain relative -mt-[80px] mb-4 sm:mb-10"
        src={item.image}
        alt={`foto do prato ${item.name}`}
      />
      <h4 className="text-2xl sm:text-[32px] font-title font-medium mb-4">
        {item.name}
      </h4>
      <p className="sm:text-lg text-dark-20 mb-6">{item.description}</p>
      <h5 className="font-medium text-2xl sm:text-3xl text-dark-10 font-title">
        {formattedPrice}
      </h5>
    </div>
  );
};
