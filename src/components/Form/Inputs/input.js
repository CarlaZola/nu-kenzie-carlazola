import styled from "styled-components";

const StyledInput = styled.fieldset`
        display: flex;
        flex-direction: column;
        border: none;
        padding: 0;
        margin: 0;
        gap: 0.5rem;

    input{
        padding: .0187rem .25rem;
        height: 1.8125rem; 
        border-radius: .25rem;
        border: 1px solid var(--colorGrey2);
        background-color: var(--colorGrey3);

        :focus{
        outline: ${({theme}) => theme.colors.colorGrey3};
        }
    }

    label{
        font-size: var(--font2);
        color: ${({theme}) => theme.colors.colorGrey1};
    }
`

export default StyledInput