
import Newsetler from "../layout/Newsetler";
import ScrollCompanies from "../layout/ScrollCompanies";
import HeroSection from "../layout/heroSection";
import JobCard from "../layout/jobCard";
import Courses from "../layout/courses";

function Home() {
  return (
    <>
      <HeroSection />
      <ScrollCompanies />
      <JobCard />
      <Courses />
      <Newsetler />
    </>
  );
}

export default Home;
