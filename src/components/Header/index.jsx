import HeaderDash from "./header"
import { Link } from "react-router-dom"

function Header(){
    return(
        <HeaderDash>
            <Link to={"/"}>Início</Link>
        </HeaderDash>
    )
}

export default Header