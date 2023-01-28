import HeaderDash from "./header"
import { Link } from "react-router-dom"



import Logo from "./LogoNuKenzieTheme"
import ModeTheme from "./ThemeMode";

function Header({theme, setTheme}){
    return(
        <HeaderDash>          
            <Logo theme={theme}/>                               
            <div className="navBar_Header">
                <ModeTheme theme={theme} setTheme={setTheme}/>
                <Link className="button_navigate" to={"/"}>Início</Link>
            </div>
        </HeaderDash>
    )
}

export default Header