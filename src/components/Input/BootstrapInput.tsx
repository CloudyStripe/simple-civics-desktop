import React from 'react';
import Form from 'react-bootstrap/Form';

export interface BootstrapInputProps {
    type: string;
    className?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const BootstrapInput: React.FC<BootstrapInputProps> = (props) => {
    const {type, placeholder, label, onChange, className} = props;
    return(
        <Form className={className}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            ></Form.Control>
        </Form>
    )
}
