import { Feedback } from "./feedback";

const feedbacks = [
  {
    image: "/image/profile1.png",
    name: "Daniele Almeida",
    content: "Ótimo serviço! Encantada com a qualidade dos pratos.",
  },
  {
    image: "/image/profile2.png",
    name: "Ricardo França",
    content:
      "Não é apenas a comida excelente, o serviço torna a experiência especial.",
  },
];

export const Feedbacks = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-center lg:text-left mb-12 text-3xl sm:text-5xl font-semibold font-title text-dark-10">
        Comentários
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.name} feedback={feedback} />
        ))}
      </div>
    </section>
  );
};
