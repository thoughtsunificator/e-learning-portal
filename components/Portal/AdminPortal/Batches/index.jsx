import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import AddBatches from "../Popups/AddBatches";
import DeletePopup from "../Popups/DeletePopup";
import { batch } from "../data";

import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Batches() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [batches, setBatches] = useState({});
  const [query, setQuery] = useState("");
  const [bathId, setBathId] = useState();
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  const closeModal = () => {
    setIsOpen(false);
    setIsDelete(false);
  };

  const openModal = (data) => {
    setIsOpen(true);
    if (data) {
      setBatches(data);
    }
  };

  const openDeleteModal = () => {
    setIsDelete(true);
  };

  let filterBatches = batch.filter((obj) =>
    Object.values(obj).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(filterBatches.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return filterBatches.slice((current - 1) * pageSize, current * pageSize);
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
        <h2 className="font-inter mb-8 text-[30px] font-semibold text-black dark:text-[#ADB3CC]">
          Batches
        </h2>
        <div className="flex items-center justify-between">
          <div className="relative w-1/2">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex h-[45px] w-full items-center rounded-xl border border-[#d1d5db] bg-transparent pl-3 placeholder:font-light dark:border-[#4b5563]"
            />
            <IoSearchOutline
              size={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform fill-black dark:fill-white"
            />
          </div>
          <div className="flex items-center gap-5"></div>
        </div>
        <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
          <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
            <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  BATCH NO.
                </th>
                <th scope="col" className="px-6 py-3">
                  START
                </th>
                <th scope="col" className="px-6 py-3">
                  INCHARGE
                </th>
                <th scope="col" className="px-6 py-3">
                  Strength
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {filterBatches?.length === 0 && query !== "" ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    Nothing found.
                  </td>
                </tr>
              ) : (
                getData(current, size).map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                      <td className="px-6 py-4">{item.batch_id}</td>
                      <td className="px-6 py-4"> {item.batch_date}</td>
                      <td className="px-6 py-4"> {item.batch_incharge}</td>
                      <td className="px-6 py-4"> {item.batch_strength}</td>
                      <td className="px-6 py-4">
                        <p className="text-green-500">{item.batch_status}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-5">
                          <FaEdit
                            size={22}
                            onClick={() => openModal(item)}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                          />
                          <MdDelete
                            size={22}
                            onClick={() => {
                              openDeleteModal();
                              setBathId(item.batch_id);
                            }}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="mx-auto my-6 flex w-fit overflow-hidden rounded-lg border border-black/5 shadow-xl dark:bg-white/80">
          <Pagination
            className="flex items-center divide-x divide-black/10 text-xs font-normal leading-5 dark:text-black"
            onChange={PaginationChange}
            total={filterBatches.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
            showTitle={false}
            // hideOnSinglePage={true}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={openModal}
            className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
            Add
          </button>
        </div>

        <AddBatches isOpen={isOpen} closeModal={closeModal} batches={batches} />
        <DeletePopup
          isOpen={isDelete}
          closeModal={closeModal}
          title="batch"
          bathId={bathId}
        />
      </div>
    </>
  );
}
