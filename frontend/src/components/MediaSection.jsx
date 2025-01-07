
const MediaSection = () => {
  return (
    <div className=" w-full md:w-1/2 lg:w-full container bg-white h-[240px]">
      <div className=" px-2 py-3 overflow-hidden">
       
          <div className=" text-lg mb-2 text-[#9D9D9D]">
            Media
          </div>

          <div className="w-full flex justify-between mb-8">
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-green-200 rounded-full px-2 py-1 flex items-center justify-center">
                <i className="bi bi-file-earmark-text text-green-600 text-lg "></i>
              </div>
              <p className="text-black text-sm">192</p>
              <p className="text-slate-500 text-xs">Post</p>
            </div>

            <div className="flex flex-col items-center w-1/3">
              <div className="bg-red-200 rounded-full px-2 py-1 flex items-center justify-center">
                <i className="bi bi-copy text-red-600 text-lg "></i>
              </div>
              <p className="text-black font-semibold text-sm">554</p>
              <p className="text-slate-500 text-xs">Project</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-blue-200 rounded-full px-2 py-1 flex items-center justify-center">
                <i className="bi bi-people text-blue-600 text-lg"></i>
              </div>
              <p className="text-black font-semibold text-sm">12.8k</p>
              <p className="text-slate-500 text-xs ">Followers</p>
            </div>

            <div className="flex flex-col items-center w-1/3 ">
              <div className="bg-orange-200 rounded-full px-2 py-1 flex items-center justify-center">
                <i className="bi bi-person-add text-orange-600 text-lg"></i>
              </div>
              <p className="text-black font-semibold text-sm">1.1k</p>
              <p className="text-slate-500 text-xs ">Following</p>
            </div>
          </div>

       
      </div>
    </div>
  );
};

export default MediaSection;
