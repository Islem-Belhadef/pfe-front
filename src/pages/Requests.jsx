import { useEffect, useState } from "react"
import NavbarHome from "../components/navbarHome"
import bgIcon from "../assets/bg.jpg"
import authAxios from "../api/axios"

const Requests = () => {
  const [requests, setRequests] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    authAxios
      .get("/requests")
      .then((response) => {
        setRequests(response.data.requests)
        setUser(response.data.user)
        console.error(response.data.requests)
      })
      .catch((error) => {
        console.error(error.response.data)
      })
  }, [])

  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="Requests" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full">
            {requests.length > 0 &&
              requests.map((request) => (
                <div className="bg-white p-4 rounded-lg" key={request.id}>
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">{user.first_name}</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">{user.last_name}</p>
                  </div>

                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">{request.title}</p>
                  </div>

                  <div className="flex flex-row">
                    <p>duration : </p>
                    <p id="duration">{request.duration} days</p>
                  </div>

                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">{request.company}</p>
                  </div>

                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">{request.status}</p>
                  </div>

                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Requests
