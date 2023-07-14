"use client";
import UserInfo from "@/components/Common/User/UserInfo";
import UserAdminInfo from "@/components/Common/User/UserAdminInfo";
import React from "react";
import Sidebar from "./Sidebar";
import {
  PortalType,
  StudentApiRoutesEnum,
  StudentPortalPages,
  AdminPortalPages,
  studentInformation,
} from "@/src/shared/Constants";
import SyllabusOverview from "../StudentPortal/overview/SyllabusOverview";
import StudentCourse from "../StudentPortal/Course/StudentCourse";
import Assignment from "../StudentPortal/Assignement/Assignment";
import LiveClasses from "../StudentPortal/LiveClasses/LiveClasses";
import Attendance from "../StudentPortal/Attendance/Attendance";

import AdminOverview from "../AdminPortal/Overview";
import AdminCourses from "../AdminPortal/Courses";
import AdminLiveClasses from "../AdminPortal/LiveClasses";
import AdminStudents from "../AdminPortal/Students";
import AdminBatches from "../AdminPortal/Batches";
import AdminAttendance from "../AdminPortal/Attendance";

import AxiosWrapper from "@/src/shared/AxiosWrapper";
import FullPageLoader from "./Loader/FullPageLoader";
import { mockAssignments } from "@/src/shared/Mocks";

export const CourseContext = React.createContext(null);
const Dashboard = (props) => {
  let [openSlideBar, setOpenSlideBar] = React.useState(true);
  let [currentPage, setCurrentPage] = React.useState();
  let [currentComponent, setCurrentComponent] = React.useState();
  let [course, setCourse] = React.useState({});
  let [loading, setLoading] = React.useState(false);
  let apiService = AxiosWrapper();
  React.useEffect(() => {
    if (props.portalType === PortalType.student) {
      switch (currentPage) {
        case StudentPortalPages.overview:
          setCurrentComponent(<SyllabusOverview />);
          break;
        case StudentPortalPages.course:
          setCurrentComponent(
            <StudentCourse setOpenSlideBar={setOpenSlideBar} />
          );
          break;
        case StudentPortalPages.assignment:
          setCurrentComponent(<Assignment assignments={mockAssignments} />);
          break;
        case StudentPortalPages.liveclasses:
          setCurrentComponent(<LiveClasses />);
          break;
        case StudentPortalPages.attendance:
          setCurrentComponent(<Attendance />);
          break;
        default:
          break;
      }
    } else if (props.portalType === PortalType.admin) {
      switch (currentPage) {
        case AdminPortalPages.overview:
          setCurrentComponent(<AdminOverview />);
          break;
        case AdminPortalPages.courses:
          setCurrentComponent(<AdminCourses />);
          break;
        case AdminPortalPages.batches:
          setCurrentComponent(<AdminBatches />);
          break;
        case AdminPortalPages.liveclasses:
          setCurrentComponent(<AdminLiveClasses />);
          break;
        case AdminPortalPages.students:
          setCurrentComponent(<AdminStudents />);
          break;
        case AdminPortalPages.attendance:
          setCurrentComponent(<AdminAttendance />);
          break;
        default:
          break;
      }
    }
  }, [currentPage]);

  React.useEffect(() => {
    setOpenSlideBar(true);
    if (props.portalType === PortalType.student) {
      setCurrentComponent(<SyllabusOverview />);
      setCurrentPage(props.menu[0].component);
    }
    if (props.portalType === PortalType.admin) {
      setCurrentComponent(<AdminOverview />);
      setCurrentPage(props.menu[0]?.component);
    }
    // api call to fetch the course
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    let studentInfo = JSON.parse(localStorage.getItem(studentInformation));
    if (studentInfo?.course_id) {
      setLoading(true);
      await apiService
        .get(StudentApiRoutesEnum.course, {
          params: {
            courseid: studentInfo?.course_id,
          },
        })
        .then((resp) => {
          setCourse(resp?.data);
        })
        .catch((err) => {
          console.log("");
        });
      setLoading(false);
    }
  };
  return (
    <>
      <FullPageLoader loading={loading} />
      <div className="lg:flex">
        <Sidebar
          setOpenSlideBar={setOpenSlideBar}
          openSlideBar={openSlideBar}
          menulist={props.menu}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          portalType={props.portalType}
        />
        <div className={`grow dark:bg-[#1D2144] ${openSlideBar ? "" : ""}`}>
          {/* 
          TODO: find an alternate for this
          {openSlideBar && (
            <div
              className="bg-opacity-10 absolute inset-0 bg-white"
              onClick={() => setOpenSlideBar(false)}
            ></div>
          )} */}
          <div className="relative z-20 hidden sm:block">
            {props.portalType === PortalType.admin ? (
              <UserAdminInfo id="ABC123" course="BIM" />
            ) : (
              <UserInfo id="ABC123" course="BIM" />
            )}
          </div>
          <CourseContext.Provider value={course}>
            <div className="scrollbar z-10 h-screen overflow-auto px-4 pt-20 md:h-[calc(100vh-67px)] md:pt-8">
              {currentComponent}
            </div>
          </CourseContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
