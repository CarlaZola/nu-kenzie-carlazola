import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"


function RoutesMain({newTransaction, listTransaction, typeOfEntries, setFilteredTransactions, totalValue, theme, setTheme, filterByTransactionType, removeTransaction}){

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
            removeTransaction={removeTransaction}
            />          
            }/>
        </Routes>
    )
}

export default RoutesMain