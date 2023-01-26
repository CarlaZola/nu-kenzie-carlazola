import HeaderDash from "./header.js"
import { Link } from "react-router-dom"

function Header(){
    return(
        <HeaderDash>
            <Link to={"/"}>Início</Link>
        </HeaderDash>
    )
}

export default Header