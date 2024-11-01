import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div>
            <button className='bg-primary text-white px-6 py-2 rounded-lg' onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default Button;