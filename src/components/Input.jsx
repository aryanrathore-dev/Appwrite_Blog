import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const Id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1 pl-1 text-xl lg:text-2xl"
          htmlFor={Id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 lg:py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={Id}
      />
    </div>
  );
});

export default Input;