import { IoMdSettings } from "react-icons/io";
const Grid = () =>{
    return(
        <div className="lg:ml-[200px] w-full py-8 pl-6 pr-6 bg-[#ebecfd] flex flex-col">
        <div className="absolute right-0 h-9 w-9 text-white items-center flex justify-center bg-blue-600 translate-y-8 rounded-l-full cursor-pointer">
          <IoMdSettings />
        </div>
  
        <div className="bg-white text-[18px] p-2 rounded mb-4">
          <span className="px-2">App</span>
          <span>&gt;</span>
          <span className="px-2 text-primary">Grid</span>
        </div>
      </div>
    )
}

export default Grid