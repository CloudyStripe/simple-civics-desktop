import React from 'react';
import Form from 'react-bootstrap/Form';

export interface BootstrapInputProps {
    type: string;
    className?: string;
    label?: string;
    placeholder?: string;
}

export const BootstrapInput: React.FC<BootstrapInputProps> = (props) => {
    const {type, placeholder, label, className} = props;
    return(
        <Form className={className}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
            ></Form.Control>
        </Form>
    )
}
