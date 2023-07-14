export const enrollPage = "/enroll";
export const portalPage = "portal";

export const StudentRouteEnum = {
  studentlogin: "/portal/student-portal/login",
  adminlogin: "/portal/admin-portal/login",
  apiHealthCheck: "/api/student/health",
  studentDashBoard: "/portal/student-portal",
  studentChooseCourse: "/portal/student-portal/choose-course",
  adminDashboard: "/portal/admin-portal",
};

const idToken = "idToken";
const adminIdToken = "adminIdToken";
const jwtToken = "token";
const adminJwtToken = "admin_token";
const studentInformation = "student_data";
const adminInformation = "admin_data";

export const StudentApiRoutesEnum = {
  login: "/api/student/login",
  courses: "/api/student/courses",
  refresh: "/api/refresh",
  apiHealthCheck: "/api/student/health",
  course: "/api/student/v1/course",
  studentMetaData: "/api/student_metadata/v1/student_metadata",
  attendance: "/api/student/attendance",
  batch: "/api/batch",
  live_classes: "/api/live_classes",
};

export const AdminApiRoutesEnum = {
  login: "/api/admin/v1/login",
  check_token: "/api/admin/v1/check_token",
};

export const ModuleResourceType = {
  video: "video",
  text: "text",
};
export const PortalType = {
  student: "student",
  admin: "admin",
};

export const StudentPortalPages = {
  overview: "overview",
  course: "course",
  assignment: "assignment",
  attendance: "attendance",
  liveclasses: "liveclasses",
};

export const AdminPortalPages = {
  overview: "overview",
  batches: "batches",
  courses: "courses",
  liveclasses: "liveclasses",
  students: "students",
  attendance: "attendance",
};

export { idToken, jwtToken, studentInformation, adminIdToken, adminJwtToken, adminInformation };

export const ExternalApiEndPoints = {
  avatar: "https://ui-avatars.com/api/",
};

export const dashBoardProps = [
  {
    title: "Syllabus Overview",
    link: "#",
    component: "overview",
    path: "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 512 512",
    child: null,
  },
  {
    title: "Course",
    link: "#",
    component: "course",
    path: "M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 640 512",
    child: null,
  },
  {
    title: "Assignments",
    link: "#",
    component: "assignment",
    path: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 384 512",
    child: "3 new",
  },
  {
    title: "Attendance",
    link: "#",
    component: "attendance",
    path: "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 448 512",
    child: null,
  },
  {
    title: "Live Classes",
    link: "#",
    component: "liveclasses",
    path: "M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 640 512",
    child: null,
  },
];

export const adminDashBoardProps = [
  {
    title: "Overview",
    link: "#",
    component: "overview",
    path: "M21.21 15.89A10 10 0 1 1 8 2.83 M22 12A10 10 0 0 0 12 2v10z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 24 24",
    child: null,
  },
  {
    title: "Students",
    link: "#",
    component: "students",
    path: "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 24 24",
    child: null,
  },
  {
    title: "Courses",
    link: "#",
    component: "courses",
    path: "M11.374 23.977c-4.183-.21-8.006-2.626-9.959-6.347-2.097-3.858-1.871-8.864.732-12.454C4.748 1.338 9.497-.698 14.281.23c4.583.857 8.351 4.494 9.358 8.911 1.122 4.344-.423 9.173-3.925 12.04-2.289 1.953-5.295 2.956-8.34 2.797zm7.705-8.05a588.737 588.737 0 0 0-3.171-1.887c-.903 1.483-2.885 2.248-4.57 1.665-2.024-.639-3.394-2.987-2.488-5.134.801-2.009 2.79-2.707 4.357-2.464a4.19 4.19 0 0 1 2.623 1.669c1.077-.631 2.128-1.218 3.173-1.855-2.03-3.118-6.151-4.294-9.656-2.754-3.13 1.423-4.89 4.68-4.388 7.919.54 3.598 3.73 6.486 7.716 6.404a7.664 7.664 0 0 0 6.404-3.563z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 24 24",
    child: "3 new",
  },
  {
    title: "Batches",
    link: "#",
    component: "batches",
    path: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 24 24",
    child: null,
  },
  {
    title: "Attendance",
    link: "#",
    component: "attendance",
    path: "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 448 512",
    child: null,
  },
  {
    title: "Live Classes",
    link: "#",
    component: "liveclasses",
    path: "M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z",
    imgLink: "http://www.w3.org/2000/svg",
    viewbox: "0 0 640 512",
    child: null,
  },
];

export const dbCollection = {
  students: "student",
  modules: "modules",
  courses: "courses",
  admin: "admin",
  student_metadata: "student_metadata",
};
