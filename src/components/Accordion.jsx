import React, { useState } from "react";
import Plus from "../assets/icon/Plus";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (!Array.isArray(sections)) {
    return null;
  }

  return (
    <div>
      {sections.map((section, index) => (
        <div
          className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]"
          key={index}
        >
          <p className="pl-[12px] text-lg font-normal leading-[150%]">
            {section.title}
          </p>
          <button onClick={() => handleClick(index)}>
            <Plus />
          </button>
          {activeIndex === index && <div>{section.content}</div>}
        </div>
      ))}
    </div>
  );
};
export default Accordion;