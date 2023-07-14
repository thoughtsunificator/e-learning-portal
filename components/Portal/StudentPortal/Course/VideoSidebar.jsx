import React from "react";
import VideoSidebarSubComp from "./VideoSidebarSubComp";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown, FiX } from "react-icons/fi";
// props -> title, index, <an array of objects containing the sub-topics>
function VideoSidebar(props) {
  const filteredResources = props.resources.filter(
    (resource) => resource.resource_type === "video"
  );
  return (
    <div className="flex w-full select-none flex-col items-center justify-center border-b border-black/10 dark:border-white/20">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between px-2.5 py-3 text-left text-sm font-medium">
              <span>
                {" "}
                Module {props.index}. {props.title}
              </span>
              <FiChevronDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } text-purple-500 h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="w-full">
              <ul className="w-full">
                <li>
                  {props.resources.map((subtopic, index) => {
                    return (
                      <VideoSidebarSubComp
                        key={index}
                        index={index + 1}
                        title={subtopic.resource_title}
                        completed={subtopic.completed}
                        length={subtopic.length}
                        onClick={props.courseVideos}
                        item={subtopic}
                        resources="hello"
                      />
                    );
                  })}
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default VideoSidebar;
