import * as React from 'react';
import FormField from '../Components/FormField';
import { IEmployeeData } from '../Services/EmployeeForm.service';

export interface IEmployeeFormPageProps {
    onSubmit: (data: IEmployeeData) => void;
}

const EmployeeForm: React.FC<IEmployeeFormPageProps> = ({ onSubmit }) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [employeeId, setEmployeeId] = React.useState('');

    const handleSubmit = () => {
        if (firstName && lastName && employeeId) {
            onSubmit({ firstName, lastName, employeeId });
        }
    };

    const handleClear = () => {
        setFirstName('');
        setLastName('');
        setEmployeeId('');
    };

    return (
        <div style={{ padding: '24px', maxWidth: '340px' }}>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
                Employee Form
            </h2>
            <FormField
                label="First Name"
                placeholder="Enter First Name"
                value={firstName}
                onChange={setFirstName}
            />
            <FormField
                label="Last Name"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={setLastName}
            />
            <FormField
                label="Employee ID"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={setEmployeeId}
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <button
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: '#0078d4',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Submit
                </button>
                {/* <button
                    onClick={handleClear}
                    style={{
                        backgroundColor: '#e0e0e0',
                        color: '#333',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Clear
                </button> */}
            </div>
        </div>
    );
};

export default EmployeeForm;