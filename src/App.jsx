import { useState, useEffect } from 'react'
import RoutesMain from './routes'
import Global from './styles/global'
import { ThemeProvider } from 'styled-components';
import { themeLigth, themeDark } from "./styles/theme";

function App() {

  const [theme, setTheme] = useState(false)

  const typeOfEntries = [
    {
      value: "saida",
      name: "Saídas"
    },
    {
      value: "entrada",
      name: "Entradas"
    },
   
  ]

  const [listTransaction, setListTransaction] = useState([])

  const [filteredTransactions, setFilteredTransactions] = useState("Todos")

  function newTransaction(transaction){
    return setListTransaction([...listTransaction, transaction])
  }

  const filterByTransactionType = listTransaction.filter((transaction) => filteredTransactions === "Todos" ? transaction : transaction.type === filteredTransactions)

  const totalValue = filterByTransactionType
  .map((transaction) => transaction.type == "entrada" ? transaction.value : -(transaction.value))
  .reduce((acummulator, currentValue) =>  acummulator + currentValue, 0)
    
  return (
      <>       
          <Global/>
          <ThemeProvider theme={theme ? themeDark : themeLigth}>
            <RoutesMain 
            newTransaction={newTransaction} 
            listTransaction={listTransaction}  
            typeOfEntries={typeOfEntries}
            setFilteredTransactions={setFilteredTransactions}
            totalValue={totalValue}
            theme={theme}
            setTheme={setTheme}
            />       
          </ThemeProvider>
          
      </>
  )
}

export default App
