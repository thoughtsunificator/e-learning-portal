import { useState } from "react";
import Courses from "./Courses";
import EditCourse from "./EditCourse";
import EditModule from "./EditModule";

export default function Index() {
  const [edit, setEdit] = useState(0);
  const [editCourseData, setEditCourseData] = useState({});
  const [editModuleData, setEditModuleData] = useState({});
  const handleEdit = (value) => {
    setEdit(value);
  };
  const editCourses = (data) => {
    setEditCourseData(data);
  };
  const editModules = (data) => {
    setEditModuleData(data);
  };

  return (
    <>
      {edit == 0 ? (
        <Courses handleEdit={handleEdit} editCourses={editCourses} />
      ) : edit == 1 ? (
        <EditCourse
          handleEdit={handleEdit}
          editCourseData={editCourseData}
          editModules={editModules}
        />
      ) : edit == 2 ? (
        <EditModule handleEdit={handleEdit} editModuleData={editModuleData} />
      ) : (
        ""
      )}
    </>
  );
}
