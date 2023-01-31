import StyledSelect from "./select";


function Select({id, label, register, typeOfEntries}){

    return(
        <StyledSelect>
            <label htmlFor={id}>{label}</label>
            <select id={id}  {...register}> 
                <option value="">Selecione</option>
                {
                    typeOfEntries.map((type) => (<option key={type.value} value={type.value}>{type.name}</option>))
                }               
            </select>    
        </StyledSelect>
    )
}

export default Select