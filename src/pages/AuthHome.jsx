import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavbarHome from "../components/navbarHome"
import bgIcon from "../assets/bg.jpg"
import Request from "../components/request"
import authAxios from "../api/axios"

const AuthHome = () => {
  const type = window.localStorage.getItem("role")
  const page =
    type == 0 ? "studentHome" : type == 1 ? "hodHome" : "supervisorHome"

  const [requests, setRequests] = useState([])
  //   const [users, setUsers] = useState([])
  //   let i = 0

  useEffect(() => {
    authAxios
      .get("http://127.0.0.1:8000/api/requests")
      .then((response) => {
        setRequests(response.data.internshipRequests)
        // setUsers(response.data.users)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error.response.data)
      })
  }, [])

  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="studentHome" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="grid grid-cols-3 justify-around text-base gap-6 p-8">
              {requests.length > 0 &&
                requests.map((request) => (
                  <Request
                    page={page}
                    request={request.request}
                    user={request.user}
                    key={request.request.id}
                  />
                ))}
            </div>
            {requests.length == 0 && (
              <h1 className="text-white">There is no internship requests</h1>
            )}
            {type == 0 && (
              <div className="flex justify-center items-end pr-10 pt-5">
                <Link
                  to="/RequestForm"
                  className="focus:outline-none text-white bg-primary hover:bg-purple-950 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 h-9"
                >
                  add an internship request
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthHome
