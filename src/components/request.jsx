import { useEffect } from "react"
import authAxios from "../api/axios"

const Request = ({ page, request, user }) => {
  const handleAcceptRequest = () => {
    authAxios
      .post(`http://127.0.0.1:8000/api/requests/update/${request.id}`, {
        status: window.localStorage.getItem("role") == 1 ? 1 : 3,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const handleRefuseRequest = () => {
    authAxios
      .post(`http://127.0.0.1:8000/api/requests/update/${request.id}`, {
        status: window.localStorage.getItem("role") == 1 ? 2 : 4,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  return (
    <div className="bg-white p-4 rounded-lg">
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
        <p id="status">
          {request.status == 0
            ? "pending"
            : request.status == 1
            ? "accepted by HOD"
            : request.status == 2 || request.status == 4
            ? "rejected"
            : "accepted"}
        </p>
      </div>
      <div className="flex flex-row justify-around gap-4 mt-4">
        {(page === "hodHome" || page === "supervisorHome") && (
          <div>
            <button
              type="button"
              className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
              onClick={handleRefuseRequest}
            >
              Refuse
            </button>
          </div>
        )}

        {(page === "hodHome" || page === "supervisorHome") && (
          <div>
            <button
              type="button"
              className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
              onClick={handleAcceptRequest}
            >
              Accept
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Request
