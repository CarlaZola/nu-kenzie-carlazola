import styled from "styled-components";

const StyledSelect = styled.fieldset`
        display: flex;
        flex-direction: column;
        border: none;
        padding: 0;
        margin: 0;
        gap: 0.5rem;

    select{
        height: 2.125rem;
        border-radius: .25rem;
        border: 1px solid var(--colorGrey2);
        background-color: var(--colorGrey3);

        :focus{
            outline: none;
        }
    } 
    
    label{
        font-size: var(--font2);
        color: ${({theme}) => theme.colors.colorGrey1};
    }
`

export default StyledSelect
