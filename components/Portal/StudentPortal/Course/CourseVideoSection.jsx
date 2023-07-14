import React, { useEffect } from "react";
import { ModuleResourceType } from "@/src/shared/Constants";
import VideoSidebar from "./VideoSidebar";
import CourseVideo from "./CourseVideo";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiDownloadCloud,
} from "react-icons/fi";

const CourseVideoSection = (props) => {
  const courseSideBarRef = React.useRef();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [videoResources, setVideoResources] = React.useState({});
  const [videoIndex, setVideoIndex] = React.useState(0);
  const [next, setNext] = React.useState(false);
  const [prev, setPrev] = React.useState(true);

  useEffect(() => {
    const filteredResources = props.selectedModule.module_resources.filter(
      (resource) => resource.resource_type === "video"
    );
    setVideoResources(filteredResources[0]);
  }, []);

  const courseResourceType = (resource) => {
    switch (resource.resource_type) {
      case ModuleResourceType.text:
        return textResource(resource);
      case ModuleResourceType.video:
        return videoResource(resource);
      default:
        return null;
    }
  };
  const textResource = (resource) => {
    return (
      <div className="mr-3 mt-12" key={resource?.resource_id}>
        <p className="font-inter mt-1 text-sm/6">
          {resource?.resource_desc ?? "--"}
        </p>
      </div>
    );
  };

  const videoResource = (resource) => {
    return (
      <div className="mt-5" key={resource?.resource_id}>
        <CourseVideo url={resource?.resource_link} />
        {/* <h6 className="font-inter mt-3 text-xl">
          {resource?.resource_title ?? ""}
        </h6>
        <p className="font-inter text-sm/6 mt-1">
          {resource?.resource_desc ?? "--"}
        </p> */}
      </div>
    );
  };

  const handleScrollBehaviour = () => {
    if (window.scrollY >= 50) {
      mounted && courseSideBarRef.current
        ? (courseSideBarRef.current.style.top = 0)
        : "";
    } else {
      mounted && courseSideBarRef.current
        ? (courseSideBarRef.current.style.top = "6rem")
        : "";
    }
  };

  const courseVideos = (course) => {
    setVideoResources(course);
  };
  const filteredResources = props.selectedModule.module_resources.filter(
    (resource) => resource.resource_type === "video"
  );

  const changeVideo = (param) => {
    let specificResourceIndex = filteredResources.indexOf(videoResources);
    if (param == "plus") {
      if (specificResourceIndex < filteredResources.length - 1) {
        const nextSibling = filteredResources[specificResourceIndex + 1];
        setVideoResources(nextSibling);
      }
    } else if (param == "prev") {
      if (specificResourceIndex) {
        const prevSibling = filteredResources[specificResourceIndex - 1];
        setVideoResources(prevSibling);
      }
    }
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    mounted && window.addEventListener("scroll", handleScrollBehaviour);
  });

  return (
    <div className="flex gap-5 md:gap-10">
      <div className="mt-5 w-full grow">
        {videoResources.resource_type === "video" && (
          <CourseVideo url={videoResources.resource_link} />
        )}
        {videoResources.resource_type === "document" && (
          <div className="flex h-52 w-full items-center justify-center rounded-2xl bg-gradient-to-t from-black/10 to-black/10 shadow-2xl dark:from-black/30 dark:to-black/70">
            <button className="flex items-center gap-3 rounded-xl bg-black px-20 py-3 text-base text-white hover:opacity-80 dark:bg-white dark:text-black">
              <FiDownloadCloud /> Download
            </button>
          </div>
        )}
        <div className="flex items-center justify-between">
          <h6 className="font-inter mt-5 text-xl capitalize">
            {videoResources?.resource_title}
          </h6>
          <div className="flex items-center gap-4">
            <button
              // disabled={prev}
              onClick={() => changeVideo("prev")}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white disabled:opacity-70">
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              // disabled={next}
              onClick={() => changeVideo("plus")}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white disabled:opacity-70">
              <FiChevronRight className="text-xl" />
            </button>
            {next && (
              <button className="rounded-lg bg-black/70 px-3 py-1 text-xs text-white/80">
                {/*add onclick for this */}
                complete module
              </button>
            )}
          </div>
        </div>
        <p className="font-inter mt-1 text-sm/6">
          {/* {props.selectedModule?.module_desc} */}
          {videoResources.resource_desc}
        </p>
      </div>

      <div
        className={`${
          open
            ? "courses_aside w-[255px] overflow-hidden md:w-10 "
            : "w-10 md:w-[455px]"
        } fixed right-0 z-10 h-screen bg-[#f7f9fa] shadow-xl transition-all duration-500 dark:bg-[#090E34] md:sticky `}
        ref={courseSideBarRef}>
        <div className="relative flex h-full flex-col items-center justify-start">
          <div className="flex w-full items-center justify-between border-b border-black/10 px-2.5 py-4 text-left text-sm font-semibold dark:border-white/20">
            {open ? (
              <>
                <FiChevronLeft
                  onClick={() => setOpen(false)}
                  className="h-4 w-4 shrink-0 cursor-pointer dark:text-white/90"
                />
              </>
            ) : (
              <>
                <FiChevronLeft
                  onClick={() => setOpen(true)}
                  className="h-4 w-8 shrink-0 cursor-pointer dark:text-white/90 md:hidden"
                />
                Course content
                <FiX
                  onClick={() => setOpen(true)}
                  className="h-4 w-4 cursor-pointer dark:text-white/90"
                />
              </>
            )}
          </div>
          <div className="courses_list w-full opacity-0 md:opacity-100">
            <VideoSidebar
              resources={props.selectedModule.module_resources}
              courseVideos={courseVideos}
              title="Introduction"
              index="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoSection;
