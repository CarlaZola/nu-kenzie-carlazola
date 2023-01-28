import styled from "styled-components";


const CardTotalMoney = styled.section`
    margin: 0 auto 1.25rem;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    height: 5rem;
    border-radius: .25rem;
    border: 1.5px solid var(--colorGrey2);

    h2{
        color: ${({theme}) => theme.colors.colorGrey1};
    }

    h2, p{
        font-size: var(--fontDefault);
    }

    p{
        font-size: var(--font1);
        color: var(--colorPrimary);
        font-weight: 800;
    }

    @media(min-width: 768px){
        width: 87%;
    }

`

export default CardTotalMoney