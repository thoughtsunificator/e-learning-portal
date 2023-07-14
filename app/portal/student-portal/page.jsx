"use client";

import Dashboard from "@/components/Portal/common/Dashboard";
import {
  PortalType,
  StudentRouteEnum,
  dashBoardProps,
  idToken,
  jwtToken,
} from "@/src/shared/Constants";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const StudentPortal = () => {
  let [dashboardProps, setDashboardProps] = useState();
  const router = useRouter();

  let [authenticated, setAuthenticated] = React.useState();
  let [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
    setDashboardProps(dashBoardProps);
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    setAuthenticated(localStorage.getItem(jwtToken));
  }, []);
  React.useEffect(() => {
    if (hasMounted) {
      setAuthenticated(localStorage.getItem(jwtToken) ?? null);
    }
  }, [hasMounted]);

  React.useEffect(() => {
    if (authenticated === null) {
      router.push(StudentRouteEnum.studentlogin);
    }
  }, [authenticated]);

  if (!hasMounted) {
    return null;
  }
  return (
    <>
      {authenticated !== null ? (
        <Dashboard menu={dashboardProps} portalType={PortalType.student} />
      ) : null}
      <div className="fixed bottom-0 right-0 z-[-2] h-[120px] w-[120px] rounded-tl-full bg-[#1A7FC1] opacity-60 dark:bg-[#AAB0CA]/10 xs:hidden sm:block"></div>
      <div className="fixed bottom-0 right-0 z-[-2] h-[100px] w-[100px] rounded-tl-full bg-[#1A7FC1] dark:bg-[#AAB0CA]/30 xs:hidden sm:block"></div>
    </>
  );
};

export default StudentPortal;
