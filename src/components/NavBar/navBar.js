import styled from "styled-components";

const SectionNav = styled.section`
    margin: 0 auto 1.5rem;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
  

    h2{
        font-size: var(--fontDefault);
        color: ${({theme}) => theme.colors.colorGrey1};
        text-align: center;
    }

    ul {
        display: flex;
        gap: 1rem;
    }

    li{
        padding: .3125rem .625rem;
        background-color: var(--colorGrey3);
        border-radius: .25rem;
        border: 1px solid transparent;
        color : var(--colorGrey1);
        font-weight: 600;
        cursor: pointer;
    }

    li:hover{
        background-color: var(--colorPrimary);
        color : var(--colorGrey4);
    }

    @media(min-width: 1024px){
        flex-direction: row;
        justify-content: flex-start;
        padding: 0 1rem;
        gap: 3.5rem;
    }

`

export default SectionNav