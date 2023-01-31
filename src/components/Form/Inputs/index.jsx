import StyledInput from "./input"


function Input({label, type, id, placeholder, register}){

    return(
        <StyledInput>
                <label htmlFor={id}>{label}</label>
                <input
                type={type} 
                {...register}
                id={id}
                placeholder={placeholder}
                />
        </StyledInput>
    )
}

export default Input