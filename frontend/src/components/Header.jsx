import { useNavigate } from "react-router-dom";
import logo from "../assets/photo.jpg";
import { IoMenu } from "react-icons/io5";

const Header = ({  toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#5172f9] text-white h-[64px] items-center flex justify-between px-[16px] fixed top-0 left-0 w-full z-50 shadow-md">
      
        <div className="flex items-center gap-5 pl-6">
          <i className="bi bi-arrow-left text-xl font-bold cursor-pointer hover:text-gray-200" onClick={()=>navigate(-1)}></i>
          <div className="text-[18px] font-semibold hidden md:block">
           Admin Panel
          </div>
        </div>

        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Logo"
            className="h-[40px] w-[40px] rounded-full object-cover md:mr-0"
          />

          <div className="text-[16px] font-medium hidden lg:block">Hi, Vikas</div>
          <IoMenu
            className=" text-black cursor-pointer lg:hidden block z-90"
            size={32}
            onClick={toggleSidebar} 
          />
        </div>
      
    </nav>
  );
};

export default Header;
