import CaseStudies from '@/components/CaseStudies';
import Header from '@/components/header/Header';
import Services from '@/components/services/Services';
import WorkingProcess from '@/components/WorkingProcess';

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <CaseStudies />
      <WorkingProcess />
    </div>
  );
}
