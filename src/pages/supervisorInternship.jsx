import { Link } from "react-router-dom";
import NavbarHome from "../components/navbarHome";
import bgIcon from "../assets/bg.jpg";
import Internship from "../components/internship";
const SupervisorInternship = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="supervisorInternship" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
          <div className="flex flex-col justify-around text-base">
              <div className=" flex flex-row justify-around gap-7 pt-5 ">
                <Internship page = "supervisorInternship"/>
                <Internship page = "supervisorInternship"/> 
                <Internship page = "supervisorInternship"/>               
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
              <Internship page = "supervisorInternship"/>
              <Internship page = "supervisorInternship"/>
              <Internship page = "supervisorInternship"/>
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
              <Internship page = "supervisorInternship"/>
              <Internship page = "supervisorInternship"/>
              <Internship page = "supervisorInternship"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorInternship;