import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { Link } from "react-router-dom";

const Card = ({ image, title, details, people, time, link }) => {
  return (
    <Link
      to={link}
      className="border-2 border-gray-700 rounded-2xl overflow-hidden bg-gray-800 
      duration-200 ease-out hover:scale-105 cursor-pointer flex flex-col h-full"
    >
      {/* Image */}
      <img
        src={image}
        alt="Game Thumbnail"
        className="w-full h-55 object-cover"
        loading="lazy"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Top content */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>
          <p className="text-gray-300 text-lg text-justify">{details}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-4 mt-auto pt-4">
          <div className="flex items-center gap-1">
            <TiGroup />
            <p>{people}</p>
          </div>

          <div className="flex items-center gap-1">
            <MdOutlineAccessTimeFilled />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
