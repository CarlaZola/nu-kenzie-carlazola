import { useState } from 'react'
import RoutesMain from './routes'
import Global from './styles/global'


function App() {

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
          <RoutesMain 
          newTransaction={newTransaction} 
          listTransaction={listTransaction}  
          typeOfEntries={typeOfEntries}
          setFilteredTransactions={setFilteredTransactions}
          totalValue={totalValue}
          />       
      </>
  )
}

export default App
