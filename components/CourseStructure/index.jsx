"use client";
import SectionTitle from "../Common/SectionTitle";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "next-themes";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 448 512" className="fill-current">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
  </svg>
);

const CourseStructure = () => {
  const { theme, setTheme } = useTheme();
  let [topic, setTopic] = useState("");
  const handleTopic = (currentTopic) => {
    if (topic === currentTopic) {
      setTopic("");
      return;
    }
    setTopic(currentTopic);
  };

  const openIcon = (
    <svg
      data-accordion-icon
      className="h-6 w-6 shrink-0 rotate-180"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      data-accordion-icon
      className="h-6 w-6 shrink-0 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  return (
    <section className="mb-9 bg-primary/[.01] pt-16  md:pt-20 lg:pt-28">
      <SectionTitle
        title="Course Structure"
        paragraph="Eagle's view of all the major topics covered in the course."
        center
        width="665px"
      />
      <div className="container -mt-9 md:w-3/4 lg:w-3/4">
        <div
          className="wow fadeInUp flex w-full justify-center"
          data-wow-delay=".1s"
        >
          {/* <ul className="text-gray-500 dark:text-gray-400 mb-9 max-w-md list-inside space-y-1">
            <li className=" ">
              <a
                className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 light:bg-white block rounded-lg border p-6 shadow hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("1");
                }}
              >
                <div>
                  <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white"
                  style={{ display: "inline-block" }}>
                    Noteworthy technology acquisitions 2021 
                  </h5>
                  <FontAwesomeIcon
                    icon={faCertificate}
                    color={theme === "dark" ? "white" : "black"}
                    size={"lg"}
                    style={{ display: "inline-block", float: "bottom" }}
                  />
                </div>
                {topic === "1" && (
                  <p className="text-gray-700 dark:text-gray-400 font-normal">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                )}
              </a>
            </li>
            <li className="">
              <a
                className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 light:bg-white block rounded-lg border p-6 shadow hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("2");
                }}
              >
                <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                {topic === "2" && (
                  <p
                    className="wow fadeInUp text-gray-700 dark:text-gray-400 font-normal"
                    data-wow-delay=".1s"
                  >
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                )}
              </a>
            </li>
            <li className="">
              <a
                className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 light:bg-white block rounded-lg border p-6 shadow hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("3");
                }}
              >
                <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                {topic === "3" && (
                  <p
                    className="wow fadeInUp text-gray-700 dark:text-gray-400 font-normal"
                    data-wow-delay=".1s"
                  >
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                )}
              </a>
            </li>
            <li className="">
              <a
                className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 light:bg-white block rounded-lg border p-6 shadow hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("4");
                }}
              >
                <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                {topic === "4" && (
                  <p
                    className="wow fadeInUp text-gray-700 dark:text-gray-400 font-normal"
                    data-wow-delay=".1s"
                  >
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                )}
              </a>
            </li>
            <li className="">
              <a
                className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 light:bg-white block rounded-lg border p-6 shadow hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("5");
                }}
              >
                <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                {topic === "5" && (
                  <p
                    className="wow fadeInUp text-gray-700 dark:text-gray-400 font-normal"
                    data-wow-delay=".1s"
                  >
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                )}
              </a>
            </li>
            <li className="">
              <a
                className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 light:bg-white block rounded-lg border p-6 shadow hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("6");
                }}
              >
                <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                {topic === "6" && (
                  <p
                    className="wow fadeInUp text-gray-700 dark:text-gray-400 font-normal"
                    data-wow-delay=".1s"
                  >
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                )}
              </a>
            </li>
          </ul> */}

          <div id="accordion-flush" className="w-full lg:pl-12 lg:pr-12 mb-9">
            <h2>
              <button
                type="button"
                className="text-gray-500 pl-5 rounded border-gray-200 dark:border-gray-700 dark:text-gray-400 flex w-full items-center justify-between border-b py-5 text-left font-medium hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("1");
                }}
              >
                <span> BIM Fundamentals</span>
                {topic === "1" ? openIcon : closeIcon}
              </button>
            </h2>
            {topic === "1" && (
              <div className="border-gray-200 dark:border-gray-700 w-full border-b py-5 font-light bg-primary/[.08] md:pl-5 lg:pl-5 rounded">
                <p className="text-gray-500 dark:text-gray-400 mb-2 ">
                  Understand Bim concept and workflow and how its revolutnize
                  the AEC industry
                </p>
              </div>
            )}

            <h2>
              <button
                type="button"
                className="text-gray-500 pl-5 rounded border-gray-200 dark:border-gray-700 dark:text-gray-400 flex w-full items-center justify-between border-b py-5 text-left font-medium hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("2");
                }}
              >
                <span>BIM in concept stage</span>
                {topic === "2" ? openIcon : closeIcon}
              </button>
            </h2>
            {topic === "2" && (
              <div className="border-gray-200 dark:border-gray-700 w-full border-b py-5 font-light bg-primary/[.08] md:pl-5 lg:pl-5 rounded">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Learn the importance of bim in concept stage where you learn
                  autocad workflow and it is interlink with 3D environment.
                </p>
              </div>
            )}

            <h2>
              <button
                type="button"
                className="text-gray-500 pl-5 rounded border-gray-200 dark:border-gray-700 dark:text-gray-400 flex w-full items-center justify-between border-b py-5 text-left font-medium hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("3");
                }}
              >
                <span>BIM authoring software</span>
                {topic === "3" ? openIcon : closeIcon}
              </button>
            </h2>
            {topic === "3" && (
              <div className="border-gray-200 dark:border-gray-700 w-full border-b py-5 font-light bg-primary/[.08] md:pl-5 lg:pl-5 rounded">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Learn different advanced modeling tool used in Bim workflow
                  and how Vr and real time rendering has enable client
                  presentation more interactive and immerse
                </p>
              </div>
            )}

            <h2>
              <button
                type="button"
                className="text-gray-500 pl-5 rounded border-gray-200 dark:border-gray-700 dark:text-gray-400 flex w-full items-center justify-between border-b py-5 text-left font-medium hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("4");
                }}
              >
                <span>Coordination and collaboration in BIM environments</span>
                {topic === "4" ? openIcon : closeIcon}
              </button>
            </h2>
            {topic === "4" && (
              <div className="border-gray-200 dark:border-gray-700 w-full border-b py-5 font-light bg-primary/[.08] md:pl-5 lg:pl-5 rounded">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Explore new way of colaboration and coordination with the
                  team. learn various platform which is efficient for seamless
                  coordination
                </p>
              </div>
            )}

            <h2>
              <button
                type="button"
                className="text-gray-500 pl-5 rounded border-gray-200 dark:border-gray-700 dark:text-gray-400 flex w-full items-center justify-between border-b py-5 text-left font-medium hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("5");
                }}
              >
                <span>BIM process/ production and documentation</span>
                {topic === "5" ? openIcon : closeIcon}
              </button>
            </h2>
            {topic === "5" && (
              <div className="border-gray-200 dark:border-gray-700 w-full border-b py-5 font-light  bg-primary/[.08] md:pl-5 lg:pl-5 rounded">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                Learn the importance of documentation and how different tool is been used for increasing productivity and learn why BIM production is important to meet client deadline.
                </p>
              </div>
            )}

            <h2>
              <button
                type="button"
                className="text-gray-500 pl-5 rounded border-gray-200 dark:border-gray-700 dark:text-gray-400 flex w-full items-center justify-between border-b py-5 text-left font-medium hover:bg-primary/[.03]"
                onClick={() => {
                  handleTopic("6");
                }}
              >
                <span>Final project internship submission report</span>
                {topic === "6" ? openIcon : closeIcon}
              </button>
            </h2>
            {topic === "6" && (
              <div className="border-gray-200 dark:border-gray-700 w-full border-b py-5 font-light bg-primary/[.08] md:pl-5 lg:pl-5 rounded">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Work on live capstone project to apply everything you learnt
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
