import { useState } from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Core from "../Pages/Core/Core";
import Documentation from "../Pages/Documentation/Documentation";
import ECommerce from "../Pages/ECommerce/ECommerce";
import Charts from "../Pages/Charts/Charts";
import Extra from "../Pages/Extra/Extra";
import Forms from "../Pages/Forms/Forms";
import Grid from "../Pages/Grid/Grid";
import Library from "../Pages/Library/Library";
import Maps from "../Pages/Maps/Maps";
import MenuLevels from "../Pages/MenuLevels/MenuLevels";
import Table from "../Pages/Table/Table";
import UiElements from "../Pages/UiElements/UiElements";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login"


const Profile = () => {
  const [isVisible, setIsVisible] = useState(false); // Manage the visibility state here

  const toggleSidebar = () => {
    setIsVisible(!isVisible); // Toggle sidebar visibility
  };

  return (
    <div className="flex flex-col w-full">

      <Header isVisible={isVisible} toggleSidebar={toggleSidebar} />

      <div className="flex mt-16 w-full">
        <LeftSideBar isVisible={isVisible} toggleSidebar={toggleSidebar} className="" />

        <Routes>
          <Route>
          <Route path="/" element={<RightSideBar />} />

          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/core" element={<Core />} />
          <Route path="/tables" element={<Table/>} />
          <Route path="/ui-elements" element={<UiElements />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/menu-levels" element={<MenuLevels />} />
          <Route path="/library" element={<Library />} />
          <Route path="/user" element={<User />} />
            
          </Route>
        </Routes>
       
      </div>
    </div>
  );
};

export default Profile;
