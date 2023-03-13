import React, { forwardRef } from 'react';
import Button from 'react-bootstrap/Button';

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    size?: 'sm' | 'lg';
    variant?: string;
}

export const BootstrapButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, className, onClick, variant, size } = props;
    return (
        <Button
            className={className}
            ref={ref}
            onClick={onClick}
            variant={variant}
            size={size}
        >
            {children}
        </Button>
    )
})