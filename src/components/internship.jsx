import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import authAxios from "../api/axios"

const Internship = ({ page, internship, user }) => {
  const navigate = useNavigate()

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
        <p>start date: </p>
        <p id="start">{internship.start_date}</p>
      </div>

      <div className="flex flex-row">
        <p>end date : </p>
        <p id="end">{internship.end_date}</p>
      </div>

      <div className="flex flex-row">
        <p>duration : </p>
        <p id="duration">{internship.duration} days</p>
      </div>
      <div className="flex flex-row justify-around gap-4 mt-4">
        {page == "supervisorInternship" && (
          <div>
            <Link
              to="presence"
              className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-36 h-9 text-center"
            >
              Mark presence
            </Link>
          </div>
        )}

        {page == "supervisorInternship" && (
          <div>
            <button
              to="notation"
              className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-36 h-9 text-center"
              onClick={() => {
                navigate(`/internship/notation/${internship.id}`)
              }}
            >
              Note the intern
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Internship
