
import React, { useState } from "react";
import RecentPost from "./Dashboard Components/RecentPosts";
import Welcome from "./Dashboard Components/Welcome";
import Archive from "./Dashboard Components/Archive";

//most recent post for user - edit button, delete button, timestamp, title, images, moodlet
//create new post button
//archive display

const Dashboard = async () => {
 

  return (
    <div className="w-full">
      <h1 className="absolute top-[500px] left-[850px] mr-24">socials here</h1>
      <div className="px-[300px]">
        <Welcome />
        <div className="flex">
          <RecentPost />
          <Archive />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
