import Cta from './Cta';
import ServiceCard from './ServiceCard';
import { ServiceCards } from '@/constants/index';

const Services = () => {
  return (
    <section className="padding-x flex flex-col justify-center  ">
      <h2 className="green-title rounded-md mb-8 self-center">Services</h2>
      <p className="max-w-prose text-center">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-10">
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
    </section>
  );
};

export default Services;
