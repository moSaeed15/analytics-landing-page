import CaseStudies from '@/components/case-studies/CaseStudies';
import Contact from '@/components/contact/Contact';
import Header from '@/components/header/Header';
import Services from '@/components/services/Services';
import Team from '@/components/team/Team';
import Testimonials from '@/components/testimonials/Testimonials';
import WorkingProcess from '@/components/working-process/WorkingProcess';

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}
