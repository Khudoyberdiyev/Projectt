import React from "react";

import Plus from "../../../assets/icon/Plus";
import Accordion from "../../../components/Accordion";

function Question() {
  const sections = [
    {
      title: "Can I enroll in multiple courses at once?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus odit nesciunt aliquid, magnam maiores doloremque velit fuga. Incidunt mollitia illo quisquam architecto et quas fugiat a sint. Cumque quae sint, odio nulla fugit dolorem, tempore, magni ex iusto esse qui minus incidunt nisi eos ipsum facere blanditiis nemo placeat.",
    },
    {
      title: "What kind of support can I expect from instructors?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus odit nesciunt aliquid, magnam maiores doloremque velit fuga. Incidunt mollitia illo quisquam architecto et quas fugiat a sint. Cumque quae sint, odio nulla fugit dolorem, tempore, magni ex iusto esse qui minus incidunt nisi eos ipsum facere blanditiis nemo placeat.",
    },
    {
      title:
        "Are the courses self-paced or do they have specific start and end dates?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus odit nesciunt aliquid, magnam maiores doloremque velit fuga. Incidunt mollitia illo quisquam architecto et quas fugiat a sint. Cumque quae sint, odio nulla fugit dolorem, tempore, magni ex iusto esse qui minus incidunt nisi eos ipsum facere blanditiis nemo placeat.",
    },
    {
      title: "Are there any prerequisites for the courses?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus odit nesciunt aliquid, magnam maiores doloremque velit fuga. Incidunt mollitia illo quisquam architecto et quas fugiat a sint. Cumque quae sint, odio nulla fugit dolorem, tempore, magni ex iusto esse qui minus incidunt nisi eos ipsum facere blanditiis nemo placeat.",
    },
    {
      title: "Can I download the course materials for offline access?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus odit nesciunt aliquid, magnam maiores doloremque velit fuga. Incidunt mollitia illo quisquam architecto et quas fugiat a sint. Cumque quae sint, odio nulla fugit dolorem, tempore, magni ex iusto esse qui minus incidunt nisi eos ipsum facere blanditiis nemo placeat.",
    },
  ];
  return (
    <section className="container mt-[120px]">
      <div className=" p-[100px] bg-white rounded-lg flex items-start justify-between">
        <div className="max-w-[408px]">
          <h2 className="text-5xl font-[600] leading-[120%]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-normal leading-[150%] mt-[10px]">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <button className="text-lg font-[500] leading-[150%] px-[24px] py-[18px] rounded-lg border-current bg-[#F7F7F8] hover:bg-[#FF9500] hover:text-white mt-[50px] ">
            See All FAQ’s
          </button>
        </div>
        {/* Accordion */}
        <div className="max-w-[1595px] w-full ml-[120px]">
          <Accordion section={sections} />
          <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
            <p className="pl-[12px] text-lg font-normal leading-[150%]">
              What kind of support can I expect from instructors?
            </p>
            <Plus />
          </div>
          <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
            <p className="pl-[12px] text-lg font-normal leading-[150%]">
              Are the courses self-paced or do they have specific start and end
              dates?
            </p>
            <Plus />
          </div>
          <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
            <p className="pl-[12px] text-lg font-normal leading-[150%]">
              Are there any prerequisites for the courses?
            </p>
            <Plus />
          </div>
          <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
            <p className="pl-[12px] text-lg font-normal leading-[150%]">
              Can I download the course materials for offline access?
            </p>
            <Plus />
          </div>
          {/* <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
            <p className="pl-[12px] text-lg font-normal leading-[150%]">
              Access to exclusive Pro Plan community forums.
            </p>
            <Plus />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Question;
