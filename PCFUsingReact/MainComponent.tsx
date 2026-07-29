import * as React from 'react';
import EmployeeForm from './Pages/EmployeeForm';
import EmployeeDetails from './Pages/EmployeeDetails';
import { IEmployeeData, EmployeeFormService } from './Services/EmployeeForm.service';

const employeeFormService = new EmployeeFormService();

const MainComponent: React.FC = () => {
    const [submittedData, setSubmittedData] = React.useState<IEmployeeData | null>(null);

    const handleSubmit = (data: IEmployeeData) => {
        const result = employeeFormService.submitEmployee(data);
        setSubmittedData(result);
    };

    const handleBack = () => {
        setSubmittedData(null);
    };

    return (
        <>
            {submittedData
                ? <EmployeeDetails employeeData={submittedData} onBack={handleBack} />
                : <EmployeeForm onSubmit={handleSubmit} />
            }
        </>
    );
};

//Adding export default statement to make the MainComponent available for import in other files
export default MainComponent;