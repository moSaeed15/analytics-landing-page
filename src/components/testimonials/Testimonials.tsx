import Section from '../Section';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  return (
    <Section
      title="Testimonials"
      className="lg:mt-32 xl:mt-36"
      description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    >
      <TestimonialCarousel />
    </Section>
  );
};

export default Testimonials;
