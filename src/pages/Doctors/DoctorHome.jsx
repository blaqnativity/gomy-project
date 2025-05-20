import Hero from "./Hero";
import CTA from "./CTA";
import Consult from "./ConsultType";
import Testimonials from "../../components/Testimonials";
import Accordions from "./QuestionsAccordion";

const DoctorHome = () => {
  return (
    <>
      <Hero />
      <CTA />
      <Consult />
      <Testimonials />
      <Accordions />
    </>
  );
};

export default DoctorHome;
