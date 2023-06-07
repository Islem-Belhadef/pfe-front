import { Link } from "react-router-dom"
import NavbarHome from "../components/navbarHome"
import bgIcon from "../assets/bg.jpg"
import { useEffect, useState } from "react"
import authAxios from "../api/axios"

const accountManagment = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    authAxios
      .get("http://127.0.0.1:8000/api/users")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data.users)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const handleDeleteAccount = (user) => {
    authAxios
      .delete(`http://127.0.0.1:8000/api/users/${user.id}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="accountManagment" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className=" grid grid-cols-4 justify-around text-base gap-6 p-8 ">
              {users.map((user) => (
                <div className="bg-white p-4 rounded-lg" key={user.id}>
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">{user.first_name}</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">{user.last_name}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-primary">Email: </p>
                    <p id="email">{user.email}</p>
                  </div>
                  <div className="flex flex-row">
                    <p>account type : </p>
                    <p id="account_type">
                      {user.role == 0
                        ? "Student"
                        : user.role == 1
                        ? "Head of Department"
                        : "Internship supervisor"}
                    </p>
                  </div>

                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="Delete"
                        className="flex justify-center mt-4 focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                        onClick={() => {
                          handleDeleteAccount(user)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/newaccountForm"
                className="focus:outline-none text-white bg-primary hover:bg-purple-950  font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 h-9"
              >
                create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default accountManagment
