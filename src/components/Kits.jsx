// Kits.js
import { FaGitAlt, FaReact } from "react-icons/fa";

const Kits = () => {
  const kits = [
    {
      name: "React Native Starter Kit",
      link: "https://github.com/infinitered/ignite",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_EvB5OWH_ZjFmtLEsEOszFWZO8FBRKhGjg&s",
    },
    {
      name: "React Native Boilerplate",
      description: "A boilerplate for building apps with React Native.",
      link: "https://github.com/aksonov/react-native-boilerplate",
      image: "https://via.placeholder.com/100x70?text=Boilerplate",
    },
    {
      name: "Ignite CLI",
      description:
        "The hottest React Native boilerplate, with built-in best practices.",
      link: "https://github.com/infinitered/ignite",
      image: "https://via.placeholder.com/100x70?text=Ignite+CLI",
    },
    {
      name: "React Native Elements",
      description: "Cross-platform UI toolkit for React Native.",
      link: "https://github.com/react-native-elements/react-native-elements",
      image: "https://via.placeholder.com/100x70?text=Elements",
    },
    {
      name: "NativeBase",
      description: "Essential cross-platform UI components for React Native.",
      link: "https://github.com/GeekyAnts/NativeBase",
      image: "https://via.placeholder.com/100x70?text=NativeBase",
    },
  ];

  return (
    <div className="w-full bg-white p-4 container overflow-scroll h-[400px] ">
      <h2 className="text-sm font-semibold mb-3 text-[#797879]">
        Top 5 React Native Starter Kits
      </h2>
      <ul className="list-unstyled">
        {kits.map((kit, index) => (
          <li
            key={index}
            className="mb-3 p-2 border-b border-gray-200 flex "
          >
            <img
              src={kit.image}
              alt={kit.name}
              className="mr-3 rounded h-32 w-36   "
            />
            <div className="">
              <h3 className=" text-sm flex ">
                {kit.name} <FaReact className="ml-2 text-blue-500" />
              </h3>
              <p className="text-sm text-gray-600">{kit.description}</p>
              <a
                href={kit.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline "
              >
                View Kit <FaGitAlt className="inline ml-1" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kits;
