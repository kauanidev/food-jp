type FeedbackProps = {
  feedback: {
    image: string;
    name: string;
    content: string;
  };
};

export const Feedback = ({ feedback }: FeedbackProps) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left bg-dark-30 p-6 sm:p-10 rounded-2xl">
      <img
        className="h-[120px] w-[120px] rounded-full object-cover"
        src={feedback.image}
      />
      <p className="text-2xl sm:text-[32px] text-dark-10 font-medium font-title sm:leading-[123%] mt-6">
        {feedback.name}
      </p>
      <span className="sm:text-2xl text-dark-20 sm:leading-[160%] block my-4 max-w-[470px]">
        {feedback.content}
      </span>
      <img src="/image/stars.svg" />
    </div>
  );
};
