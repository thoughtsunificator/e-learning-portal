"use client";

import React from "react";
export default function Login() {
  return (
    <section className="bg-[#f9fafb] p-12 dark:bg-[#111827] md:h-screen">
      <div className="grid grid-cols-5 items-center">
        <div className=" col-span-2 flex items-center justify-center">
          <div className="w-full max-w-md rounded-xl bg-white shadow-2xl  dark:bg-[#1f2937]">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <p className="mb-20 text-center text-xl font-bold leading-tight tracking-tight text-black dark:text-white md:text-2xl">
                Admin Login
              </p>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="text-gray-900 mb-2 block text-sm font-medium dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 h-4 w-4 rounded border dark:ring-offset-[#111827]"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="dark:text-gray-300 text-gray-500"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[45px] w-full items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]"
                >
                  Sign in
                </button>
                <p className="dark:text-gray-400 text-gray-500 text-sm font-light">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <img className="w-full" src="/images/login.png" alt="Login Image" />
        </div>
      </div>
    </section>
  );
}
