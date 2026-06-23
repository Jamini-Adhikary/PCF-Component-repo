import * as React from 'react';

export interface IFormFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const FormField: React.FC<IFormFieldProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '13px', marginBottom: '4px', color: '#333' }}>
                {label}
            </div>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                }}
            />
        </div>
    );
};

export default FormField;