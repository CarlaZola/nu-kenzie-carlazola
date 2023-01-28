import styled from "styled-components";

const SectionForm = styled.section`
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: 1px solid ${({theme}) => theme.colors.colorGrey2};
    border-radius: .25rem;
    
    
    form,  .content_inputDescription, .input_value, .input_typeValue{
        display: flex;
        flex-direction: column;
        gap: .25rem;  
    }

    .content_inputDescription, .input_value, .input_typeValue{
        height: 4.625rem;
    }

    form{
        padding: 2.375rem 1rem;
        gap: 1rem;       
    }

    .boxContent_Values{
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    label{
        font-size: var(--font2);
        color: ${({theme}) => theme.colors.colorGrey1};

    }

    input:focus{
        outline: ${({theme}) => theme.colors.colorGrey3};
    }

    input{
        padding: .0187rem;
        height: 1.8125rem;
    }

    select{
        height: 2.125rem;
    }   

    input, select{
        border-radius: .25rem;
        border: 1px solid var(--colorGrey2)
    }

    button{
        background-color: var(--colorPrimary);
        border: 1px solid var(--colorPrimary);
        color: var(--colorGrey4);
        border-radius: .25rem;
        height: 3rem;
    }

    p{
        font-size: var(--font3);
        color: ${({theme}) => theme.colors.colorMessageError}
    }

`

export default SectionForm