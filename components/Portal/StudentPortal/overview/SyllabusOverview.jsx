"use client";
import React from "react";
import Timeline from "./Timeline";
import styles from "./Overview.module.scss";
import { CourseContext } from "../../common/Dashboard";
import _ from "lodash";
// This page contains all the pages related to
const SyllabusOverview = (props) => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const [moduleCards, setModuleCards] = React.useState([]);

  let value = React.useContext(CourseContext);
  React.useEffect(() => {
    if (value !== null) {
      let modules = _.get(value, "data.modules", "");
      setModuleCards(
        _.orderBy(
          _.map(modules, (module, index) => {
            return {
              title: module?.module_name ?? "--",
              content: module?.module_desc_short ?? "--",
              completed: false,
              content_full: module?.module_desc ?? "--",
              index,
            };
          }),
          "index"
        )
      );
    }
  }, [value]);

  return (
    <>
      <h1 className="font-inter text-xl font-medium capitalize text-black dark:text-white md:text-2xl">
        {value?.data?.course_title ?? "--"}
      </h1>
      <div className="mt-7 flex flex-col  items-start justify-center gap-[2rem] md:mt-[4rem] md:flex-row">
        <div className="primary_scrollbar mx-auto max-h-[40vh] max-w-md overflow-y-auto pr-10 md:max-h-[70vh]">
          <Timeline
            cards={moduleCards}
            className="max-h-[15rem] cursor-pointer text-ellipsis rounded-2xl bg-[#384E85] p-5 dark:bg-[#AAB0CA] "
            setCurrentCard={setCurrentCard}></Timeline>
        </div>
        <div
          className={
            "w-full overflow-y-scroll md:h-[80vh] " + styles.noscrollbar
          }>
          <h1 className="font-inter mb-3 text-center text-2xl font-normal text-black dark:text-white">
            {moduleCards[currentCard]?.title}
          </h1>
          <p className="font-inter text-base/7 text-black dark:text-white">
            {moduleCards[currentCard]?.content_full}
          </p>
        </div>
      </div>
    </>
  );
};

export default SyllabusOverview;
