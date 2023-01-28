import styled from "styled-components";


const HeaderDash = styled.header`
    width: 100%;
    height: 3.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.125rem;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    margin-bottom: 1.25rem;

    .navBar_Header{
        display: flex;
        align-items: center;
        gap: 1.75rem;
    }

    .button_navigate{
        color: ${({theme}) => theme.colors.colorGrey1};
    }

    .content_theme > svg{
        cursor: pointer;
    }

    @media (min-width: 768px){
        height: 5rem;
        padding: 0 2rem;
    }
`

export default HeaderDash 