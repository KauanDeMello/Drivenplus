import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SubScriptions from "./pages/SubScriptions"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login />}/>
                <Route path= "/sign-up" element={<Signup />}/>
                <Route path="/subscriptions" element={<SubScriptions/>}/>
           
            </Routes>

        </BrowserRouter>
    )

}