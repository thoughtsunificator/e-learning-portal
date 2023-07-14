"use client";
import React from "react";
import styles from "./course.module.scss";
import { CourseContext } from "../../common/Dashboard";
import CourseMaterial from "./CourseMaterial";
import CourseVideoSection from "./CourseVideoSection";
import { useTheme } from "next-themes";

const drawerWidth = 240;
const CourseDetails = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const { theme, setTheme } = useTheme();
  let value = React.useContext(CourseContext);
  let [showReadingSection, setShowReadingSection] = React.useState(true);

  return (
    <div className="-mt-10 w-full">
      <div
        className={`mt-5 w-full border-b border-b-black/20 py-5 dark:border-b-white/20`}>
        <div
          className="flex flex-col gap-3 md:flex-row md:items-center"
          id="254:2002">
          <svg
            className={`${styles.arrowLeft} cursor-pointer`}
            fill={theme === "dark" ? "white" : "black"}
            width="18"
            height="13"
            viewBox="0 0 448 512"
            onClick={() => {
              props.setOpenSlideBar(true);
              props.setShowModuleDetails(false);
            }}>
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <h1 className="font-inter grow whitespace-nowrap text-left text-base font-normal text-black dark:text-white lg:text-2xl">
            {value?.data?.course_title ?? "--"}
          </h1>
          <div className="flex items-center gap-x-10 md:ml-auto">
            <p
              onClick={() => {
                setShowReadingSection(true);
                setActiveTab(0);
              }}
              className={
                activeTab === 0
                  ? "text-[#42bbff]"
                  : "text-black dark:text-white" +
                    " text-md cursor-pointer  whitespace-nowrap font-normal"
              }>
              videos
            </p>
            <p
              onClick={() => {
                setShowReadingSection(false);
                setActiveTab(1);
              }}
              className={
                activeTab === 1
                  ? "text-[#42bbff]"
                  : "text-black dark:text-white" +
                    " text-md cursor-pointer whitespace-nowrap font-normal"
              }>
              study material
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        {showReadingSection ? (
          <>
            <CourseVideoSection
              selectedModule={value?.data?.modules?.[props.selectedModule]}
            />
          </>
        ) : (
          <CourseMaterial className="mx-auto mt-10 grid w-full grid-cols-1 place-items-center justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5" />
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
