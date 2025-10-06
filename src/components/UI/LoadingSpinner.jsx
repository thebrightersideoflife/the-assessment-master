import React from "react";

const LoadingSpinner = ({
  text = "Loading...",
  size = "md", // sm | md | lg
  color = "indigo", // tailwind color name: indigo, blue, emerald, etc.
  fullScreen = true,
}) => {
  const sizeClasses =
    size === "lg"
      ? { outer: "h-20 w-20", inner: "h-10 w-10" }
      : size === "sm"
      ? { outer: "h-10 w-10", inner: "h-5 w-5" }
      : { outer: "h-16 w-16", inner: "h-8 w-8" };

  const containerClasses = `
    flex flex-col items-center justify-center 
    ${fullScreen ? "h-screen" : "py-12"} 
    bg-gradient-to-br from-gray-50 to-gray-100
  `;

  return (
    <div
      className={containerClasses}
      role="status"
      aria-busy="true"
      aria-label={text}
    >
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div
          className={`rounded-full border-4 border-transparent border-t-${color}-500 border-r-${color}-500 animate-spin ${sizeClasses.outer}`}
        ></div>

        {/* Inner pulse */}
        <div
          className={`absolute bg-${color}-500 rounded-full animate-pulse shadow-lg ${sizeClasses.inner}`}
        ></div>
      </div>

      {/* Text */}
      {text && (
        <p className="mt-6 text-gray-600 font-medium tracking-wide animate-fade-in">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
