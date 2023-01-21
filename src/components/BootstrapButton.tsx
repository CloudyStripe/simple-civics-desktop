import React from 'react';
import Button from 'react-bootstrap/Button';

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    size?: 'sm' | 'lg';
    variant?: string;
}

export const BootstrapButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    const { className, onClick, variant, size } = props;
    return (
        <Button
            className={className}
            onClick={onClick}
            variant={variant}
            size={size}
        >
            {children}
        </Button>
    )
}