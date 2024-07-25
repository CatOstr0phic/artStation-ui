import React from "react";

export default function FormContent({
  contentName,
  questionValidation,
  children,
}) {
  return (
    <section>
      <p className="text-2xl my-2">{contentName}</p>
      <small className="text-[#BEBEC2] text-sm my-1">{questionValidation}</small>
      {children}
    </section>
  );
}
