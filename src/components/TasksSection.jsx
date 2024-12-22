import { useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../Redux/TaskSlice";


const TasksSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
 // Initialize as an empty object
 
 
  const [popupVisible, setPopupVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [userTime, setUserTime] = useState();
  const [userTask, setUserTask] = useState()
  
  const tasksData = useSelector((state) => state.Tasks.TasksData);
  const dispatch = useDispatch()
  const handleDotClick = (index) => {
    setSelectedTaskIndex(index);
    setPopupVisible(true);
  };


  const handleEdit = () => {
    setEditVisible(true);
  };

  const handleSaveEdit = () =>{
    toast.success("Your task was updated successfully!")
    setEditVisible(false);
  }
  const handleDelete = () => {
    if (selectedTaskIndex !== null) {
      const updatedTasks = { ...tasksData };
      toast.success("Task successfully removed from your list!")
      updatedTasks[selectedFilter] = updatedTasks[selectedFilter].filter(
        (_, index) => index !== selectedTaskIndex
      );
      // setTasksData(updatedTasks);
      dispatch(setTasks(updatedTasks))
      setPopupVisible(false);
    }
  };

 
  
  

  
  const filteredTasks = tasksData[selectedFilter] || [];

  return (
    <div className="w-full sm:w-[380px] md:w-[100%] lg:w-[100%] container bg-white text-gray-700 overflow-y-auto h-[420px] overflow-x-auto">
      <div className="px-2 py-3">
        <div className="text-[#9D9D9D] text-lg ">Tasks</div>

        <div className="border-b mt-1 w-[340px] md:w-full">
          <ul className="flex space-x-4">
            {["Today", "ThisWeek", "ThisMonth"].map((filter) => (
              <li key={filter}>
                <button
                  className={`text-gray-600 p-2 text-xs font-semibold border-b-2 transition-colors ${
                    selectedFilter === filter
                      ? "border-red-500 text-red-600"
                      : "border-transparent hover:border-red-300"
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="text-[12px] mt-2 w-[340px] md:w-full">
          {filteredTasks.map(({ time, color, task }, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-2 py-2 border-b hover:bg-gray-100 transition duration-200"
            >
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-4">{time}</span>
                <span
                  className={`inline-block w-2 h-2 bg-${color}-500 rounded-full mr-2`}
                ></span>
                <span className="text-gray-800 font-semibold">{task}</span>
              </div>
              <i
                className="bi bi-three-dots-vertical text-gray-600 text-lg hover:text-red-600 cursor-pointer transition-colors duration-300"
                onClick={() => handleDotClick(index)}
              ></i>
            </li>
          ))}
        </ul>

        {popupVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300">
              <p className="text-lg font-semibold mb-4">Options</p>
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
              <button
                onClick={() => setPopupVisible(false)}
                className="absolute top-2 right-2 text-gray-600 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {editVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div
              className="bg-white p-4 rounded shadow-lg transform transition-all duration-300"
              style={{ width: "400px" }}
            >
              <h5 className="text-lg font-semibold mb-4">Edit Task</h5>

              <div className="mb-3">
                <label htmlFor="taskTime" className="form-label">
                  Select Time (24-hour format)
                </label>
                <input
                  type="time"
                  id="taskTime"
                  className="form-control"
                  placeholder="Select Time"
                  onChange={(e)=>setUserTime(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="taskTitle" className="form-label">
                  Task Title
                </label>
                <textarea
                  id="taskTitle"
                  className="form-control"
                  rows="3"
                  placeholder="Enter Task Title"
                  onChange={(e)=>setUserTask(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button className="btn btn-primary me-2" onClick={handleSaveEdit}>Save</button>
                <button
                  onClick={() => setEditVisible(false)}
                  className="btn btn-outline-secondary"
                >
                  Cancel
                </button>
              </div>

              <button
                onClick={() => setEditVisible(false)}
                className="position-absolute top-2 end-2 text-gray-600 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksSection;
