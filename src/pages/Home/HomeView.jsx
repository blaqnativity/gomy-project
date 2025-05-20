import Hero from "./Hero";
import Features from "./Features";
import Process from "./Process";
import Newsletter from "../../components/Newsletter";
import FAQ from "../../components/FAQ";

const HomeView = () => {
  return (
    <div>
      <Hero />
      <Process />
      <Features />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default HomeView;
