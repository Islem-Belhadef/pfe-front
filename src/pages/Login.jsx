import Navbar from "../components/navbar"
import loginIcon from "../assets/login.svg"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .post("http://127.0.0.1:8000/api/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          console.log("login successful")
          console.log("role: " + res.data.user.role)
          window.localStorage.setItem("role", res.data.user.role)
          window.localStorage.setItem("token", res.data.token)
          navigate("/")
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("wrong credentials try again")
          setErrorMsg("Invalid credentials")
        }
      })
  }

  const handleTogglePassword = () => setShowPassword(!showPassword)

  return (
    <div className="login-container font-ralewey text-2xl">
      <div>
        <Navbar page="Login" />
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-center">
          <img src={loginIcon} alt="login" className="w-fit h-fit" />
        </div>
        <div className="col-span-1 flex items-center mt-28">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              className="  border-2 border-primary  rounded-md w-96 placeholder: "
              placeholder="@univ-constantine2.dz"
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <label htmlFor="password">Password</label>
            <div className="password-input flex flex-col items-end">
              <div className="flex ">
                <input
                  className="border-2 border-primary rounded-md w-96 "
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <button type="button" onClick={handleTogglePassword}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="pr-14">
                <a href="/forgot-password" className="text-xs">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="focus:outline-none text-white bg-primary hover:bg-purple-950 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 "
              >
                Login
              </button>
            </div>

            {errorMsg && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
