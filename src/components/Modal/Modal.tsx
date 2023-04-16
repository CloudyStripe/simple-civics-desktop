import React, { useState } from 'react';
import { useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'react-bootstrap';
import { BootstrapButton } from '../BootstrapButton';

export interface BootstrapModal {
    title: string,
    content: string
    show: boolean;
}

export interface ModalContent {
    title: string;
    content: string;
    show: boolean;
}

export const BootstrapModal: React.FC<BootstrapModal> = (props) => {

    const { title, content, show } = props;

    const modalRef = useRef<HTMLDivElement | null>(null);

    if(!modalRef.current){
        modalRef.current = document.createElement('div')
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal")
        console.log(modalRoot)
        if(modalRef.current){
            modalRoot?.appendChild(modalRef.current);
        }

        return () => {
            if(modalRef.current){
                modalRoot?.removeChild((modalRef.current))
            }
        }
    }, [])

    return createPortal(<ModalContent title={title} content={content} show={show}/>, modalRef.current)
    
}

const ModalContent: React.FC<ModalContent> = (props) => {

    const { title, content, show } = props

    const [showState, setShowState] = useState<boolean>(false)

    useEffect(() => {
        setShowState(show)
    }, [show])

    const handleClose = () => {
        setShowState(false)
    }

    return (
        <Modal show={showState} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                <BootstrapButton variant='success'>
                    Close
                </BootstrapButton>
            </Modal.Footer>
        </Modal>
    )
}