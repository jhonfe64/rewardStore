import styled from 'styled-components';

const CardProduct = styled.div`

    & div.cardContainer {
        width: 30%;
        border: 1px solid #ecf0f1;
        padding: 10px;
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
        & svg {
            color: #f39c12;
        }
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
        }

        & button {
            background-color: #ffffff;
            border: none;
            padding: 10px 40px;
            border-radius: 20px;
            font-size: 1.2rem;
        }

        &:hover {
            opacity: 1;
        }
    }
`

export default CardProduct;