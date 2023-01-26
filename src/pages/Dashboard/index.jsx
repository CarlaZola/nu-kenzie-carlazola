import Form from "../../components/Form";
import Header from "../../components/Header";
import NavBarCategories from "../../components/NavBar";
import TotalMoney from "../../components/TotalMoney";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { ThemeProvider } from 'styled-components';
import {themeLigth, themeDark } from "../../styles/theme";
import StyledDashboard from "./dashboard";

function Dashboard({newTransaction, listTransaction, typeOfEntries,  setFilteredTransactions, totalValue}){

    const [theme, setTheme] = useState(true)

    function getTheme(){
        return JSON.parse((localStorage.getItem("@favoriteTheme"))) || []
    }

    useEffect(() => {
        localStorage.setItem("@favoriteTheme", JSON.stringify(theme ? themeLigth : themeDark))
    }, [theme])

    return(
      <ThemeProvider theme={theme ? themeLigth : themeDark }>
          <StyledDashboard>
            <Header/>
                {
                    theme ? (
                        <FaMoon onClick={() => setTheme(false)}/>
                    ):(
                        <FaSun onClick={() => setTheme(true)}/>
                    )
                }
            <Form 
            newTransaction={newTransaction}/>

            <TotalMoney
            totalValue={totalValue}
            />

            <NavBarCategories 
            typeOfEntries={typeOfEntries}
            setFilteredTransactions={setFilteredTransactions}
            />
        </StyledDashboard>
      </ThemeProvider>
    )
}

export default Dashboard