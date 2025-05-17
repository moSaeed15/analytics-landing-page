import Section from '../Section';
import Cta from './Cta';
import ServiceCard from './ServiceCard';
import { ServiceCards } from '@/constants/index';

const Services = () => {
  return (
    <Section
      title="Services"
      description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
    >
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 ">
        {ServiceCards.map(service => (
          <ServiceCard
            key={service.title}
            className={service.className}
            image={service.image}
            textClassName={service.textClassName}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>

      <Cta />
    </Section>
  );
};

export default Services;
