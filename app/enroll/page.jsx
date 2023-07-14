"use client";
import Link from "next/link";
import { useState } from "react";
import { isEmail } from "validator";
import axios from "axios";

import {useRouter} from "next/navigation";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Breadcrumb from "@/components/Common/Breadcrumb";

const EnrollmentPage = () => {

  const router = useRouter()
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [errMessage, setErrorMessage] = useState("");
  let [err, setErr] = useState(false);
  let [showEnrollDialog, setShowEnrollDialog] = useState(true);
  const handleFormOnchange = (e) => {
    switch (e.target.type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "text":
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleValidation = () => {
    setErr(false);
    if (name.length === 0) {
      setErr(true);
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!isEmail(email)) {
      setErr(true);
      setErrorMessage("Please enter valid email address");
      return false;
    }
    if (typeof phoneNumber === "undefined") {
      setErr(true);
      setErrorMessage("Please enter phone number");
      return false;
    }
    return true;
  };

  const enrollstudent = async () => {
    if (handleValidation()) {
      // API call
      let data = {
        chat_id: -693924384,
        text:
          "someone tried to contact you\nname: " +
          name +
          " \nemail: " +
          email +
          "\nphone number: " +
          phoneNumber +
          "\nTime stamp: " +
          new Date().toUTCString() +
          "",
      };
      await axios.post(
        "https://api.telegram.org/bot6113311259:AAG3W1TkUYh1JvOibJ2LdmRnMIQ4gBnslYs/sendMessage",
        data
      );
      setShowEnrollDialog(false);
      router.push("/");
    }
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      {showEnrollDialog && (
        <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    Take the first step
                  </h3>
                  <div className="mb-8 flex items-center justify-center">
                    <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                    <p className="w-full px-5 text-center text-base font-medium text-body-color">
                      Begin your journey into the world of BIM
                    </p>
                    <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                  </div>
                  <div>
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {" "}
                        Full Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        onChange={handleFormOnchange}
                        placeholder="Enter your full name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {" "}
                        Email <span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleFormOnchange}
                        required
                        placeholder="Enter your Email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {" "}
                        Phone Number <span>*</span>
                      </label>
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        required
                        onChange={setPhoneNumber}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="mb-8 flex">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                      >
                        <span>Our Team will reach out to you</span>
                      </label>
                    </div>
                    {err && (
                      <div
                        className="bg-red-100 border-red-400 text-red-700 relative mb-8 rounded border px-4 py-3"
                        role="alert"
                      >
                        <strong className="font-bold">Holy smokes!</strong>
                        <br></br>
                        <span className="block sm:inline">{errMessage}</span>
                      </div>
                    )}
                    <div className="mb-6">
                      <button
                        onClick={enrollstudent}
                        className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[-1]">
            <svg
              width="1440"
              height="969"
              viewBox="0 0 1440 969"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_95:1005"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1440"
                height="969"
              >
                <rect width="1440" height="969" fill="#090E34" />
              </mask>
              <g mask="url(#mask0_95:1005)">
                <path
                  opacity="0.1"
                  d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                  fill="url(#paint0_linear_95:1005)"
                />
                <path
                  opacity="0.1"
                  d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                  fill="url(#paint1_linear_95:1005)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_95:1005"
                  x1="1178.4"
                  y1="151.853"
                  x2="780.959"
                  y2="453.581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_95:1005"
                  x1="160.5"
                  y1="220"
                  x2="1099.45"
                  y2="1192.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      )}

      {!showEnrollDialog && (
        <>
          <Breadcrumb
            pageName="Enroll"
            description="Our team of experts will get back to you within 3 business days"
          />
          
        </>
      )}
    </>
  );
};

export default EnrollmentPage;
