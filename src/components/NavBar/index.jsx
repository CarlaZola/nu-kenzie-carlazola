

function NavBarCategories({typeOfEntries, setFilteredTransactions}){
    return(
        <>
            <h2>Resumo financeiro</h2>

            <ul>
                <li onClick={() => setFilteredTransactions("Todos")}>Todos</li>
                {
                    typeOfEntries.map((entrie) => ( <li key={entrie.name} onClick={() => setFilteredTransactions(entrie.value)}>{entrie.name}</li> ))
                }
            </ul>
        </>
    )
}

export default NavBarCategories