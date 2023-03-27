import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SubScriptions from "./pages/SubScriptions"
import SubScriptionsID from "./pages/SubScriptionsID"
import HomePlan from "./pages/HomePlan"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import {UserContext} from "./contexts/UserContext"

export default function App() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      if (credentials) {
        setUser(credentials);
      }
    }, []);
  
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/subscriptions" element={<SubScriptions />} />
            <Route
              path="/subscriptions/ID_DO_PLANO"
              element={<SubScriptionsID />}
            />
            <Route path="/home" element={<HomePlan />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }