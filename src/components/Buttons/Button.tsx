import React from 'react';
import styles from '@/styles/components/button.module.css';

interface ButtonProps {
    label?: React.ReactNode;
    onClick?: () => void;
    customStyle?: React.CSSProperties; // Accept a inline style prop
    className?: string;
    id?: string;
    variant: 'action' | 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, customStyle, variant = 'primary', className, id }) => {
    // Define the base class based on the variant prop
    let buttonClass = '';

    switch (variant) {
        case 'action':
            buttonClass = styles['action-button'];
            break;
        case 'primary':
            buttonClass = styles['primary-button'];
            break;
        case 'secondary':
            buttonClass = styles['secondary-button'];
            break;
        default:
            buttonClass = styles['primary-button'];
            break;
    }

    // Add the provided className and the calculated buttonClass
    buttonClass = `${buttonClass} ${className || ''}`;

    return (
        <button className={buttonClass} onClick={onClick} style={customStyle} id={id}>
            {label}
        </button>
    );
};

export default Button;
