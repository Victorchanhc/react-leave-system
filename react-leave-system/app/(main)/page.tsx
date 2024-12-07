import React from "react";
import { HomeInfo } from "../../components/HomeInfo";
import { sessionStore } from "../../services/SessionStore";
import { userService} from "../../services/UserService";

export default async function Home() {

  const user = await sessionStore.get()

  const allDetails = await userService.parentGetLessons(user.id)

  const courseDetails = await userService.getSelectCourses()

  // console.log({...homePageDetails[0]})

  
  return (
    <div>
      <h1 className="text-center mt-3 ">
        Welcome to STFC
      </h1>
      <div className="participantContainer">
        <HomeInfo allDetails={allDetails} courseDetails = {courseDetails}/>
      </div>
    </div>
  );
}
