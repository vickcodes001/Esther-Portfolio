import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Experience from "./component/Experience";
import Featured from "./component/Featured";
import Header from "./component/Header";
import ProjectCarousel from "./component/ProjectCarousel";

const LandingPage = () => {
  return (
    <div className="">
      <Header />
      <ProjectCarousel />
      <Featured />
      <Experience />
      <About />
      <ContactMe />
    </div>
  );
};

export default LandingPage;
