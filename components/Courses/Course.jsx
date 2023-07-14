import Image from "next/image";
import { useRouter } from "next/navigation";

const Course = (props) => {
  const { packageName, subtitle, children, productImg, buildingImg } = props;

  const router = useRouter();

  const enroll = () => {
    router.push("/enroll");
  };
  return (
    <div className=" w-full">
      <div
        className="wow fadeInUp hover:shadow-red-500 relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp transition duration-300 ease-in-out hover:shadow-sm dark:bg-[#1D2144]"
        data-wow-delay=".1s">
        <div className=" flex items-center justify-between">
          <h3 className="price mb-12 text-3xl font-bold text-black dark:text-white">
            <span className="amount">{packageName}</span>
          </h3>
          {/* <h4 className="text-dark dark:text-white mb-2 text-xl font-bold">
              {packageName}
            </h4> */}
        </div>
        <p className="mb-7  text-base">
          <strong>{subtitle}</strong>
        </p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button
            onClick={enroll}
            className="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            ENROLL NOW
          </button>
        </div>
        <div>{children}</div>
        <div className="absolute right-0 top-0 z-[-1] md:right-5 md:top-3 lg:right-5 lg:top-3">
          <Image
            src={productImg}
            height={120}
            width={90}
            style={{ opacity: 0.7 }}
          />
          {/* <svg
              width="179"
              height="158"
              viewBox="0 0 179 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                fill="url(#paint0_linear_70:153)"
              />
              <path
                opacity="0.3"
                d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                fill="url(#paint1_linear_70:153)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_70:153"
                  x1="69.6694"
                  y1="29.9033"
                  x2="196.108"
                  y2="83.2919"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_70:153"
                  x1="165.348"
                  y1="-75.4466"
                  x2="-3.75136"
                  y2="103.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg> */}
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <Image
            src={buildingImg}
            height={420}
            width={200}
            style={{ opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
