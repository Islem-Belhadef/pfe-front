import NavbarHome from "../components/navbarHome"
import bgIcon from "../assets/bg.jpg"
import Internship from "../components/internship"
import { useEffect } from "react"
import authAxios from "../api/axios"
import { useState } from "react"

const Internships = () => {
  const type = window.localStorage.getItem("role")
  const page =
    type == 0 ? "studentHome" : type == 2 ? "supervisorInternship" : "else"

  const [internships, setInternships] = useState([])

  useEffect(() => {
    authAxios
      .get("http://127.0.0.1:8000/api/internships")
      .then((response) => {
        setInternships(response.data.allInternships)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error.response.data)
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
            <div className="grid grid-cols-3 justify-around text-base gap-6 p-8">
              {internships.map((internship) => (
                <Internship
                  page={page}
                  internship={internship.internship}
                  user={internship.user}
                  key={internship.internship.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Internships
