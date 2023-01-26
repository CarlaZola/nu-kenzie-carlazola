import HeaderDash from "./header"
import { Link } from "react-router-dom"


import Logo from "./LogoNuKenzieTheme"
import ModeTheme from "./ThemeMode";

function Header({theme, setTheme}){
    return(
        <HeaderDash>
            <Logo theme={theme}/>            
            <Link to={"/"}>Início</Link>
            <ModeTheme theme={theme} setTheme={setTheme}/>
        </HeaderDash>
    )
}

export default Header