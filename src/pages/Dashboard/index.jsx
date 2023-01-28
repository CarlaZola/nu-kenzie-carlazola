import Form from "../../components/Form";
import Header from "../../components/Header";
import NavBarCategories from "../../components/NavBar";
import TotalMoney from "../../components/TotalMoney";
import { useEffect, useState } from "react";
import StyledDashboard from "./dashboard";
import ListTransaction from "../../components/ListTransaction";

function Dashboard({newTransaction, listTransaction, typeOfEntries,  setFilteredTransactions, totalValue, theme, setTheme, filterByTransactionType, removeTransaction}){
    
    return(
        <StyledDashboard>
            <Header
            theme={theme}
            setTheme={setTheme}
            />

            <Form 
            newTransaction={newTransaction}
            />

            <TotalMoney
            totalValue={totalValue}
            />        

            <NavBarCategories 
            typeOfEntries={typeOfEntries}
            setFilteredTransactions={setFilteredTransactions}
            />
            
            <ListTransaction 
            filterByTransactionType={filterByTransactionType}    
            removeTransaction={removeTransaction}                       
            />
        </StyledDashboard>
    )
}

export default Dashboard