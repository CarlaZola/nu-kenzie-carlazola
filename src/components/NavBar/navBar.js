import styled from "styled-components";

const SectionNav = styled.section`
    margin: 0 auto;
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
    }

`

export default SectionNav