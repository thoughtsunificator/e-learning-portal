"use client";
import SectionTitle from "../Common/SectionTitle";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 448 512" className="fill-current">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
  </svg>
);

const CourseImp = () => {
  const List = ({ text }) => (
    <>
      <p className="mb-5 flex items-center text-lg font-semibold  ">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        {text}
      </p>
    </>
  );

  return (
    <section className="mb-9 bg-primary/[.03] pt-16  md:pt-20 lg:pt-28">
      <div className="container">
        <div className=" border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Course Benefits"
                paragraph="Explore the benefits of taking BIM Course"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Become a BIM expert in just 4 months of part time, online E-learning." />
                    <List text="Gain the opportunity to avail the benefits of an International 2 month internship." />
                    <List text="Learn from AEC professional leading BIM at top tier firm world wide." />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Work on a live, structured project (US/GCC region) to master your skill." />
                    <List text="Get placement assistance and guidance to land a job in global operating firm." />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="grid justify-items-center place-items-center md:mt-24 lg:mt-24">
              <div className="-mt-24 ">
                <Image
                  src="/images/opp_svg/1-min.png"
                  height={240}
                  width={300}
                />
              </div>

              <div className="-mt-24 ">
                <Image
                  src="/images/opp_svg/2-min.png"
                  height={240}
                  width={300}
                />
              </div>
              <div className="-mt-24 ">
                <Image
                  src="/images/opp_svg/3-min.png"
                  height={240}
                  width={300}
                />
              </div>
              <div className="-mt-24 ">
                <Image
                  src="/images/opp_svg/4-min.png"
                  height={240}
                  width={300}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseImp;
