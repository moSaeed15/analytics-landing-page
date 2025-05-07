import Image from 'next/image';
import Link from 'next/link';

const CaseStudyCard = ({ text }: { text: string }) => {
  return (
    <div className="bg-dark py-10 px-12 rounded-4xl snap-start flex-shrink-0 h-full ">
      <p className="text-white">{text}</p>
      <Link href="" className="text-green flex gap-4 mt-7">
        Learn more{' '}
        <Image
          src="/icons/arrow-green.svg"
          width={20}
          height={20}
          alt="arrow"
          className="h-5 w-5"
        />
      </Link>
    </div>
  );
};

export default CaseStudyCard;
