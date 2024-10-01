import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "../../core/HomePage/CourseCard";

const tabsName = [
  "Free",
  "New to Coding",
  "Most Popular",
  "Skill Paths",
  "Carrer Paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      <div className="text-4xl  font-semibold text-center ">
        Unlock the
        <HighlightText text={"Power of Code"} />
      </div>

      <p className="mt-3 text-center  text-richblack-300 text-sm text-[18px] ">
        Learn to build anything you can imagine
      </p>

      <div className=" mt-5 flex flex-row rounded-full bg-richblack-800 mb-3 px-1 py-1">
        {tabsName.map((tab, index) => {
          return (
            <div
              key={index}
              onClick={() => setMyCards(tab)}
              className={`text-[16px] flex flex-row  gap-2 ${
                currentTab === tab
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : " text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
            >
              {tab}
            </div>
          );
        })}
      </div>

      <div className="lg:h-[150px]"></div>

      <div>
        {courses.map((course, index) => {
          return (
            <CourseCard course={course}
              
              key={index}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
