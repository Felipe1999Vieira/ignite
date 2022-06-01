import Modal from 'react-modal'
import { Container } from './styles';
Modal.setAppElement('#root')

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal ( {isOpen, onRequestClose}: NewTransactionModalProps) {

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h1>Cadastrar transações</h1>

                <input 
                    placeholder='Título' 
                />

                <input 
                    placeholder="Valor" 
                    type='number' 
                />

                <input 
                    placeholder="Categoria" 
                />

                <button type='submit'>
                    Cadastrar
                </button>
                
            </Container>
            
        </Modal>
    )
}