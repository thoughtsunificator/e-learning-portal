import { BsArrowLeft } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import DeletePopup from "../Popups/DeletePopup";
import Tooltip from "../Tooltip";
import Notification from "../../../../app/services/notification-service";

import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function EditCourse({
  handleEdit,
  editCourseData,
  editModules,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [courseList, setCourseList] = useState({
    course_id: "",
    course_title: "",
    course_desc: "",
    course_duration: "",
  });
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    setCourseList(editCourseData);
    const generateSixDigitNumber = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };
    if (editCourseData === "") {
      setCourseList((prevState) => ({
        ...prevState,
        course_id: generateSixDigitNumber(),
      }));
    }
  }, [editCourseData]);
  const changeCourseData = (key, value) => {
    setCourseList((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(editCourseData?.modules.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return editCourseData?.modules.slice(
      (current - 1) * pageSize,
      current * pageSize
    );
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button className=" flex items-center gap-x-1.5 text-sm font-medium text-[#344054]">
          <FiArrowLeft /> Previous
        </button>
      );
    }
    if (type === "next") {
      return (
        <button className=" flex items-center gap-x-1.5 text-sm font-medium text-[#344054]">
          Next <FiArrowRight />
        </button>
      );
    }
    return originalElement;
  };
  return (
    <>
      <div className="mx-auto w-11/12">
        <BsArrowLeft
          onClick={() => handleEdit(0)}
          className="mb-12 cursor-pointer text-3xl text-black dark:text-white"
        />
      </div>

      <div className="mx-auto w-11/12 rounded-xl bg-white p-6 shadow-xl dark:bg-[#090E34]">
        <h2 className="font-inter mb-8 text-[22px] font-semibold text-black dark:text-[#ADB3CC]">
          {editCourseData === "" ? "Add" : "Edit"} Course
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:gap-5">
          <div>
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Course Id
            </label>
            <input
              type="text"
              value={courseList?.course_id}
              disabled={true}
              onChange={(e) => changeCourseData("course_id", e.target.value)}
              placeholder=""
              className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 disabled:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676] dark:disabled:text-black/50"
            />
          </div>
          <div>
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Course Name
            </label>
            <input
              type="text"
              value={courseList?.course_title}
              onChange={(e) => changeCourseData("course_title", e.target.value)}
              placeholder=""
              className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
            />
          </div>
          <div>
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Duration
            </label>
            <input
              type="text"
              value={courseList?.course_duration}
              onChange={(e) =>
                changeCourseData("course_duration", e.target.value)
              }
              placeholder=""
              className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
            />
          </div>
          <div className="md:col-span-3">
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Description
            </label>
            <textarea
              type="text"
              id="scrollbar"
              rows={5}
              value={courseList?.course_desc}
              onChange={(e) => changeCourseData("course_desc", e.target.value)}
              placeholder=""
              className="placheholder:font-light flex w-full items-center  rounded-xl border-0 bg-black/5 px-5 py-3 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"></textarea>
            <div className="mt-6 flex items-center justify-end gap-5">
              <button
                onClick={() => handleEdit(0)}
                className="inline-flex h-[44px] items-center justify-center rounded-xl bg-transparent px-4 text-[16px] text-[#E72020]">
                Cancel
              </button>
              <button
                onClick={() => {
                  {
                    editCourseData &&
                      Notification.success("successfully added");
                  }
                }}
                className="inline-flex h-[44px] items-center justify-center rounded-xl bg-[#384E85] px-4 text-[16px] text-white dark:bg-[#42BBFF]">
                {editCourseData === "" ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {editCourseData !== "" ? (
        <div className="mx-auto mt-8 w-11/12">
          <h2 className="font-inter mb-8 text-[22px] font-semibold text-black dark:text-[#ADB3CC]">
            Modules
          </h2>
          <div className="relative mx-auto mt-4 shadow-xl sm:rounded-xl">
            <table className="w-full rounded-t-xl text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
              <thead className="rounded-t-xl bg-black/10 text-xs uppercase text-black dark:bg-[#374151]  dark:text-[#9ca3af]">
                <tr className="first:[&_th]:rounded-tl-xl last:[&_th]:rounded-tr-xl">
                  <th scope="col" className="px-6 py-3">
                    Module ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Module Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Incharge
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {editCourseData &&
                  getData(current, size)?.map((module, index) => {
                    return (
                      <tr
                        key={index}
                        className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                        <td className="px-6 py-4">{module.mid}</td>
                        <td className="px-6 py-4"> {module.module_name}</td>
                        <td className="px-6 py-4">
                          <Tooltip
                            tooltipText={module.module_desc}
                            text={module.module_desc_short}
                          />
                        </td>
                        <td className="px-6 py-4"> {module.module_duration}</td>
                        <td className="px-6 py-4"> {module.module_incharge}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-5">
                            <FaEdit
                              size={22}
                              className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                              onClick={() => {
                                handleEdit(2);
                                editModules(module);
                              }}
                            />
                            <MdDelete
                              size={22}
                              onClick={() => {
                                openModal();
                                setTitle(module.module_name);
                              }}
                              className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="mx-auto my-6 flex w-fit overflow-hidden rounded-lg border border-black/5 shadow-xl dark:bg-white/80">
            <Pagination
              className="flex items-center divide-x divide-black/10 text-xs font-normal leading-5 dark:text-black"
              onChange={PaginationChange}
              total={editCourseData?.modules?.length}
              current={current}
              pageSize={size}
              showSizeChanger={false}
              itemRender={PrevNextArrow}
              onShowSizeChange={PerPageChange}
              showTitle={false}
              // hideOnSinglePage={true}
            />
          </div>

          <div className="mb-10 mt-8 text-right">
            <button
              onClick={() => {
                handleEdit(2);
                editModules("");
              }}
              className="ml-auto inline-flex h-[40px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[16px] text-white dark:bg-[#42BBFF]">
              Add
            </button>
          </div>
        </div>
      ) : null}
      <DeletePopup
        isOpen={isOpen}
        closeModal={closeModal}
        handleEdit={handleEdit}
        screen={0}
        title={title}
      />
    </>
  );
}
