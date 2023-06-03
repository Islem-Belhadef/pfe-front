import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import studentHome from "./pages/studentHome"
import supervisorHome from "./pages/supervisorHome"
import hodHome from "./pages/hodHome"
import SignupForm from "./pages/signupForm"
import RequestForm from "./pages/RequestForm"
import Requests from "./pages/Requests"
import account from "./pages/account"
import accountManagment from "./pages/accountManagment"
import NewAccountForm from "./pages/newaccountForm"
import internship from "./pages/internship"
import notation from "./pages/notation"
import presence from "./pages/presence"
function App() {
  const type = window.localStorage.getItem("type")
  const home =
    type == 0
      ? studentHome
      : type == 1
      ? hodHome
      : type == 2
      ? supervisorHome
      : Home

  return (
    <Router>
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/presence" Component={presence} />
        <Route path="/notation" Component={notation} />
        <Route path="/internship" Component={internship} />
        <Route path="/newaccountForm" Component={NewAccountForm} />
        <Route path="/accountManagment" Component={accountManagment} />
        <Route path="/account" Component={account} />
        <Route path="/Requests" Component={Requests} />
        <Route path="/requestForm" Component={RequestForm} />
        <Route path="/signupForm" Component={SignupForm} />
        {/* <Route path="/hodHome" Component={hodHome} />
        <Route path="/supervisorHome" Component={supervisorHome} />
        <Route path="/studentHome" Component={studentHome} />
        <Route path="/Home" Component={Home} /> */}
        <Route path="/Signup" Component={Signup} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </Router>
  )
}

export default App
