import * as React from 'react';

export interface IDetailsCardProps {
    title: string;
    fields: { label: string; value: string }[];
}

const DetailsCard: React.FC<IDetailsCardProps> = ({ title, fields }) => {
    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '24px',
            maxWidth: '320px',
            backgroundColor: '#fff'
        }}>
            <h3 style={{ color: '#0078d4', textAlign: 'center', marginBottom: '16px' }}>
                {title}
            </h3>
            {fields.map((field, index) => (
                <p key={index} style={{ margin: '6px 0', fontSize: '14px' }}>
                    <strong>{field.label}:</strong> {field.value}
                </p>
            ))}
        </div>
    );
};

export default DetailsCard;