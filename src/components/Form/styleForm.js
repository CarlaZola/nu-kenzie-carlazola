import styled from "styled-components";

const SectionForm = styled.section`
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto  1.5rem;
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
        width: 100%;     
    }

    .boxContent_Values{
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    button{
        background-color: var(--colorPrimary);
        border: 1px solid var(--colorPrimary);
        color: var(--colorGrey4);
        border-radius: .25rem;
        height: 3rem;
        cursor: pointer;
    }

    p{
        font-size: var(--font3);
        color: ${({theme}) => theme.colors.colorMessageError}
    } 

    @media(min-width: 768px){
        width: 87%;
    }

`

export default SectionForm