import AboutSectionTwo from "../About/AboutSectionTwo";
import SectionTitle from "../Common/SectionTitle";

const CourseImportance = () => {
  return (
    <div>
      <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
        <SectionTitle
          title="Benefits of Pursuing a Career in BIM"
          paragraph="Discover the High Demand, Global Opportunities, Higher Pay, and Job Security in this Exciting Field!"
          center
        />
        <AboutSectionTwo />
      </section>
    </div>
  );
};
export default CourseImportance;
