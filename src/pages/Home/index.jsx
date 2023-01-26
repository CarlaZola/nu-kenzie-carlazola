import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.svg";
import MainHome from "./home";
import nukenzieDarkMode  from "../../assets/nukenzieDarkMode.svg";

function Home(){
    return(
        <MainHome>         
            <section className="content mainDesktop">
                    <h1>
                        <img src={nukenzieDarkMode} alt="" />
                    </h1>
                    <h2>Centralize o controle das suas finanças</h2>
                    <p>de forma rápida e segura</p>
                    <div>
                        <Link to={"/dashboard"} className="button_navigate">Iniciar</Link>
                    </div>
                </section>
                <section className="img">
                    <img src={illustration} alt="" />
                </section>                     
        </MainHome>
    )
}

export default Home