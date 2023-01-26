import nukenzieDarkMode from "../../../assets/nukenzieDarkMode.svg"
import nukenzieLigth from "../../../assets/nukenzieLigth.svg"

function Logo({theme}){
    return(
        <div>      
           {
                theme === "ligth" ?  (

                <h1>
                    <img src={nukenzieLigth} alt="" />
                </h1>) : (

                <h1>
                    <img src={nukenzieDarkMode} alt="" />
                </h1> )

            }
        </div> 
    )
    
}

export default Logo