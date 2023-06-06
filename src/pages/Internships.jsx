import NavbarHome from "../components/navbarHome"
import bgIcon from "../assets/bg.jpg"
import Internship from "../components/internship"
import { useEffect } from "react"
import authAxios from "../api/axios"
import { useState } from "react"

const StudentInternship = () => {
  const [internships, setInternships] = useState([])

  useEffect(() => {
    authAxios
      .get("http://127.0.0.1:8000/api/internships")
      .then((res) => {
        console.log()
        setInternships(res.data.internships)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="studentInternship" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col justify-around text-base">
              <div className=" flex flex-row justify-around gap-7 pt-5 ">
                <Internship />
                <Internship />
                <Internship />
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
                <Internship />
                <Internship />
                <Internship />
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
                <Internship />
                <Internship />
                <Internship />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentInternship
