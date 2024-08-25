
import React from "react";

import Welcome from "./Dashboard Components/Welcome";

import Socials from "./Dashboard Components/Socials";
import TiptapHandler from "./Dashboard Components/TiptapHandler";

//most recent post for user - edit button, delete button, timestamp, title, *images*, moodlet
//create new post button
//archive display

const Dashboard = async () => {
 

  return (
    <div className="w-full">
      <Socials />
      <div className="px-[300px]">
        <Welcome />
        <TiptapHandler />
        
      </div>
    </div>
  );
};

export default Dashboard;
