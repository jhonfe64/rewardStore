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
`
export default ProductFiltres;