"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "../Pricing/OfferList";
import Course from "./Course";

const Courses = () => {
  return (
    <section id="courses" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Courses offered"
          paragraph="Expand Your Knowledge and Boost Your Career with Our Certification Courses."
          center
          width="665px"
        />
        <div
          className="containerd-flex justify-content-center lg:pl-3 lg:pr-3"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-2 ">
            <Course
              packageName="BIM Plus"
              subtitle="Our intensive course spans a period of four months, providing you with ample time to gain expertise and hone your skills. Join us and embark on an exciting journey towards your professional growth and development."
              productImg="/images/product/bim_plus.png"
              buildingImg="/images/building/build3-nobg.png"
            >
              <OfferList text="4 - Month certification course" status="active" />
              <OfferList text="Hands on project" status="active" />
              <OfferList text="Premium study material" status="active" />
              <OfferList text="Placement assistance" status="active" />
              <OfferList text="Capstone projects" status="active" />
              <OfferList text="Free Lifetime Updates" status="active" />
            </Course>
            <Course
              packageName="International BIM Plus"
              subtitle="Embark on a rewarding career path with our comprehensive 4-month certification course, including a coveted 2-month international internship. Expand your knowledge and gain valuable hands-on experience !"
              productImg="/images/product/bim_plus_int.png"
              buildingImg="/images/building/build2-nobg.png"
            >
              <OfferList text="2-month international internship" status="active" />
              <OfferList text="4-month certification course" status="active" />
              <OfferList text="Premium study material" status="active" />
              <OfferList text="Placement assistance" status="active" />
              <OfferList text="Capstone projects" status="active" />
              <OfferList text="Lifetime Access to study materials" status="active" />
              <OfferList text="Free Lifetime Updates" status="active" />
            </Course>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
