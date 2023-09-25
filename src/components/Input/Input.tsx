import React from "react";

interface InputProps {
    customComponent?: React.ReactNode;
    inputValue: string;
    onInputChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    id?: string,
    containerStyle?: string; // Style for the div
    inputStyle?: string; // Style for the input
}

const Input: React.FC<InputProps> = ({
    customComponent,
    inputValue,
    onInputChange,
    type = "text",
    placeholder = "",
    id,
    containerStyle,
    inputStyle,
}) => {
    const includePaddingClass = customComponent ? "pl-[26px]" : "";

    return (
        <div className={`relative flex items-center border border-solid border-black rounded-md px-4 py-2 ${containerStyle}`}>
            {customComponent && (
                <span className="absolute pointer-events-none">{customComponent}</span>
            )}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={inputValue}
                onChange={(event) => onInputChange(event.target.value)}
                className={`focus:outline-none w-full ${includePaddingClass} ${inputStyle}`}
            />
        </div>
    );
};

export default Input;
