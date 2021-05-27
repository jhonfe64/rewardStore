import styled from 'styled-components';

const CardProduct = styled.div`

    & div.ddd {
        width: 30%;
        border: 1px solid #ecf0f1;
        padding: 10px;
    }

    & div.ddd .imgContainer img {
        width: 100%;
        object-fit: cover;
    }
`

export default CardProduct;