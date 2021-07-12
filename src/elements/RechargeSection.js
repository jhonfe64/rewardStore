import styled from 'styled-components';

const RechargeSection = styled.div`
    margin-top: 125px;
    & button {
        border: none;
        font-size: 1.2rem;
        padding-right: 150px;
        padding-left: 150px;
        border-radius: 5px;
        cursor: pointer;

        & svg {
            color: #f39c12;
        }

        &:hover {
            background-color: #bdc3c7 !important;
            transition: .3s;
        }
    }

    & a {
        background-color: #0d6efd;
        font-size: 1.2rem;
        padding: 15px 150px;
        border-radius: 5px;
        color: #ffffff;

        & svg {
            margin-right: 20px;
        }
    }

    @media only screen and (max-width: 768px){
        & button {
            width: 100%;
        }
    }
`

export default RechargeSection;