import React from "react";

const CourseCard = ({ cardData, currentCard, setCurrentCard, course }) => {
  return (
    <div className=" flex flex-row">
      <button
        className={`flex flex-col  w-[360px] p-5 gap-1  `}
        onClick={() => {
          setCurrentCard(cardData.heading);
        }}
      >
        <div className=" flex flex-col text-center p-2 border-b-2 border-richblack-100 border-dashed">
          <div className={` text-xl font-bold text-left mb-2 `}>
            {course.heading}
          </div>
          <div className="text-left mb-6 text-base ">{course.description}</div>
        </div>

        <div className="flex justify-between w-full p-3 ">
          <div>{course.level}</div>
          <div>{course.lessionNumber}</div>
        </div>
      </button>
    </div>
  );
};

export default CourseCard;
