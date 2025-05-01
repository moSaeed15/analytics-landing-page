import Image from 'next/image';

type LogoIconProps = {
  icon: {
    src: string;
    alt: string;
  };
};

const LogoIcon = ({ icon }: LogoIconProps) => {
  const { src, alt } = icon;
  return (
    <div className="flex-none flex-center marquee-item">
      <Image src={src} alt={alt} width={120} height={48} />
    </div>
  );
};

const Timeline = () => {
  const logosIconsList = [
    {
      src: '/icons/Company-logo.svg',
      alt: 'Amazon',
    },
    {
      src: '/icons/Company-logo-1.svg',
      alt: 'dribble',
    },
    {
      src: '/icons/Company-logo-2.svg',
      alt: 'hubspot',
    },
    {
      src: '/icons/Company-logo-3.svg',
      alt: 'notion',
    },
    {
      src: '/icons/Company-logo-4.svg',
      alt: 'netflix',
    },
    {
      src: '/icons/Company-logo-5.svg',
      alt: 'zoom',
    },
  ];

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logosIconsList.map(icon => (
            <LogoIcon key={icon.alt} icon={icon} />
          ))}
          {logosIconsList.map(icon => (
            <LogoIcon key={icon.alt} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
