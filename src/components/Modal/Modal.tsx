import React, { useState } from 'react';
import { useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'react-bootstrap';
import { BootstrapButton } from '../BootstrapButton';
import { Star } from 'react-bootstrap-icons';
import './Modal.scss'

export interface BootstrapModal {
    title: string,
    content: string
    show: boolean;
    className?: string;
}

export interface ModalContent {
    title: string;
    content: string;
    show: boolean;
    className?: string;
}

export const BootstrapModal: React.FC<BootstrapModal> = (props) => {

    const { className, title, content, show } = props;

    const modalRef = useRef<HTMLDivElement | null>(null);

    if(!modalRef.current){
        modalRef.current = document.createElement('div')
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal")
        if(modalRef.current){
            modalRoot?.appendChild(modalRef.current);
        }

        return () => {
            if(modalRef.current){
                modalRoot?.removeChild((modalRef.current))
            }
        }
    }, [])

    return createPortal(<ModalContent className={className} title={title} content={content} show={show}/>, modalRef.current)
    
}

const ModalContent: React.FC<ModalContent> = (props) => {

    const { className, title, content, show } = props

    const [showState, setShowState] = useState<boolean>(false)

    useEffect(() => {
        setShowState(show)
    }, [show])

    const handleClose = () => {
        setShowState(false)
    }

    return (
        <Modal className={className} show={showState}>
            <Modal.Header className="border-bottom-0">
                <Modal.Title className="modalTitle w-100 text-center">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer className="border-top-0 d-block text-center">
                <div className="mb-4 text-center starContainer pageEndPadding">
                        <Star className="me-3" color="navy" size={25} />
                        <Star size={25} />
                        <Star className="ms-3" color="maroon" size={25} />
                </div>
                <BootstrapButton onClick={handleClose} variant='success'>
                    Close
                </BootstrapButton>
            </Modal.Footer>
        </Modal>
    )
}