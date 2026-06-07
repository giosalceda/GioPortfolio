import Carousel from './Carousel';
import ScrollToTop from './ScrollToTop';
import { useNavigate } from "react-router-dom";

const GamePageContent = ({ slides, title, description }) => {
  const navigate = useNavigate();

  return (
    <div className='mt-2'>
      <ScrollToTop/>
      <h1 className="mb-2 text-2xl lg:text-4xl text-yellow font-bold">{title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-4 gap-y-4">
        <Carousel slides={slides}/>

        <div className="flex flex-col-reverse lg:flex-col justify-between w-full">
          <p className="text-justify text-md lg:text-2xl text-gray-300">{description}</p>

          <div className=" hidden lg:flex justify-between space-x-4">
            <button className="text-center p-3 rounded-xl border-4 border-blue-600 font-bold w-44 text-2xl cursor-pointer" onClick={() => navigate(-1)}>Back</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GamePageContent;
