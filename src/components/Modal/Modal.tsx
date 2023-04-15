import React from 'react';
import { useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';

export interface BootstrapModal {
    children: React.ReactNode;
}

export const Modal: React.FC<BootstrapModal> = (props) => {

    const { children } = props;

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

    return createPortal(children, modalRef.current)
    
}