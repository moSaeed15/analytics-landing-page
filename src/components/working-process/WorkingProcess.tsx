import { workingProcessList } from '@/constants';
import WorkingProcessCard from './WorkingProcessCard';
import Section from '../Section';

const WorkingProcess = () => {
  return (
    <Section
      title="Our Working"
      subtitle="Process"
      description="Step-by-Step Guide to Achieving Your Business Goals"
    >
      <div className="flex flex-col gap-5">
        {workingProcessList.map(item => (
          <WorkingProcessCard
            key={item.id}
            title={item.title}
            description={item.description}
            number={item.id}
          />
        ))}
      </div>
    </Section>
  );
};

export default WorkingProcess;
