"use client";
import React from "react";
import ChooseCourse from "@/components/Portal/common/ChooseCourse";
import ThemeButton from "@/components/Features/ThemeButton";

export default function ChooseCourses() {
  return (
    <>
      <div className="absolute right-[40px] top-[20px]">
        <ThemeButton></ThemeButton>
      </div>
      <ChooseCourse />
    </>
  );
}
