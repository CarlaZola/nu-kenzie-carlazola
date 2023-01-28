import { FaTrash } from "react-icons/fa";
import TransactionCard from "./cardTransaction";


function CardTransaction({transaction, removeTransaction}){

    return(
        <TransactionCard>
            <div
            className={transaction.type === "saida" ? ("colorForTypeEntries colorGreyExit") : ("colorForTypeEntries colorGreenEntrie" )
            }

            ></div>

           <div className="content_description">
                <p className="description">{transaction.description}</p>

                <p className="type">{transaction.type === "saida" ? "Saída" : "Entrada"}</p>
           </div>

           <div className="content_value">
                <p className="value">{transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

                <FaTrash className="trash" onClick={() => removeTransaction(transaction.id)}/>
           </div>
        </TransactionCard>
    )
}

export default CardTransaction