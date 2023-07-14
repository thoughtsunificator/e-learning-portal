import CourseCard from "./CourseCard";
import React from "react";
import { CourseContext } from "../../common/Dashboard";
import CourseDetails from "./CourseDetail";
import FullPageLoader from "../../common/Loader/FullPageLoader";
import {
  StudentApiRoutesEnum,
  studentInformation,
} from "@/src/shared/Constants";
import AxiosWrapper from "@/src/shared/AxiosWrapper";
const StudentCourse = (props) => {
  const id = "AoeCfTfZE8w";
  const [moduleCards, setModuleCards] = React.useState([]);
  let value = React.useContext(CourseContext);
  let [loading, setLoading] = React.useState(false);
  let apiService = AxiosWrapper();
  let [showModuleDetails, setShowModuleDetails] = React.useState(false);
  let [selectedModule, setSelectedModule] = React.useState();

  const handleModuleSelection = (moduleid) => {
    setShowModuleDetails(true);
    props.setOpenSlideBar(false);
    setSelectedModule(moduleid);
  };
  let [studentMetadata, setStudentMetadata] = React.useState();
  const fetchStudentMetadata = async () => {
    let studentInfo = JSON.parse(localStorage.getItem(studentInformation));
    if (studentInfo?.course_id) {
      setLoading(true);
      await apiService
        .get(StudentApiRoutesEnum.studentMetaData)
        .then((resp) => {
          setStudentMetadata(resp?.data?.data);
        })
        .catch((err) => {
          console.log("");
        });
      setLoading(false);
    }
  };
  React.useEffect(() => {
    // fetch student meta data
    fetchStudentMetadata();
  }, []);
  const getModuleCardStatus = (module) => {
    // student starts then course the modules completed array will be empty
    if (
      studentMetadata?.data?.data?.module_status.completed.length === 0 &&
      module?.order === 1
    ) {
      return true;
    }

    // add more conditions here
    return false;
  };
  React.useEffect(() => {
    if (value !== null) {
      let modules = _.get(value, "data.modules", "");
      setModuleCards(
        _.orderBy(
          _.map(modules, (module, index) => {
            return {
              title: module?.module_name ?? "--",
              content: module?.module_desc_short ?? "--",
              content_full: module?.module_desc ?? "--",
              duration: module?.module_duration ?? 0,
              isModuleActive: getModuleCardStatus(module),
              index,
            };
          }),
          "index"
        )
      );
    }
  }, [value, studentMetadata]);
  return (
    <>
      <FullPageLoader loading={loading} />

      {showModuleDetails == false ? (
        <>
          <h1 className="font-inter text-xl font-medium capitalize text-black dark:text-white md:text-2xl">
            {value?.data?.course_title}
          </h1>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {moduleCards.map((module, id) => {
              return (
                <div
                  key={id}
                  className="rounded-2xl bg-white shadow-md lg:shadow-xl">
                  <CourseCard
                    module_name={module?.title}
                    content={module?.content}
                    duration={module?.duration}
                    moduleid={module?.index}
                    handleModuleSelection={handleModuleSelection}
                    isModuleActive={module?.isModuleActive}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="w-full">
            <CourseDetails
              setOpenSlideBar={props.setOpenSlideBar}
              setShowModuleDetails={setShowModuleDetails}
              studentMetaData={studentMetadata}
              selectedModule={selectedModule}
            />
          </div>
        </>
      )}
    </>
  );
};

export default StudentCourse;
