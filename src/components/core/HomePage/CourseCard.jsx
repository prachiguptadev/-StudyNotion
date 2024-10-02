import React from "react";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div>
      <button
        className={`flex flex-col  w-[350px] h-[270px] p-5 gap-1  ${
          currentCard === cardData.heading
            ? "bg-white text-richblack-700 shadow-[12px_12px_0px] shadow-[#FFD60A]"
            : "bg-richblack-700 text-richblue-100"
        }`}
        onClick={() => {
          setCurrentCard(cardData.heading);
        }}
      >
        <div className=" flex flex-col text-center p-2 border-b-2 border-richblack-100 border-dashed">
          <div
            className={` text-xl font-bold text-left mb-2 ${
              currentCard === cardData.heading
                ? "text-black"
                : "text-richblue-5 "
            }`}
          > 
            {cardData.heading}
          </div>
          <div className="text-left mb-6 text-base ">
            {cardData.description}
          </div>
        </div>

        <div className="flex justify-between w-full p-3 ">
          <div>{cardData.level}</div>
          <div>{cardData.lessionNumber} Lessons</div>
        </div>
      </button>
    </div>
  );
};

export default CourseCard;
