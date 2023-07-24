import { MenuItem } from "./menu-item";

const menuItems = [
  {
    image: "/image/img-3.png",
    name: "Ramen de Frango",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 30,
  },
  {
    image: "/image/img-1.png",
    name: "Ramen Apimentado",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 30,
  },
  {
    image: "/image/img-2.png",
    name: "Ramen Tradicional",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 30,
  },
];

export const Menu = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <h2 className="text-3xl sm:text-5xl font-semibold font-title text-dark-10 text-center">
        Mais populares
      </h2>
      <div className="grid lg:grid-cols-3 gap-24 lg:gap-11 mt-24 sm:mt-[160px]">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.name} item={menuItem} />
        ))}
      </div>
    </section>
  );
};
