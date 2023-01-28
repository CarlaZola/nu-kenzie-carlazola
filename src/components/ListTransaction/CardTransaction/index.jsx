import { FaTrash } from "react-icons/fa";


function CardTransaction({transaction}){

    return(
        <li>
            <div className="colorFOrTypeEntries"></div>

            <p>{transaction.description}</p>

            <p>{transaction.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

            <p>{transaction.type === "saida" ? "Saída" : "Entrada"}</p>

            <FaTrash/>
        </li>
    )
}

export default CardTransaction