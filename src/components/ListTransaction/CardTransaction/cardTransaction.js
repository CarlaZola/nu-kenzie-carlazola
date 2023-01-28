import styled from "styled-components";

const TransactionCard = styled.li`
    height: 156px;
    position: relative;
    background-color: var(--colorGrey3);
    border-radius: .25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .625rem;
    animation: card 1.5s linear;


    .colorForTypeEntries{
        position: absolute;
        top: 0;
        left: 0;
        height: 156px;
        width: .25rem;
        background-color: var(--colorSecundary);
        border-radius: .25rem 0 0 .25rem;

    } 
    .colorGreenEntrie{
        background-color: var(--colorSecundary);
    }

    .colorGreyExit{
        background-color: var(--colorGrey2);
    }

    .content_description, .content_value{
        display: flex;
        flex-direction: column;
        gap: .4375rem;

    }

    .description{
        font-weight: 700;
        color: var(--colorGrey1);
        width: 100%;
    }

    .type{
        font-size: var(--font2)
    }

    .content_value{
        gap: .625rem;
    }

    .value{
        font-size: var(--font2);
        font-weight: 600;
    }

    .trash{
        cursor: pointer;
        padding: .4375rem;
        background-color: var(--colorGrey2);
        border-radius: .25rem;
        width: .625rem;
        height: .625rem;
    }

    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem;

        .content_value{
        display:flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 3rem;
        }
    }

    @keyframes card {
    0%{
        opacity: 0;  
    }
    25%{
        opacity: 0.5
    }
    50%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
    }
}
   
`

export default TransactionCard