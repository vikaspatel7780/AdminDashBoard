import {
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { BsThreeDotsVertical } from "react-icons/bs";
  import { useState } from "react";
  
  const data = [
    { name: "Jan", uv: 70 },
    { name: "Feb", uv: 90 },
    { name: "Mar", uv: 30 },
    { name: "Apr", uv: 100 },
  ];
  
  const View = () => {
    const [popupVisible, setPopupVisible] = useState(false);
  
    const togglePopup = () => {
      setPopupVisible(!popupVisible);
    };
  
    return (
      <div className="w-full md:w-[280px] container mx-auto bg-white p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold">Views</div>
          <BsThreeDotsVertical className="text-gray-600 cursor-pointer" onClick={togglePopup} />
        </div>
  
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="text-2xl font-bold text-gray-800">7,156</div>
            <div className="text-xs text-green-500 mb-2">+7.2%</div>
            <button className="btn btn-outline-primary text-xs mt-1" onClick={togglePopup}>
              See More
            </button>
          </div>
  
          <ResponsiveContainer width="55%" height={96}>
            <AreaChart data={data} margin={{ top: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="2">
                  <stop offset="100%" stopColor="#536DFE" />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="none" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#536DFE"
                fillOpacity={0.6}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
  
        {popupVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300" style={{ width: '320px' }}>
      <h5 className="text-lg font-semibold mb-4">Project Progress</h5>
      
      <div className="flex flex-col space-y-4">
        {/* Progress Points */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Point 1</span>
          <div className="flex flex-col items-end">
            <span className="font-semibold">7,156</span>
            <span className="text-green-500 font-medium">+7.2%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Point 2</span>
          <div className="flex flex-col items-end">
            <span className="font-semibold">15,300</span>
            <span className="text-green-500 font-medium">+4.5%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Point 3</span>
          <div className="flex flex-col items-end">
            <span className="font-semibold">10,450</span>
            <span className="text-red-500 font-medium">-2.1%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Point 4</span>
          <div className="flex flex-col items-end">
            <span className="font-semibold">20,000</span>
            <span className="text-green-500 font-medium">+10.0%</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="btn btn-outline-secondary text-xs" onClick={togglePopup}>
          Close
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    );
  };
  
  export default View;
  