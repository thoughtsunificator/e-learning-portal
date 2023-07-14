const Tooltip = (props) => {
  const { className, tooltipText, wrapperClassName, text } = props;
  return (
    <div className="group relative flex cursor-pointer flex-col items-center">
      {text.length > 100
        ? `${text.substring(0, 100)}...`
        : text.substring(0, 95)}
      <div
        className={`${
          wrapperClassName ? wrapperClassName : "top-full w-full max-w-xl"
        } absolute hidden flex-col items-start rounded-xl group-hover:flex`}>
        <p
          className={`${
            className ? className : ""
          } whitespace-no-wrap relative z-10 w-fit rounded-md border border-[#D0D5DD]/60 bg-[#fff] p-2 text-center text-[11px] font-normal text-[#475467] shadow-lg`}>
          {tooltipText}
        </p>
      </div>
    </div>
  );
};

export default Tooltip;
