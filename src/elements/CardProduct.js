import styled from 'styled-components';

const CardProduct = styled.div`

    & div.cardContainer {
        width: 30%;
        border: 1px solid #ecf0f1;
        padding: 10px;

        &:hover h4.buy {
            background: white;
            color: rgb(10,212,250);
            transition: .3s;
        }
        
        @media only screen and (max-width: 800px){
            width: 48%;
        }

        @media only screen and (max-width: 550px){
            width: 100%;
        }
    }

    & div.cardContainer:hover {
       box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
       transition: 0.1s;
    }

    & div.cardContainer .imgContainer img {
        width: 100%;
        object-fit: cover;
    }

    & h4.noBuy {
        background-color: rgba(0,0,0,0.2);
        color: #ffffff;
        padding: 5px 20px;
        border-radius: 10px;
        z-index: 1000;
        & svg {
            color: #f39c12;
        }
    }

    & h4.buy {
        z-index: 1000;
        background-color: rgb(10,212,250);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 100%;
        right: 0;
    }

    & .description h4 {
        color: #95a5a6;
    }

    & .hoverPrice {
        background-color: rgba(10,212,250,0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity 0.3s;

        & h3 {
            color: #ffffff;
            text-align: center;

            & svg {
                color: #F7AE15;
            }
        }

        & button {
            background-color: #ffffff;
            border: none;
            padding: 10px 50px !important;
            border-radius: 20px;
            font-size: 1.2rem;
            cursor: pointer;
        }

        &:hover {
            opacity: 1;
        }
    }

    & .rechargeCoins {
        background-color: rgba(255,0,0,0.6);
        & a {
            background-color: white;
            color: #000000;
            font-weight: 900;
            border-radius: 20px;
            font-size: 1.2rem;
        }
    }
`

export default CardProduct;