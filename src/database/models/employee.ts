import { Model, Sequelize, DataTypes } from 'sequelize';
import { EmployeeAttributes } from '../attributes';

class Employee extends Model implements EmployeeAttributes {
    id!: string;
    firstName!: string;
    lastName!: string;
    address!: string;
    age!: number;
    dateJoined!: Date;
    department!: string;
    salary!: number;

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'EmpID',
                },
                firstName: {
                    type: DataTypes.STRING,
                    field: 'EFirstName',
                },
                lastName: {
                    type: DataTypes.STRING,
                    field: 'ELastName',
                },
                address: {
                    type: DataTypes.STRING,
                    field: 'Address',
                },
                age: {
                    type: DataTypes.NUMBER,
                    field: 'Age',
                },
                dateJoined: {
                    type: DataTypes.DATE,
                    field: 'D_Join',
                },
                department: {
                    type: DataTypes.STRING,
                    field: 'Dept',
                },
                salary: {
                    type: DataTypes.NUMBER,
                    field: 'Salary',
                },
            },
            {
                sequelize,
                tableName: 'Employees',
                timestamps: false,
            }
        );
    }
}

export default Employee;
