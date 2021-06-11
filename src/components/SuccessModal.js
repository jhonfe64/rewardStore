import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSmileWink,  faCoins, faTimes } from '@fortawesome/free-solid-svg-icons';
import {CoinsContext} from '../context/actualCoinsContext';
import Modal from '../elements/Modals';

function SuccessModal() {
    const {coinsFigure} = useContext(CoinsContext);
    return (
        <Modal className="position-fixed container col-4 pt-4 pb-5">
            <div className="row">
                <div className="text-center w-100">
                    <div className="text-right">
                        <span className="pr-5">
                            <FontAwesomeIcon className="ml-3" icon={faTimes} />
                        </span>
                    </div>
                    <span>
                        <FontAwesomeIcon className="mb-3 happyFace" icon={faSmileWink} />
                    </span>
                    <h2 className="pb-3">Has agregado un nuevo Producto</h2>
                    <button>
                        Todavia tienes {coinsFigure}
                        <FontAwesomeIcon className="ml-3" icon={faCoins} />
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default SuccessModal;
