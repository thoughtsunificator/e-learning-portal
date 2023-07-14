import React from "react";
import AssignmentCard from "./AssignmentCard";
import AssignmentDetails from "./AssignmentDetails";

const Assignment = (props) => {
  // props =
  /* 
    props.assignments = {
        Assigned: [
            {
                title: "assignment1",
                course: "BIM Plus",
                module: "Module 1",
                due: "tomorrow",
            },
        ],
        Missing: [{...}],
        Done: [{...}]
    } 
    */
  const [mode, setMode] = React.useState(0);
  let [showAssigmentDetails, setShowAssigmentDetails] = React.useState(false);
  let [assigmentData, setAssigmentData] = React.useState({});

  const headerList = ["Assigned", "Missing", "Done"];
  const colors = ["#5d65ab", "#ba0224", "#088724"];
  const handleModuleSelection = (item) => {
    setShowAssigmentDetails(true);
    setAssigmentData(item);
  };
  return (
    <div className="">
      {!showAssigmentDetails ? (
        <div className="">
          <ul className="mx-auto flex w-full flex-col rounded-xl bg-black/10 px-2 py-1.5 text-lg font-semibold tracking-wider text-black shadow-md dark:bg-white/80 sm:flex-row lg:w-2/3">
            {headerList.map((listItem, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setMode(index)}
                  className={`w-full cursor-pointer rounded-lg px-2 py-2 text-center sm:px-10 ${
                    mode === index ? "bg-white text-[#42BBFF]" : ""
                  }`}>
                  <span
                    className={`cursor-pointer ${
                      mode === index ? "text-[#42BBFF]" : ""
                    }`}>
                    {listItem}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="primary_scrollbar mt-8 overflow-auto md:h-[calc(100vh-30vh)]">
            {props.assignments[headerList[mode]].map((item, index) => {
              return (
                <div key={index} onClick={() => handleModuleSelection(item)}>
                  <AssignmentCard
                    title={item.title}
                    course={item.course}
                    module={item.module}
                    due={item.due}
                    color={colors[mode]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <AssignmentDetails
          assigmentData={assigmentData}
          setShowAssigmentDetails={setShowAssigmentDetails}
        />
      )}
    </div>
  );
};

export default Assignment;
