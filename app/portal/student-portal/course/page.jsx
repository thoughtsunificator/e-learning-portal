"use client";
import { StudentRouteEnum, jwtToken } from "@/src/shared/Constants";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Course = () => {
  const router = useRouter();

  let [authenticated, setAuthenticated] = React.useState();
  let [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
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
  return <h1>helo</h1>;
};

export default Course;
