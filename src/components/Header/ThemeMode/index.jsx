import  {FaMoon , FaSun}  from "react-icons/fa";
import DivTheme from "./styleTheme"

function ModeTheme({theme, setTheme}){

    return (
        <DivTheme>
        
            {                    
            theme == "ligth" ? (
                <FaMoon onClick={() => setTheme("dark")}/> 
            ):(
                <FaSun color="var(--colorGrey4)" onClick={() => setTheme("ligth")}/> 
            )                        
            }
        </DivTheme>
    )
}

export default ModeTheme