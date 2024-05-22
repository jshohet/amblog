
import React, { useState } from "react";
import RecentPost from "./Dashboard Components/RecentPosts";
import Welcome from "./Dashboard Components/Welcome";

//most recent post for user - edit button, delete button, timestamp, title, images, moodlet
//create new post button
//archive display

const Dashboard = async () => {
 

  return (
    <div className="px-[300px]">
      <Welcome />
      <RecentPost />
    </div>
  );
};

export default Dashboard;
