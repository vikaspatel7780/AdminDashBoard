import { useState } from "react";

const ProjectSection = () => {
  // State to track if the project details are visible
  const [showDetails, setShowDetails] = useState(false);

  // Sample project details (replace with actual data)
 
  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-full mb-6 px-2 py-3  container bg-white h-[240px] ">
      <div className="text-lg mb-2 text-[#9D9D9D]">Projects</div>
      <div className="flex justify-center items-center mb-[17px]">
   
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="rounded-full border-8 border-yellow-500 border-t-blue-500 border-r-red-500 border-b-green-500 w-full h-full"></div>
          <div className="absolute text-lg font-bold">121</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between text-[12px] gap-1">
        <div className="flex items-center">
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mr-1"></span>{" "}
          New
        </div>
        <div className="flex items-center">
          <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>{" "}
          In Progress
        </div>
        <div className="flex items-center">
          <span className="inline-block w-1 h-1 bg-green-500 rounded-full mr-1"></span>{" "}
          Complete
        </div>
        <div className="flex items-center">
          <span className="inline-block w-1 h-1 bg-yellow-500 rounded-full mr-1"></span>{" "}
          Cancel
        </div>
      </div>

      <div className="text-right mt-2">
        <button
          className="btn btn-outline-primary text-xs"
          onClick={handleDetailsClick}
        >
          {showDetails ? "HIDE DETAILS" : "DETAILS"}
        </button>
      </div>
      {showDetails && (
        <div
          className="fixed inset-0 bg-slate-800 bg-opacity-40 flex items-center justify-center z-90"
          onClick={() => setShowDetails(false)} // Clicking outside will close the pop-up
        >
          <div
            className=" bg-white text-light p-4 border rounded shadow-lg position-relative h-64"
            style={{ width: "300px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close btn-close-black position-absolute top-0 end-0 m-2"
              aria-label="Close"
              onClick={() => setShowDetails(false)}
            ></button>
            <div className="">
              <strong className="text-lg text-gray-700 block mb-2">
                Project Summary
              </strong>
              <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                <li className="">
                  <strong>New Projects:</strong> 32
                </li>
                <li className="">
                  <strong>In Progress Projects:</strong> 29
                </li>
                <li className="">
                  <strong>Completed Projects:</strong> 31
                </li>
                <li className="">
                  <strong>Canceled Projects:</strong> 30
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
