import AbstractButton from "../Buttons/AbstractButton"
import HeaderLessons from "../../Header/HeaderLessons"
import HomeButton from "../Buttons/HomeButton";
import HomeworkButton from "../Buttons/HomeworkButton"
import LessonsInfo from "../../LessonsInfo/LessonsInfo";
// import Modules from "../../../Modules";

function Lessons1() {
  return (
    <>

      <HeaderLessons />
      <LessonsInfo />
      <HomeworkButton />
      <AbstractButton />
      {/* <Modules /> */}
      <HomeButton />
    </>
  );
}

export default Lessons1;
