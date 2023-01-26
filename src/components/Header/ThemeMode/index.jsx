import  {FaMoon , FaSun}  from "react-icons/fa";

function ModeTheme({theme, setTheme}){

    return (
        <div>
            {                    
            theme == "ligth" ? (
                <FaMoon onClick={() => setTheme("dark")}/> 
            ):(
                <FaSun onClick={() => setTheme("ligth")}/> 
            )                        
            }
        </div>
    )
}

export default ModeTheme