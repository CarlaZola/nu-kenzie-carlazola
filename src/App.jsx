import { useState } from 'react'
import RoutesMain from './routes'
import Global from './styles/global'



function App() {

  const [listTransaction, setListTransaction] = useState([])


  function newTransaction(transaction){
    return setListTransaction([...listTransaction, transaction])
  }

  console.log(listTransaction)
  return (
      <>
        <Global/>
        <RoutesMain newTransaction={newTransaction}/>
      </>
  )
}

export default App
