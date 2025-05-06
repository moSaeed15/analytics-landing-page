import { workingProcessList } from '@/constants';
import WorkingProcessCard from './WorkingProcessCard';

const WorkingProcess = () => {
  return (
    <section className="padding-x flex flex-col">
      <h2 className="green-title text-center self-center ">Our Working</h2>
      <h2 className="green-title text-center self-center">Process</h2>
      <p className="mt-7 mb-7  text-center max-w-prose">
        Step-by-Step Guide to Achieving Your Business Goals
      </p>
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
    </section>
  );
};

export default WorkingProcess;
