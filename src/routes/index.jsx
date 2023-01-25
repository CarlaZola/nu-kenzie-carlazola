import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"


function RoutesMain({newTransaction}){

    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/nukenzie-app" element={ <Dashboard newTransaction={newTransaction}/> }/>
        </Routes>
    )
}

export default RoutesMain