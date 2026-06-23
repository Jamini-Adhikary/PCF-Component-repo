import * as React from 'react';
import DetailsCard from '../Components/DetailsCard';
import { IEmployeeData } from '../Services/EmployeeForm.service';

export interface IEmployeeDetailsPageProps {
    employeeData: IEmployeeData;
    onBack: () => void;
}

const EmployeeDetails: React.FC<IEmployeeDetailsPageProps> = ({ employeeData, onBack }) => {
    const fields = [
        { label: 'First Name', value: employeeData.firstName },
        { label: 'Last Name', value: employeeData.lastName },
        { label: 'Employee ID', value: employeeData.employeeId }
    ];

    return (
        <div style={{ padding: '24px' }}>
            <DetailsCard title="Employee Details" fields={fields} />
            <button
                onClick={onBack}
                style={{
                    marginTop: '16px',
                    backgroundColor: '#0078d4',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Back
            </button>
        </div>
    );
};

export default EmployeeDetails;