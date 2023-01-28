import CardTotalMoney from "./totalMoney";

function TotalMoney({totalValue}){

    return(
        <CardTotalMoney>
            <h2>Valor total:</h2>
            <p>{totalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </CardTotalMoney>
    )
}

export default TotalMoney