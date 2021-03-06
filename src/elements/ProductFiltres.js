import styled from 'styled-components';

const ProductFiltres = styled.div`
/* 
    border-bottom: 1px solid #ecf0f1; */

    &.container > div {
        justify-content: space-between;
    } 

    &.marginTop {
        margin-top: 160px !important;
        transition: .3s;
    }

    & select, .filterPrice {
        border: 2px solid #ecf0f1;
        padding: 8px 20px;
        border-radius: 5px;
        user-select: none;
        font-weight: 400;
    }

    & select, .filterPrice :focus {
        outline: none;
    }

    & a {
        background-color: #0d6efd;
        color: #ffffff;
        border-radius: 5px;
    }

    & button {
        background-color: #ecf0f1;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    @media only screen and (max-width: 782px){
        & select, .filterPrice, a, button {
            width: 100%;
            margin: 0 !important;
            padding-top: 8px;
            padding-bottom: 8px;
            margin-bottom: 10px !important;
            text-align: center;
        }
    }
`
export default ProductFiltres;