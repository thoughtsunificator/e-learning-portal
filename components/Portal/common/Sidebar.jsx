import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { CgMenuRightAlt } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import {
  ExternalApiEndPoints,
  StudentRouteEnum,
  idToken,
  jwtToken,
  studentInformation,
} from "@/src/shared/Constants";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Sidebar = (props) => {
  let router = useRouter();

  const [toggle, setToggle] = useState(false);
  const [mobile, setmobile] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [contactUs, setContactUs] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const signOut = () => {
    Cookies.remove(idToken);
    localStorage.removeItem(jwtToken);
    router.push(StudentRouteEnum.studentlogin);
  };
  return (
    <>
      {mobile && (
        <div
          onClick={() => {
            setmobile(!mobile);
          }}
          className="fixed h-full w-full bg-black/20"
        />
      )}
      <div className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700  fixed inline-flex w-full items-center  py-5 dark:bg-[#090E34] lg:hidden">
        <div
          onClick={() => {
            setmobile(!mobile);
          }}
          className="cursor-pointer px-2"
        >
          <CgMenuRightAlt size={22} />
        </div>
        <div>
          <a href="" className=" flex items-center">
            <img
              src="/images/logo-dark.png"
              className=" h-4 dark:hidden"
              alt="Aeczone Logo"
            />
            <img
              src="/images/logo.png"
              className=" h-4 dark:block"
              alt="Aeczone Logo"
            />
            <span className="self-center whitespace-nowrap text-sm dark:text-white">
              eczone Academy
            </span>
          </a>
        </div>
        {/* <img
          src="/images/students/sb.jpg"
          className=" right-4 sm:h-7 absolute h-8 rounded-full"
          alt="Aeczone Logo"
        /> */}
      </div>
      {props.openSlideBar ? (
        <>
          <aside
            id="logo-sidebar"
            className={`${
              toggle ? "w-14" : " w-60"
            }  fixed z-40 flex h-full min-h-screen shrink-0 -translate-x-full flex-col bg-[#D1D5F0]  transition-all duration-300 dark:bg-[#090E34] lg:relative lg:translate-x-0 ${
              mobile ? "open" : ""
            }`}
            aria-label="Sidebar"
          >
            <div className="bg-gray-50 dark:bg-gray-800 relative h-full px-3 py-4">
              <div className="flex items-center gap-2">
                <div
                  onClick={() => setToggle(!toggle)}
                  className="cursor-pointer"
                >
                  <CgMenuRightAlt size={22} />
                </div>
                <a
                  href=""
                  className={`${
                    toggle ? "opacity-0 " : ""
                  } justify-center" flex grow items-center transition-all duration-300`}
                >
                  <img
                    src="/images/logo-dark.png"
                    className=" block h-5 dark:hidden"
                    alt="Aeczone Logo"
                  />
                  <img
                    src="/images/logo.png"
                    className=" hidden h-5 dark:block"
                    alt="Aeczone Logo"
                  />
                  <span className="ml-1 self-center whitespace-nowrap text-sm dark:text-white">
                    eczone Academy
                  </span>
                </a>
                <div
                  className="block sm:hidden"
                  onClick={() => {
                    setmobile(!mobile);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size={"lg"}
                    className="cursor-pointer text-black dark:text-white"
                  />
                </div>
              </div>
              <div className="ml-1 mt-10 h-12">
                <p
                  className={`${
                    toggle ? "hidden w-0" : ""
                  }  whitespace-nowrap text-xs font-normal text-[#55597D] transition-all duration-300 `}
                >
                  MAIN MENU
                </p>
              </div>
              <ul className="space-y-2 font-medium">
                {props?.menulist?.map((item) => {
                  return (
                    <li key={item.title} className="flex items-center">
                      {item?.component === props.currentPage ? (
                        <div
                          className={
                            "absolute left-1 h-8 w-1 rounded-full bg-[#1D71A1] hover:opacity-60 dark:bg-[#42BBFF]"
                          }
                        ></div>
                      ) : (
                        ""
                      )}
                      <a
                        href={item.link}
                        className={
                          "flex h-10 flex-1 items-center rounded-lg px-2 hover:bg-black/10 dark:hover:bg-black/20 " +
                          (item?.component === props.currentPage
                            ? "text-[#1D71A1] dark:text-[#42BBFF]"
                            : "text-black/90 dark:text-white/90")
                        }
                        onClick={() => {
                          props.setCurrentPage(item?.component);
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="dark:text-gray-400 group-hover:text-gray-900 text-gray-500 h-4 w-4 transition duration-75 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox={item.viewbox}
                          xmlns={item.imgLink}
                        >
                          <path d={item.path} />
                        </svg>
                        <span
                          className={`${
                            toggle ? "hidden w-0" : "mx-2 flex-1"
                          }  whitespace-nowrap text-sm`}
                        >
                          {" "}
                          {item.title}
                        </span>
                        {!toggle && (
                          <>
                            {props.portalType == "student" && (
                              <>
                                {item.child ? (
                                  <span className={styles.badge}>
                                    {item.child}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </>
                            )}
                          </>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex grow flex-col items-end justify-end divide-y divide-black/10 pb-px dark:divide-white/10">
              <div
                onClick={signOut}
                className=" flex w-full cursor-pointer items-center gap-3 px-4 py-2 hover:bg-black/20 dark:hover:bg-white/20"
              >
                <TbLogout />
                {!toggle && <p className="text-base font-medium">Logout</p>}
              </div>
              <div
                className={`${
                  !toggle ? "flex-row divide-x" : "flex-col divide-y"
                } divide flex w-full cursor-pointer items-center  divide-black/10 dark:divide-white/10`}
              >
                <div
                  onClick={() => setContactUs(true)}
                  className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-black/20"
                >
                  <MdContactSupport className="text-xs text-black/60 dark:text-white" />
                  {!toggle && (
                    <p className="text-xs text-black/60 dark:text-white">
                      Contact Us
                    </p>
                  )}
                </div>
                <div
                  onClick={openModal}
                  className=" flex w-full cursor-pointer items-center gap-3 px-4 py-2 hover:bg-black/20"
                >
                  <FaQuoteLeft className="text-xs text-black/60 dark:text-white" />
                  {!toggle && (
                    <p className="text-xs text-black/60 dark:text-white">
                      FAQs
                    </p>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </>
      ) : null}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#D4D7F2] p-6 text-left align-middle shadow-xl transition-all">
                  <CgCloseO
                    className="mb-5 ml-auto cursor-pointer text-xl text-black"
                    onClick={closeModal}
                  />
                  <Dialog.Title
                    as="h3"
                    className="font-inter text-center text-2xl font-semibold text-[#101828]"
                  >
                    Frequently asked questions
                  </Dialog.Title>
                  <p className="font-inter mb-7 mt-4 text-center text-base font-normal text-[#667085] ">
                    Everything you need to know about the product and billing.
                  </p>
                  <div className="flex flex-col">
                    <Disclosure as="div" defaultOpen={false}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none">
                            <span className="text-[18px] font-medium text-[#101828]">
                              Is there a free trial available?
                            </span>
                            {open ? (
                              <AiOutlineMinusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            ) : (
                              <AiOutlinePlusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p className="font-inter mt-2 text-sm font-normal text-[#667085]">
                              Yes, you can try us for free for 30 days. If you
                              want, we’ll provide you with a free, personalized
                              30-minute onboarding call to get you up and
                              running as soon as possible.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <div className="my-4 h-px w-full bg-black/10" />
                    <Disclosure as="div" defaultOpen={false}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none">
                            <span className="text-[18px] font-medium text-[#101828]">
                              Can I change my plan later?
                            </span>
                            {open ? (
                              <AiOutlineMinusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            ) : (
                              <AiOutlinePlusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p className="font-inter mt-2 text-sm font-normal text-[#667085]">
                              Yes, you can try us for free for 30 days. If you
                              want, we’ll provide you with a free, personalized
                              30-minute onboarding call to get you up and
                              running as soon as possible.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <div className="my-4 h-px w-full bg-black/10" />
                    <Disclosure as="div" defaultOpen={false}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none">
                            <span className="text-[18px] font-medium text-[#101828]">
                              What is your cancellation policy?{" "}
                            </span>
                            {open ? (
                              <AiOutlineMinusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            ) : (
                              <AiOutlinePlusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p className="font-inter mt-2 text-sm font-normal text-[#667085]">
                              Yes, you can try us for free for 30 days. If you
                              want, we’ll provide you with a free, personalized
                              30-minute onboarding call to get you up and
                              running as soon as possible.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>{" "}
                    <div className="my-4 h-px w-full bg-black/10" />
                    <Disclosure as="div" defaultOpen={false}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none">
                            <span className="text-[18px] font-medium text-[#101828]">
                              Can other info be added to an invoice?
                            </span>
                            {open ? (
                              <AiOutlineMinusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            ) : (
                              <AiOutlinePlusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p className="font-inter mt-2 text-sm font-normal text-[#667085]">
                              Yes, you can try us for free for 30 days. If you
                              want, we’ll provide you with a free, personalized
                              30-minute onboarding call to get you up and
                              running as soon as possible.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>{" "}
                    <div className="my-4 h-px w-full bg-black/10" />
                    <Disclosure as="div" defaultOpen={false}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none">
                            <span className="text-[18px] font-medium text-[#101828]">
                              How does billing work?{" "}
                            </span>
                            {open ? (
                              <AiOutlineMinusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            ) : (
                              <AiOutlinePlusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p className="font-inter mt-2 text-sm font-normal text-[#667085]">
                              Yes, you can try us for free for 30 days. If you
                              want, we’ll provide you with a free, personalized
                              30-minute onboarding call to get you up and
                              running as soon as possible.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>{" "}
                    <div className="my-4 h-px w-full bg-black/10" />
                    <Disclosure as="div" defaultOpen={false}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between outline-none">
                            <span className="text-[18px] font-medium text-[#101828]">
                              How do I change my account email?{" "}
                            </span>
                            {open ? (
                              <AiOutlineMinusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            ) : (
                              <AiOutlinePlusCircle className="h-5 w-5 min-w-[20px] text-[#7F56D9]" />
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <p className="font-inter mt-2 text-sm font-normal text-[#667085]">
                              Yes, you can try us for free for 30 days. If you
                              want, we’ll provide you with a free, personalized
                              30-minute onboarding call to get you up and
                              running as soon as possible.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>{" "}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={contactUs} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setContactUs(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#D4D7F2] p-6 text-left align-middle shadow-xl transition-all">
                  <CgCloseO
                    className=" ml-auto cursor-pointer text-xl text-black"
                    onClick={() => setContactUs(false)}
                  />
                  <Dialog.Title
                    as="h3"
                    className="font-inter text-center text-2xl font-semibold text-[#101828]"
                  >
                    Contact Us
                  </Dialog.Title>
                  <p className="font-inter mb-7 mt-4 text-center text-base font-normal text-[#667085] ">
                    We’re here to help! Send us your query via the form below
                    for any issue you’re facing
                  </p>
                  <div className="flex flex-col">
                    <form>
                      <div className="mb-3">
                        <label
                          for="email"
                          className="mb-1 block text-sm font-medium text-black"
                        >
                          Full Name
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="block w-full rounded-lg !bg-white p-2.5  text-sm text-black outline-none ring-0 dark:text-white"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="message"
                          className="mb-1 block text-sm font-medium text-black"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block w-full resize-none rounded-lg bg-white p-2.5 text-sm text-black outline-none ring-0 dark:text-white"
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="font-inter mx-auto w-full rounded-lg bg-black py-2 text-base text-white"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Sidebar;
