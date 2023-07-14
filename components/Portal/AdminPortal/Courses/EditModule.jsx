import { BsArrowLeft } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeletePopup from "../Popups/DeletePopup";
import { useEffect, useState } from "react";
import AddAssignment from "../Popups/AddAssignment";
import AddResources from "../Popups/AddResources";
import Notification from "../../../../app/services/notification-service";

import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function EditCourse2({ handleEdit, editModuleData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAssignment, setIsAssignment] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const [title, setTitle] = useState("");
  const [assignments, setAssignments] = useState("");
  const [resources, setResources] = useState("");
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);
  const [currentResources, setCurrentResources] = useState(1);
  const [sizeResources, setSizeResources] = useState(5);

  const [moduleList, setModuleList] = useState({
    mid: "",
    module_name: "",
    module_desc: "",
    module_duration: "",
    module_incharge: "",
  });

  useEffect(() => {
    setModuleList(editModuleData);
  }, [editModuleData]);
  const changeModuleData = (key, value) => {
    setModuleList((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsAssignment(false);
    setIsResources(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const openAssignmentPopup = () => {
    setIsAssignment(true);
  };

  const openResourcesPopup = () => {
    setIsResources(true);
  };

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(moduleList?.assignments?.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return moduleList?.assignments?.slice(
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

  const PerPageChangeResources = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(moduleList?.module_resources?.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getDataResources = (current, pageSize) => {
    return moduleList?.module_resources?.slice(
      (current - 1) * pageSize,
      current * pageSize
    );
  };

  const PaginationChangeResources = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrowResources = (current, type, originalElement) => {
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
          onClick={() => handleEdit(1)}
          className="mb-12 cursor-pointer text-3xl text-black dark:text-white"
        />
      </div>
      <div className="mx-auto w-11/12 rounded-xl bg-white p-6 shadow-xl dark:bg-[#090E34]">
        <h2 className="font-inter mb-8 text-[22px] font-semibold text-black dark:text-[#ADB3CC]">
          {editModuleData === "" ? "Add" : "Edit"} Module
        </h2>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 xl:gap-5">
          <div>
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Name
            </label>
            <input
              type="text"
              value={moduleList?.module_name}
              onChange={(e) => changeModuleData("module_name", e.target.value)}
              className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
            />
          </div>
          <div>
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Duration
            </label>
            <input
              type="text"
              value={moduleList?.module_duration}
              onChange={(e) =>
                changeModuleData("module_duration", e.target.value)
              }
              className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
            />
          </div>
          <div>
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Incharge
            </label>
            <input
              type="text"
              value={moduleList?.module_incharge}
              onChange={(e) =>
                changeModuleData("module_incharge", e.target.value)
              }
              className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
            />
          </div>
          <div className="xl:col-span-3">
            <label className="mb-[11px] text-[17px] font-bold text-black dark:text-[#BCBCBC]">
              Description
            </label>
            <textarea
              id="scrollbar"
              type="text"
              rows={5}
              value={moduleList?.module_desc}
              onChange={(e) => changeModuleData("module_desc", e.target.value)}
              className="placheholder:font-light flex w-full items-center  rounded-xl border-0 bg-black/5 px-5 py-3 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"></textarea>
          </div>
        </div>
        <div className="mt-6 xl:col-span-2">
          <div className="flex items-center justify-end gap-5">
            <button
              onClick={() => handleEdit(0)}
              className="inline-flex h-[45px] items-center justify-center rounded-xl bg-transparent px-4 text-[16px] text-[#E72020]">
              Cancel
            </button>
            <button
              onClick={() => {
                {
                  editModuleData && Notification.success("successfully added");
                }
              }}
              className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-4 text-[16px] text-white dark:bg-[#42BBFF]">
              Update
            </button>
          </div>
        </div>
      </div>
      {moduleList !== "" ? (
        <div className="mx-auto mt-3 w-11/12 pb-10 xl:mt-4">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <h2 className="font-inter mb-8 text-[22px] font-semibold text-black dark:text-[#ADB3CC]">
                Assignment
              </h2>
              <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
                <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
                  <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Order
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Assignment
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Completion
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getData(current, size)?.map((assign, index) => {
                      return (
                        <tr
                          key={index}
                          className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                          <td className="px-6 py-4">{assign.assignment_id}</td>
                          <td className="px-6 py-4">
                            {assign.assignment_title}
                          </td>
                          <td className="px-6 py-4">
                            {assign.assignment_desc}
                          </td>
                          <td className="px-6 py-4">
                            {assign.assignment_completion_due}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-5">
                              <FaEdit
                                size={22}
                                onClick={() => {
                                  openAssignmentPopup();
                                  setAssignments(assign);
                                }}
                                className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                              />
                              <MdDelete
                                size={22}
                                onClick={() => {
                                  openModal();
                                  setTitle(assign.assignment_title);
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
                  total={moduleList?.assignments?.length}
                  current={current}
                  pageSize={size}
                  showSizeChanger={false}
                  itemRender={PrevNextArrow}
                  onShowSizeChange={PerPageChange}
                  showTitle={false}
                  // hideOnSinglePage={true}
                />
              </div>
              <div className="mt-6 text-right">
                <button
                  onClick={() => {
                    openAssignmentPopup();
                    setAssignments("");
                  }}
                  className="ml-auto inline-flex h-[24px] items-center justify-center rounded-xl bg-[#384E85] px-4 text-[14px] text-white dark:bg-[#42BBFF]">
                  Add
                </button>
              </div>
            </div>
            <div>
              <h2 className="font-inter mb-8 text-[22px] font-semibold text-black dark:text-[#ADB3CC]">
                Resources
              </h2>
              <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
                <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
                  <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Resources
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Link
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getDataResources(current, size)?.map((resource, index) => {
                      return (
                        <tr
                          key={index}
                          className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                          <td className="px-6 py-4">
                            {resource.resource_title}
                          </td>
                          <td className="cursor-pointer px-6 py-4 text-[#4361ee] underline">
                            {resource.resource_link}
                          </td>
                          <td className="px-6 py-4">
                            {resource.resource_desc}
                          </td>
                          <td className="px-6 py-4">
                            {resource.resource_type}
                          </td>
                          <td className="px-6 py-4">
                            <div className="justify-right flex items-center gap-5">
                              <FaEdit
                                size={22}
                                onClick={() => {
                                  openResourcesPopup();
                                  setResources(resource);
                                }}
                                className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                              />
                              <MdDelete
                                size={22}
                                onClick={() => {
                                  openModal();
                                  setTitle(resource.resource_title);
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
                  onChange={PaginationChangeResources}
                  total={moduleList?.module_resources?.length}
                  current={current}
                  pageSize={size}
                  showSizeChanger={false}
                  itemRender={PrevNextArrowResources}
                  onShowSizeChange={PerPageChangeResources}
                  showTitle={false}
                  // hideOnSinglePage={true}
                />
              </div>
              <div className="mt-6 text-right">
                <button
                  onClick={() => {
                    openResourcesPopup();
                    setResources("");
                  }}
                  className="ml-auto inline-flex h-[24px] items-center justify-center rounded-xl bg-[#384E85] px-4 text-[14px] text-white dark:bg-[#42BBFF]">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <AddAssignment
        isOpen={isAssignment}
        closeModal={closeModal}
        assignment={assignments}
      />
      <AddResources
        isOpen={isResources}
        closeModal={closeModal}
        resource={resources}
      />
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
