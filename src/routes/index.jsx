import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"


function RoutesMain({newTransaction, listTransaction, typeOfEntries, setFilteredTransactions, totalValue, theme, setTheme, filterByTransactionType}){

    return(
        <Routes>
            <Route path="/" element={ <Home 
           
            /> }/>
            <Route 
            path="/dashboard" 
            element={<Dashboard 
            newTransaction={newTransaction} 
            listTransaction={listTransaction} 
            typeOfEntries={typeOfEntries}
            setFilteredTransactions={setFilteredTransactions}
            totalValue={totalValue}
            theme={theme}
            setTheme={setTheme}
            filterByTransactionType={filterByTransactionType}
            />          
            }/>
        </Routes>
    )
}

export default RoutesMain