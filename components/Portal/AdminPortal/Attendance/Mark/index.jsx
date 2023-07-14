import { BiBlock } from "react-icons/bi";
import { useState } from "react";
import { BsArrowLeft, BsCheckCircleFill } from "react-icons/bs";
import MarkAttendancePopup from "../../Popups/MarkAttendancePopup";

export default function Mark({ setDetail }) {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex justify-between">
        <BsArrowLeft
          onClick={() => setDetail(true)}
          className="mb-12 cursor-pointer text-3xl text-black dark:text-white"
        />

        <div className="text-right">
          <p className="text-3xl font-semibold text-black  dark:text-[#ADB3CC]">
            Course title{" "}
          </p>
          <p className="font-sm font-normal text-black/50  dark:text-[#ADB3CC]">
            Batch Id: 34
          </p>
        </div>
      </div>
      <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
        <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
          <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3].map((val, index) => {
              return (
                <tr
                  key={index}
                  className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                  <td className="px-6 py-4">B0101</td>
                  <td className="px-6 py-4"> Priya</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-5">
                      <div className="relative">
                        <input
                          type="radio"
                          name={`attendance-${index}`}
                          className="peer absolute inset-0 cursor-pointer opacity-0"
                        />
                        <BiBlock
                          size={22}
                          className="cursor-pointer text-[#5A5A5A] peer-checked:text-[#FF0606] dark:text-[#ffffff]"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="radio"
                          name={`attendance-${index}`}
                          className="peer absolute inset-0 cursor-pointer opacity-0"
                        />
                        <BsCheckCircleFill
                          size={18}
                          className="cursor-pointer text-[#5A5A5A] peer-checked:text-[#29bf12] dark:text-[#ffffff]"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-right">
        <button
          onClick={openModal}
          className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
          Mark attendance
        </button>
      </div>
      <MarkAttendancePopup
        isOpen={isOpen}
        closeModal={closeModal}
        setDetail={setDetail}
      />
    </>
  );
}
