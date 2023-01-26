import CardTransaction from "./CardTransaction"


function ListTransaction({filterByTransactionType}){

    return(
        <>
            <ul>
                {
                    filterByTransactionType.map((transaction) => {
                        return <CardTransaction key={transaction.id} transaction={transaction}/>
                    })
                }
            </ul>
        </>
    )
}

export default ListTransaction


