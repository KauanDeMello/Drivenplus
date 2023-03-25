import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SubScriptions from "./pages/SubScriptions"
import SubScriptionsID from "./pages/SubScriptionsID"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePlan from "./pages/HomePlan"
import Modal from "./components/Modal"

export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login />}/>
                <Route path= "/sign-up" element={<Signup />}/>
                <Route path="/subscriptions" element={<SubScriptions />}/>
                <Route path="/subscriptions/ID_DO_PLANO" element={<SubScriptionsID />}/>
                <Route path="/home" element={<HomePlan />}/>
                <Route path="/modal" element={<Modal />}/>
            </Routes>

        </BrowserRouter>
    )

}