import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex-1 flex flex-col justify-center items-center text-center text-white px-4 ">
        <h1 className="text-[40px] font-medium mb-8 leading-[136%] tracking-[0%] text-center uppercase font-[Montserrat]">
          LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. MORBI.
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8 font-semibold">
          <span className="cursor-pointer hover:text-yellow-500">
            LABOUR CAMPS
          </span>{" "}
          |
          <span className="cursor-pointer hover:text-yellow-500">
            PROPERTY BROKERAGE
          </span>{" "}
          |
          <span className="cursor-pointer hover:text-yellow-500">
            PROPERTY MARKETING
          </span>{" "}
          |
          <span className="cursor-pointer hover:text-yellow-500">
            PROPERTY SERVICES
          </span>{" "}
          |
          <span className="cursor-pointer hover:text-yellow-500">
            PROPERTY INVESTMENT
          </span>
        </div>
        <button className="bg-[linear-gradient(100.57deg,_#B8943E_24.44%,_#976621_98.57%)] text-white px-6 py-3 rounded hover:opacity-90 font-medium mt-6">
          <NavLink to="/contact">CONTACT US</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
