"use client";
import Image from "next/image";
import { faGlobe,faAnglesUp,faSackDollar, faCertificate, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AboutSectionTwo = () => {
  // <FontAwesomeIcon icon="fa-solid fa-sack-dollar" />

  const { theme, setTheme } = useTheme();

  let [iconColor, setIconColor] = useState("");
  useEffect(() => {
    setIconColor(getCurrentColor());
  }, [theme]);
  const getCurrentColor = () => {
    return theme === "dark" ? "white" : "black";
  };
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                // src="/images/bg4.jpg"
                src="/images/dummy.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <FontAwesomeIcon
                  icon={faSackDollar}
                  color={iconColor}
                  size={"lg"}
                  style={{ display: "inline-block", marginRight: "10px" }}
                />
                <h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  style={{ display: "inline-block" }}
                >
                  Higher pay
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  BIM professionals generally receive higher pay, with an
                  average of 40% more compared to other professionals with
                  similar experience.
                </p>
              </div>
              <div className="mb-9">
                <FontAwesomeIcon
                  icon={faGlobe}
                  color={iconColor}
                  size={"lg"}
                  style={{ display: "inline-block", marginRight: "10px" }}
                />
                <h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  style={{ display: "inline-block" }}
                >
                  Global opportunities
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  There are global opportunities available for BIM professionals
                  to work on large-scale projects.
                </p>
              </div>
              <div className="mb-9">
                <FontAwesomeIcon
                  icon={faAnglesUp}
                  color={iconColor}
                  size={"lg"}
                  style={{ display: "inline-block", marginRight: "10px" }}
                />
                <h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  style={{ display: "inline-block" }}
                >
                  Demand
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The demand for BIM professionals in the construction industry
                  is currently very high
                </p>
              </div>
              <div className="mb-9">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  color={iconColor}
                  size={"lg"}
                  style={{ display: "inline-block", marginRight: "10px" }}
                />
                <h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  style={{ display: "inline-block" }}
                >
                  Job security
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Professionals in the field of BIM can enjoy a sense of job
                  security in their industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
