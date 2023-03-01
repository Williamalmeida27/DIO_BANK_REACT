import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { AppContext } from "./Components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfor"
import Home from "./pages/Home"

const MainRoutes = () => {

    const {isLoggedIn} = useContext(AppContext)

    return(
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Conta/:id" element={isLoggedIn ? <Conta /> : <Home /> } />
            <Route path='/infoconta' element={<ContaInfo />} />

        </Routes>
    )
}

export default MainRoutes