import { useState } from "react";

const CalenderSection = () => {
  // Get the current date
  const today = new Date();
  
  // Initialize state for the selected month, year, and selected day
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0-indexed
  const [selectedDay, setSelectedDay] = useState(null);

  // Helper function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the month and total days in the month
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = getDaysInMonth(year, month);

  // Create an array to hold the calendar cells (42 cells: 6 weeks x 7 days)
  const calendarDays = Array(42).fill(null);

  // Fill in the days of the month
  for (let day = 1; day <= totalDays; day++) {
    calendarDays[firstDay + day - 1] = day;
  }

  // Function to handle month navigation
  const handleMonthChange = (direction) => {
    setMonth((prevMonth) => {
      let newMonth = prevMonth + direction;
      if (newMonth > 11) {
        setYear((prevYear) => prevYear + 1);
        return 0; // Wrap around to January
      } else if (newMonth < 0) {
        setYear((prevYear) => prevYear - 1);
        return 11; // Wrap around to December
      }
      return newMonth;
    });
  };

  // Function to handle date click
  const handleDateClick = (day) => {
    setSelectedDay(day);
    alert(`You selected ${month + 1}/${day}/${year}`);
  };

  // Array to display month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="w-full lg:w-full container bg-white px-2 py-3 h-[210px]">
      <div className="text-center items-center">
        <div className="">
          <div className="card-title text-sm font-semibold text-slate-600 flex justify-between mb-2">
            <div
              className="cursor-pointer text-[#E0E1E3] hover:text-slate-800"
              onClick={() => handleMonthChange(-1)}
            >
              &lt;
            </div>
            <div>{`${monthNames[month]} ${year}`}</div>
            <div
              className="cursor-pointer text-[#E0E1E3] hover:text-slate-800"
              onClick={() => handleMonthChange(1)}
            >
              &gt;
            </div>
          </div>
          <table className="w-full text-center cursor-pointer">
            <thead>
              <tr className="text-[#E0E1E3]">
                <th className="py-1 px-2 text-xs">S</th>
                <th className="py-1 px-2 text-xs">M</th>
                <th className="py-1 px-2 text-xs">T</th>
                <th className="py-1 px-2 text-xs">W</th>
                <th className="py-1 px-2 text-xs">T</th>
                <th className="py-1 px-2 text-xs">F</th>
                <th className="py-1 px-2 text-xs">S</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {Array.from({ length: 6 }, (_, weekIndex) => (
                <tr key={weekIndex} className="text-gray-800">
                  {calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, index) => (
                    <td key={index} className="py-1 px-2">
                      {day ? (
                        <div
                          onClick={() => handleDateClick(day)}
                          className={`hover:bg-[#7690F9] rounded-full h-5 items-center flex justify-center ${
                            day === today.getDate() &&
                            month === today.getMonth() &&
                            year === today.getFullYear()
                              ? "bg-[#7690F9] text-white"
                              : day === selectedDay
                              ? "bg-blue-200 text-white" // Highlight selected day
                              : ""
                          }`}
                        >
                          {day}
                        </div>
                      ) : (
                        <div className="py-1 px-2"></div> // Empty cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalenderSection;
