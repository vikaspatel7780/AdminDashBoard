import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import photo from '../assets/photo.jpg'

const Profile = () => {
  const [profilePic, setProfilePic] = useState(
    photo
  );
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const allFileData = useSelector((state) => state.files.fileData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-[58%] xl:w-[40%] mb-4 bg-white text-center p-2 md:p-1  container lg:h-[235px] md:h-[280px] h-[460px] ">
      <div className="mt-2 lg:mt-10 flex md:gap-0 lg:gap-8 lg:flex-row md:flex-row flex-col items-center md:items-start ">
        <div className="flex gap-2 flex-col md:flex-col lg:flex-col items-center mt-2 pl-4">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle mb-2 border-dotted border-2 border-blue-600 rounded-full p-1 h-[175px] w-[175px] md:h-[140px] md:w-[140px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] "
          />
          <input
            type="file"
            id="profile-picture-input"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />

          <div className=" flex gap-2 ">
            <label htmlFor="profile-picture-input">
              <FaUserEdit className=" text-xl cursor-pointer " />
            </label>
            <div className="text-white bg-[#fd5991] text-xs px-3 py-1 rounded-3xl">
              Pro
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-center lg:items-start px-2   ">
          <div className="card-title text-[30px] font-bold mb-2">
            Vikas Patel
          </div>
          <div className="card-text text-muted mb-1 text-[12px] ">
            Software Engineer
          </div>
          <a
            href="https://vscoder7780.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-primary text-sm mb-4">vscoder7780.com</div>
          </a>
          <div className="flex  cursor-pointer space-x-2 gap-1 flex-wrap">
            <div
              className="rounded-sm text-center w-9 h-5 flex items-center justify-center "
              style={{ backgroundColor: allFileData?.workFiles[0]?.Textcolor }}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)} 
            >
              <div
                className="text-blue-800 text-[9px] font-semibold"
              >
                {allFileData?.workFiles[0]?.name}
              </div>
              {isHovered1 && (
                <div
                  className="absolute -translate-y-6 text-sm text-blue-500 bg-slate-50 border border-gray-300 rounded shadow-lg p-2 transition-opacity duration-200"
                  style={{ zIndex: 10 }}
                >
                  {parseInt(allFileData?.workFiles[0]?.numberOfFile) +
                    parseInt(allFileData?.socialFiles[0]?.numberOfFile) +
                    parseInt(allFileData?.privateFiles[0]?.numberOfFile)}
                </div>
              )}
            </div>
            <div className=" rounded-sm text-center w-9 h-5 flex items-center justify-center bg-pink-200"  onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}>
              <div
                className="text-pink-700 text-[9px] font-semibold"
               
              >
                {allFileData?.workFiles[1]?.name}
              </div>
              {isHovered2 && (
                <div
                  className="absolute -translate-y-6 text-sm pink-green-500 bg-slate-50 border border-gray-300 rounded shadow-lg p-2 transition-opacity duration-200"
                  style={{ zIndex: 10 }}
                >
                  {parseInt(allFileData?.workFiles[1]?.numberOfFile) +
                    parseInt(allFileData?.socialFiles[1]?.numberOfFile) +
                    parseInt(allFileData?.privateFiles[1]?.numberOfFile)}
                </div>
              )}
            </div>
            <div className=" rounded-sm text-center w-6 h-5 flex items-center justify-center  bg-yellow-200  " onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}>
              <div
                className="text-yellow-500 text-[9px] font-semibold"
                
              >
                {allFileData?.workFiles[2]?.name}
              </div>
              {isHovered3 && (
                <div
                  className="absolute -translate-y-6 text-sm text-yellow-500 bg-slate-50 border border-gray-300 rounded shadow-lg p-2 transition-opacity duration-200"
                  style={{ zIndex: 10 }}
                >
                  {parseInt(allFileData?.workFiles[2]?.numberOfFile) +
                    parseInt(allFileData?.socialFiles[2]?.numberOfFile) +
                    parseInt(allFileData?.privateFiles[2]?.numberOfFile)}
                </div>
              )}
            </div>
            <div className=" rounded-sm text-center w-14 h-5 flex items-center justify-center bg-yellow-200" onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}>
              <div
                className="text-yellow-500 text-[9px] font-semibold"
                
              >
                {allFileData?.workFiles[3]?.name}
              </div>
              {isHovered4 && (
                <div
                  className="absolute -translate-y-6 text-sm text-yellow-500 bg-slate-50 border border-gray-300 rounded shadow-lg p-2 transition-opacity duration-200"
                  style={{ zIndex: 10 }}
                >
                  {parseInt(allFileData?.workFiles[3]?.numberOfFile) +
                    parseInt(allFileData?.socialFiles[3]?.numberOfFile) +
                    parseInt(allFileData?.privateFiles[3]?.numberOfFile)}
                </div>
              )}
            </div>
            <div
              className="rounded-sm w-9 h-5 flex items-center justify-center bg-green-200"
              // Set the background color dynamically
              onMouseEnter={() => setIsHovered5(true)} 
                onMouseLeave={() => setIsHovered5(false)}
            >
              <div
                className="text-[9px] font-semibold text-green-500"
                // style={{ color: allFileData?.workFiles[4]?.Textcolor }} // Corrected to color
                 // Set hover state to false
              >
                {allFileData?.workFiles[4]?.name}
              </div>
              {isHovered5 && (
                <div
                  className="absolute -translate-y-6 text-sm text-green-500 bg-slate-50 border border-gray-300 rounded shadow-lg p-2 transition-opacity duration-200"
                  style={{ zIndex: 10 }}
                >
                  {parseInt(allFileData?.workFiles[4]?.numberOfFile) +
                    parseInt(allFileData?.socialFiles[4]?.numberOfFile) +
                    parseInt(allFileData?.privateFiles[4]?.numberOfFile)}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap text-slate-400 mt-3 text-lg cursor-pointer">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook p-2 hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter p-2 hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.xbox.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-xbox p-2 hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-behance p-2 hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram p-2 hover:text-blue-400"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
