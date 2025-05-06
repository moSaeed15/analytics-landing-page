import { teamMembersList } from '@/constants';
import TeamMember from './TeamMember';

const TeamMembers = () => {
  return (
    <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
      {teamMembersList.map(member => (
        <TeamMember
          key={member.id}
          experience={member.experience}
          position={member.position}
          name={member.name}
          picture={member.picture}
        />
      ))}
    </div>
  );
};

export default TeamMembers;
