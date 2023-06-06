import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import SignupForm from "./pages/signupForm"
import RequestForm from "./pages/RequestForm"
import account from "./pages/account"
import accountManagment from "./pages/accountManagment"
import NewAccountForm from "./pages/newaccountForm"
import Internships from "./pages/Internships"
import notation from "./pages/notation"
import presence from "./pages/presence"
import AuthHome from "./pages/AuthHome"

function App() {
  const role = window.localStorage.getItem("role")
  const home = role == null ? Home : AuthHome

  return (
    <Router>
      <Routes>
        <Route path="/" Component={home} />
        <Route
          path="/internship/presence"
          Component={role == 2 ? presence : redirect("/")}
        />
        <Route
          path="/internship/notation"
          Component={role == 2 ? notation : redirect("/")}
        />
        <Route path="/internships" Component={Internships} />
        <Route path="/newaccountForm" Component={NewAccountForm} />
        <Route path="/accountManagment" Component={accountManagment} />
        <Route path="/account" Component={account} />
        <Route path="/requestForm" Component={RequestForm} />
        <Route path="/signupForm" Component={SignupForm} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </Router>
  )
}

export default App
