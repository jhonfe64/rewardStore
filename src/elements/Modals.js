import styled from 'styled-components';

const Modal = styled.div`
    background: rgba(0,0,0,0.6);
    color: #ffffff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    border-radius: 10px;

    & div div div + span {
        font-size: 12rem;
    }
`

export default Modal;