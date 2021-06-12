import styled from 'styled-components';

const Modal = styled.div`
    background: rgba(255,255,255,0.4);
    color: #ffffff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    border-radius: 10px;

    & div div div + span {
        font-size: 8.5rem;
    }

    & button {
        padding: 10px 40px;
        border: none;
        color: #ffffff;
        font-size: 1rem;
        background: #000000;
        border-radius: 10px;
    }
`

export default Modal;