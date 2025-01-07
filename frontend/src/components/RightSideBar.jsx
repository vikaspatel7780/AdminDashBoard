import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import FileCard from "./FileCard";
import MediaSection from "./MediaSection";
import ProjectSection from "./ProjectSection";
import TasksSection from "./TasksSection";
import CalenderSection from "./CalenderSection.jsx";
import { IoMdSettings } from "react-icons/io";
import Kits from "./Kits";
import View from "./View";
import { useDispatch } from "react-redux";
import { setFiles } from "../Redux/fileSlice";
import {setTasks } from "../Redux/TaskSlice.js";
import { useEffect, useState } from "react";


const RightSideBar = () => {
const dispatch = useDispatch()
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/filesData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
        
      })
      .then((data) => {
        dispatch(setFiles(data))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      });
  });

  useEffect(() => {
    fetch("/TaskData.json") // Path to the JSON file in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setTasks(data))
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  });
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (loading) {
    return (
      <div className="fixed inset-0 d-flex justify-content-center align-items-center bg-white bg-opacity-75 z-50">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="lg:ml-[200px] w-full py-8 pl-6 pr-6 bg-[#ebecfd] flex flex-col">
      {/* Settings Icon */}
      <div className="absolute right-0 h-9 w-9 text-white items-center flex justify-center bg-blue-600 translate-y-8 rounded-l-full cursor-pointer">
        <IoMdSettings />
      </div>

      {/* Breadcrumb */}
      <div className="bg-white text-[18px] p-2 rounded mb-4">
        <span className="px-2">App</span>
        <span>&gt;</span>
        <span className="px-2 text-primary">Profile</span>
      </div>

      {/* Profile and FileCard */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        <Profile />
        <FileCard />
      </div>

      {/* Media, Project, Kits, Tasks, Calendar, and View Sections */}
      <div className="w-full flex flex-col xl:flex-row gap-4 justify-between">
        <div className="w-full xl:w-[40%] flex flex-col items-center justify-center">
          {/* Media and Project Section */}
          <div className="w-full  flex flex-col md:flex-row gap-4">
            <MediaSection />
            <ProjectSection />
          </div>
          <Kits />
        </div>

        <div className="w-full xl:w-[59%] flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4">
          <TasksSection />
          <div className="w-full md:w-[40%] flex flex-col  gap-4 items-start">
            <CalenderSection />
            <View />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default RightSideBar;
