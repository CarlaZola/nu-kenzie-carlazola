import Form from "../../components/Form";
import Header from "../../components/Header";
import NavBarCategories from "../../components/NavBar";
import TotalMoney from "../../components/TotalMoney";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import StyledDashboard from "./dashboard";

function Dashboard({newTransaction, listTransaction, typeOfEntries,  setFilteredTransactions, totalValue, theme, setTheme}){

    return(
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
    )
}

export default Dashboard