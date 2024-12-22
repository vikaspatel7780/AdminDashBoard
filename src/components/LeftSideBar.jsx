import { RiLayoutGridLine } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { MdBarChart, MdOutlineLibraryBooks } from "react-icons/md";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";
import { IoMdFolderOpen, IoMdCart } from "react-icons/io";
import { GoCopy } from "react-icons/go";
import { FaUserCircle, FaFileAlt, FaRegStar } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


const LeftSideBar = ({ isVisible }) => {
  const iconSize = "text-[20px]"; // Global icon size class
  const textSize = "text-sm"; // Gltext
  return (

    <div
      className={`fixed top-14 left-0 w-[200px] h-full z-10 bg-[#f5f7ff] text-[#aaaaaa] shadow-md transition-transform duration-300 transform overflow-scroll ${
        isVisible ? "translate-x-0 translate-y-1" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <aside className="">
        <ul className="">
          <li className="hover:bg-slate-200 mt-4">
            <Link to="/" className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
              <FaUserCircle className={`${iconSize} mr-4 text-[#3A5CFF]`}/>
              <span className={textSize}>Profile</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200">
            <Link to="/dashboard" className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
              <FaHouse className={`${iconSize} mr-4`} />
              <span className={textSize}>Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 relative">
            <Link to="/ecommerce" className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
              <IoMdCart className={`${iconSize} mr-4`} />
              <div className="absolute translate-x-20 -translate-y-3 text-white bg-[#3fcb9b] text-[9px] h-3 w-12 rounded-xl flex justify-center items-center">
                NodeJS
              </div>
              <span className={textSize}>E-commerce</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 relative">
            <Link to="/user" className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
              <FaUserCircle className={`${iconSize} mr-4`} />
              <div className="absolute translate-x-11 -translate-y-3 text-white bg-[#fd5991] text-[9px] h-3 w-7 rounded-3xl flex justify-center">
                New
              </div>
              <span className={textSize}>User</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200">
            <Link to="/documentation" className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
              <FaFileAlt className={`${iconSize} mr-4`} />
              <span className={textSize}>Documentation</span>
            </Link>
          </li>
        </ul>
      </aside>

      <div className="w-full border-b border-slate-300 mb-4 mt-3"></div>

      <div className="mx-4 my-3 text-xs">TEMPLATE</div>
      <aside className="">
        <ul className="list-unstyled">
          {[
            {
              icon: <RiLayoutGridLine className={`${iconSize} mr-4`} />,
              text: "Core",
              link: "/core"
            },
            {
              icon: <RiLayoutGridLine className={`${iconSize} mr-4`} />,
              text: "Tables",
              link: "/tables"
            },
            {
              icon: <GoCopy className={`${iconSize} mr-4`} />,
              text: "UI Elements",
              link: "/ui-elements"
            },
            {
              icon: <IoDocumentText className={`${iconSize} mr-4`} />,
              text: "Forms",
              link: "/forms"
            },
            {
              icon: <MdBarChart className={`${iconSize} mr-4`} />,
              text: "Charts",
              link: "/charts"
            },
            {
              icon: <BsGrid1X2Fill className={`${iconSize} mr-4`} />,
              text: "Grid",
              link: "/grid"
            },
            {
              icon: <IoMapSharp className={`${iconSize} mr-4`} />,
              text: "Maps",
              link: "/maps"
            },
            {
              icon: <FaRegStar className={`${iconSize} mr-4`} />,
              text: "Extra",
              link: "/extra"
            },
            {
              icon: <IoMdFolderOpen className={`${iconSize} mr-4`} />,
              text: "Menu Levels",
              link: "/menu-levels"
            },
          ].map((item, index) => (
            <li className="hover:bg-slate-200" key={index}>
              <Link to={item.link} className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
                {item.icon}
                <span className={textSize}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-full border-b border-slate-300 mb-4 mt-3"></div>

      <div className="mx-4 my-3 text-xs">HELP</div>
      <aside className="">
        <ul className="list-unstyled">
          {[
            {
              icon: <MdOutlineLibraryBooks className={`${iconSize} mr-4`} />,
              text: "Library",
              link: "/library"
            },
            { 
              icon: <i className={`${iconSize} mr-4`} />, 
              text: "Support", 
              link: "/support"
            },
          ].map((item, index) => (
            <li className="hover:bg-slate-200" key={index}>
              <Link to={item.link} className="flex items-center py-[13px] px-[30px] rounded cursor-pointer">
                {item.icon}
                <span className={textSize}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default LeftSideBar;
