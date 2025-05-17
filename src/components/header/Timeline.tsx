import { logosIconsList } from '@/constants';
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
      <Image
        src={src}
        alt={alt}
        width={120}
        height={48}
        className="w-32 h-auto"
      />
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-40">
        <div className="marquee-box md:gap-12 gap-5">
          {logosIconsList.map(icon => (
            <LogoIcon key={icon.alt} icon={icon} />
          ))}

          {/* repeated the icons to create a continuous effect */}

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
