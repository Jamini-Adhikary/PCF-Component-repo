export interface IEmployeeData {
    firstName: string;
    lastName: string;
    employeeId: string;
}

export interface IEmployeeFormService {
    submitEmployee(data: IEmployeeData): IEmployeeData;
}

export class EmployeeFormService implements IEmployeeFormService {
    public submitEmployee(data: IEmployeeData): IEmployeeData {
        return { ...data };
    }
}