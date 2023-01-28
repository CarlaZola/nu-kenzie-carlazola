import { useState, useEffect } from 'react'
import RoutesMain from './routes'
import Global from './styles/global'
import { ThemeProvider } from 'styled-components';
import { themeLigth, themeDark } from "./styles/theme";

function App() {

  const modeTheme = JSON.parse(localStorage.getItem("@favoriteMode"))

  const [theme, setTheme] = useState(modeTheme ? modeTheme : "ligth" )

  useEffect(() => {
    localStorage.setItem("@favoriteMode", JSON.stringify(theme))
  }, [theme])


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

  const transactionHistory = JSON.parse(localStorage.getItem("@transactionHistoric"))

  const [listTransaction, setListTransaction] = useState(transactionHistory ? transactionHistory : [])

  useEffect(() => {
      localStorage.setItem("@transactionHistoric", JSON.stringify(listTransaction))
  }, [listTransaction])

  const [filteredTransactions, setFilteredTransactions] = useState("Todos")

  function newTransaction(transaction){
    return setListTransaction([...listTransaction, transaction])
  }

  const filterByTransactionType = listTransaction.filter((transaction) => filteredTransactions === "Todos" ? transaction : transaction.type === filteredTransactions)

  const totalValue = filterByTransactionType
  .map((transaction) => transaction.type == "entrada" ? transaction.value : -(transaction.value))
  .reduce((acummulator, currentValue) =>  acummulator + currentValue, 0)

  function removeTransaction(removeItem){
    const newTransactions = listTransaction.filter((transaction) => transaction.id !== removeItem)
    setListTransaction(newTransactions)
  }
    
  return (
      <>       
          <Global/>
          <ThemeProvider theme={theme == "ligth" ? themeLigth : themeDark}>
            <RoutesMain 
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
          </ThemeProvider>
      </>
  )
}

export default App
