"use client";

import Dashboard from "@/components/Portal/common/Dashboard";
import { ToastContainer } from "react-toastify";
import { PortalType, adminDashBoardProps, adminJwtToken, StudentRouteEnum, AdminApiRoutesEnum, adminIdToken } from "@/src/shared/Constants";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

const AdminPortal = () => {
  let [dashBoardProps, setDashboardProps] = useState();
  const router = useRouter();

  let [ready, setReady] = React.useState(false);
  useEffect(() => {
    setDashboardProps(adminDashBoardProps);
    if(localStorage.getItem(adminJwtToken) != null) {
      fetch(AdminApiRoutesEnum.check_token).then(response => {
        if(response.status == 200 && localStorage.getItem(adminJwtToken) != null) {
          setReady(true);
        } else {
          localStorage.removeItem(adminJwtToken)
          Cookies.remove(adminIdToken);
          router.push(StudentRouteEnum.adminlogin);
        }
      })
    } else {
      router.push(StudentRouteEnum.adminlogin);
    }
  }, []);

  if (!ready) {
    return null;
  }
  return (
  <>
      <ToastContainer
        position="top-right"
        theme="light"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />,
      <Dashboard menu={adminDashBoardProps} portalType={PortalType.admin} />
      <div className="fixed bottom-0 right-0 z-[-2] h-[120px] w-[120px] rounded-tl-full bg-[#1A7FC1] opacity-60 dark:bg-[#AAB0CA]/10 xs:hidden sm:block"></div>
      <div className="fixed bottom-0 right-0 z-[-2] h-[100px] w-[100px] rounded-tl-full bg-[#1A7FC1] dark:bg-[#AAB0CA]/30 xs:hidden sm:block"></div>
    </>
  );
};

export default AdminPortal;
