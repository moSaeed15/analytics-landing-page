import Image from 'next/image';

type TeamMemberProps = {
  name: string;
  position: string;
  experience: string;
  picture: string;
};

const TeamMember = ({
  name,
  position,
  experience,
  picture,
}: TeamMemberProps) => {
  return (
    <div className="rounded-4xl dark-border  py-10 px-9">
      <div className=" flex gap-5 relative">
        <Image
          src={picture}
          alt={name}
          width={100}
          height={100}
          style={{ width: '100px', height: '100px' }}
        />
        <div className="self-end">
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin"
          width={40}
          height={40}
          className="absolute top-0 right-0 h-10 w-10"
        />
      </div>
      <span className="mx-auto block h-px bg-black my-5"></span>
      <p>{experience}</p>
    </div>
  );
};

export default TeamMember;
