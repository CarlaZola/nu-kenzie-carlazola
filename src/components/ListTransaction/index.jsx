import CardTransaction from "./CardTransaction";
import StyleListTransaction from "./listTransactionStyle";

function ListTransaction({filterByTransactionType, removeTransaction}){

    

    return(
        <StyleListTransaction>
            {

                filterByTransactionType <=0 ? (

                    <h2>Você ainda não possuí nenhum lançamento</h2>
                    
                ) : (
                    <ul>
                        {
                            filterByTransactionType.map((transaction) => {
                                return <CardTransaction key={transaction.id} transaction={transaction} removeTransaction={removeTransaction}/>
                            })
                        }
                    </ul>   
                )
            }

            
        </StyleListTransaction>
    )
}

export default ListTransaction


