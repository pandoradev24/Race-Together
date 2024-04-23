import clsx from "clsx";
import React from "react";

const SingleInputField = ({
  id,
  type,
  value,
  label,
  placeholder,
  tailingComponent,
  onChange,
  error,
}) => {
  return (
    <div className={clsx("w-full flex flex-col")}>
      <label
        htmlFor={id}
        className={clsx(
          "w-full text-[0.875rem] text-[#4D4F4F] font-bold leading-[0.64rem] -tracking-[0.009375rem] mb-1 md:mb-2 lg:mb-3 px-2"
        )}
      >
        {label}
      </label>
      <div
        className={clsx(
          "w-full h-[1.88rem] lg:h-[2.35rem] bg-white rounded-[0.75rem] border border-solid border-[#7F989A] flex flex-row items-center"
        )}
      >
        <input
          className={clsx(
            "px-[7%] grow h-[1.7rem] lg:h-[2.2rem] text-sm md:text-base text-[#4A5568] font-normal rounded-[0.75rem] focus:outline-none"
          )}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e, id)}
          size={1}
        />
        {tailingComponent && (
          <>
            <div className="h-[80%] mr-[2%] border-solid border-l border-[#CFD9E0]" />
            <div className="w-[8%] p-1 h-full mr-[2%] flex items-center justify-center cursor-pointer">
              {tailingComponent}
            </div>
          </>
        )}
      </div>
      {error && (
        <p className="ml-4 mt-1 text-red-600 text-[0.75rem] md:text-sm font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default SingleInputField;
