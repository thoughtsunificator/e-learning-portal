import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const AssignmentDetails = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-10">
        <div className="col-span-2">
          <div
            className="h-9 w-9 cursor-pointer rounded-full"
            onClick={() => props.setShowAssigmentDetails(false)}>
            <BsArrowLeft className="text-black dark:text-white" />
          </div>
          <div className="flex items-center gap-2 md:gap-[1rem]">
            <img src="/svg/clipboard.svg" className="h-[3rem] w-[3rem]" />
            <div>
              <h3 className="font-inter text-xl font-medium capitalize tracking-wider md:text-2xl">
                {props?.assigmentData?.title}
              </h3>
              <p className="text-xs font-normal text-black dark:text-white">
                {props?.assigmentData?.course}, {props?.assigmentData?.module}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="mb-1 text-right text-sm">
              Due:{" "}
              <span className="font-medium capitalize text-black/60 dark:text-white/60">
                {" "}
                {props?.assigmentData?.due}
              </span>
            </p>
            <div className="h-[2px] w-full rounded-full bg-[#ADB3CC]" />
            <p className="my-7 text-base/7 font-normal text-black dark:text-[#ADB3CC]">
              You have to implement PCA (dimensionality reduction) and SVM
              (Support Vector Machine) from scratch without using any in-built
              functions or library functions. Once you have implemented the
              code, try to run on these datasets and get the evaluation
              metrics:I) For PCA: use Kaggle titanic dataset
              https://www.kaggle.com/competitions/titanicII) For SVM: use MNIST
              dataset https://www.kaggle.com/competitions/digit-recognizer/data,
              Evaluation metric: confusion matrix, classification accuracyYou
              can work in the same groups as for the project, team size=5/6
            </p>
            <div className="h-[2px] w-full rounded-full bg-[#ADB3CC]" />
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-[#00458D] px-10 py-5  shadow-[0px_0px_13px_10px_rgba(0,0,0,0.25)]">
            <div className="md:px-6">
              <p className="text-white">Add Your Work Here</p>
              <button className="my-8 flex w-full items-center justify-center gap-3 rounded-lg border border-white px-5 py-2 text-sm text-[#B2B5FD]">
                <FiPlus />
                Add or Create
              </button>
            </div>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#4047FB] px-5 py-2 text-sm text-white">
              Mark as done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
