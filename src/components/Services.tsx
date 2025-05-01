import ServiceCard from './ServiceCard';

const Services = () => {
  const ServiceCards = [
    {
      className: 'bg-grey service-card  ',
      image: '/illustrations/tokyo-magnifier.png',
      textClassName: 'bg-green px-2 text-black ',
      icon: '/icons/arrow-green-black.svg',
      title: 'Search engine optimization',
    },
    {
      className: 'bg-green service-card  ',
      image: '/illustrations/tokyo-selecting-a-value.png',
      textClassName: 'bg-white px-2 text-black ',
      icon: '/icons/arrow-green-black.svg',
      title: 'Pay-per-click advertising',
    },
    {
      className: 'bg-dark service-card  ',
      image: '/illustrations/tokyo-browser-window.png',
      textClassName: 'bg-white px-2 text-black ',
      icon: '/icons/arrow-black-white.svg',
      title: 'Social Media Marketing',
    },
    {
      className: 'bg-grey service-card  ',
      image: '/illustrations/tokyo-sending-messages.png',
      textClassName: 'bg-green px-2 text-black ',
      icon: '/icons/arrow-green-black.svg',
      title: 'Email Marketing',
    },
    {
      className: 'bg-green service-card  ',
      image: '/illustrations/tokyo-many-browsers.png',
      textClassName: 'bg-white px-2 text-black ',
      icon: '/icons/arrow-green-black.svg',
      title: 'Content Creation',
    },
    {
      className: 'bg-black service-card  ',
      image: '/illustrations/tokyo-volumetric-analytics.png',
      textClassName: 'bg-white px-2 text-black ',
      icon: '/icons/arrow-black-white.svg',
      title: 'Analytics and Tracking',
    },
  ];
  return (
    <div className="padding-x flex flex-col justify-center  ">
      <h2 className="bg-green px-2 rounded-md mb-8 self-center">Services</h2>
      <p className="max-w-prose text-center">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>
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
    </div>
  );
};

export default Services;
