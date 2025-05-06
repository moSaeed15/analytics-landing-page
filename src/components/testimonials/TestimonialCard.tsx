import TestiomonialBubble from './TestiomonialBubble';

const TestimonialCard = () => {
  return (
    <div className="flex flex-col items-center ">
      <TestiomonialBubble />
      <div className=" mt-10">
        <h4 className="text-green">John Smith</h4>
        <p>Marketing Director at XYZ Corp</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
