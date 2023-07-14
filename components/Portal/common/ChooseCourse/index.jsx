"use client";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

function ChooseCourse() {
  return (
    <>
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-3">
        <div className="flex h-full items-center justify-center  bg-[#090E34] py-10 text-center md:py-0">
          <Link
            href="/portal/student-portal"
            className=" flex flex-col items-center justify-center"
          >
            <img
              src="/images/logo.png"
              className=" h-20 dark:block md:h-32"
              alt="Aeczone Logo"
            />
            <p className="mt-5 self-center whitespace-nowrap text-sm text-white">
              eczone Academy
            </p>
          </Link>
        </div>
        <div className="mx-auto flex h-full max-w-[520px] grow flex-col items-center justify-center space-y-5 px-5 py-10 text-center md:col-span-2 md:py-0">
          <Link href="/portal/student-portal">
            <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-black/5 p-1 shadow-md hover:shadow dark:bg-white">
              <div classname="">
                <img
                  src="/images/splash/splash_grid.png"
                  className="h-32 w-52 rounded-xl bg-black/20 object-contain"
                />
              </div>
              <div className=" px-5 text-left">
                <h1 className="font-inter text-base font-medium text-black">
                  BIM PLUS COURSE
                </h1>
                <p className="mt-1 text-xs text-black">
                  A COURSE DESIGNED TO GIVE A BETTER UNDERSTANDING OF PLANNING
                  AND DESIGNING
                </p>
                <div className="ml-auto mt-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/5 hover:bg-black/20">
                  <FiChevronRight className="text-primary" />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/portal/student-portal">
            <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-black/5 p-1 shadow-md hover:shadow dark:bg-white">
              <div classname="">
                <img
                  src="/images/splash/splash_grid.png"
                  className="h-32 w-52 rounded-xl bg-black/20 object-contain"
                />
              </div>
              <div className=" px-5 text-left">
                <h1 className="font-inter text-base font-medium text-black">
                  BIM INTERNATIONAL COURSE
                </h1>
                <p className="mt-1 text-xs text-black">
                  A COURSE DESIGNED TO GIVE A BETTER UNDERSTANDING OF PLANNING
                  AND DESIGNING
                </p>
                <div className="ml-auto mt-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/5 hover:bg-black/20">
                  <FiChevronRight className="text-primary" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ChooseCourse;
