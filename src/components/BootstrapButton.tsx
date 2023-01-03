import React from 'react';
import Button from 'react-bootstrap/Button';

export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: string;
    size?: 'sm' | 'lg';
    children?: React.ReactNode;
}

export const BootstrapButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    const { onClick, variant, size } = props;
    return (
        <Button
            onClick={onClick}
            variant={variant}
            size={size}
        >
            {children}
        </Button>
    )
}