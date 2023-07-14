import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="about_us">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <SectionTitle
                title="Aeczone"
                mb="44px"
              />
              <p>
                Our BIM (Building Information Modeling) course offers much more
                than just training, as we provide our students with an
                international internship opportunity to gain real-world
                experience. We strive to help our students flourish in the BIM
                field by offering regular career guidance and job-oriented
                courses, with a focus on better market reach. Additionally, we
                provide placement assistance to our graduates, ensuring that
                they have the best possible chance of success in their chosen
                career.
              </p>
              <br />
              <strong>
                " Our BIM course offers international internships, job-oriented
                training, and placement assistance to help our students thrive
                in the industry. "
              </strong> <br /><br />
              <p>
                Ready to level up your BIM game and take on the world? Join
                Aeczone's 2-month Dubai internship program and unlock your
                potential. With our expert guidance, job-oriented training, and
                exciting international opportunities, the sky's the limit. Let's
                rock the BIM world together!
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/aeczone2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
