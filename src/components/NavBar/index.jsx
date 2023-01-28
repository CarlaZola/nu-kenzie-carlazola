import SectionNav from "./navBar"


function NavBarCategories({typeOfEntries, setFilteredTransactions}){
    return(
        <SectionNav>
            <h2>Resumo financeiro</h2>

            <ul>
                <li onClick={() => setFilteredTransactions("Todos")}>Todos</li>
                {
                    typeOfEntries.map((entrie) => ( <li key={entrie.name} onClick={() => setFilteredTransactions(entrie.value)}>{entrie.name}</li> ))
                }
            </ul>
        </SectionNav>
    )
}

export default NavBarCategories