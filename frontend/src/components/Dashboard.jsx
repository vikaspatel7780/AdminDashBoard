import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
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
import Login from "../Pages/Login/Login";

const Profile = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));
  const location = useLocation();

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  const shouldShowHeaderAndSidebar = location.pathname !== "/login";
  if (!isAuthenticated && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col w-full h-full">
      {shouldShowHeaderAndSidebar && (
        <>
          <Header isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          <div className="flex">
            <LeftSideBar
              isVisible={isSidebarVisible}
              toggleSidebar={toggleSidebar}
              className={`${isSidebarVisible ? "w-64" : "w-0"} transition-all`}
            />
            <div className={`flex-1 transition-all`}>
              <Routes>
                <Route path="/" element={<RightSideBar />} />
                <Route path="/ecommerce" element={<ECommerce />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/core" element={<Core />} />
                <Route path="/tables" element={<Table />} />
                <Route path="/ui-elements" element={<UiElements />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/grid" element={<Grid />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/extra" element={<Extra />} />
                <Route path="/menu-levels" element={<MenuLevels />} />
                <Route path="/library" element={<Library />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </>
      )}

      {!shouldShowHeaderAndSidebar && (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default Profile;
