import { db } from '../database/models';
import Employee from '../database/models/employee';

class EmployeeService {
    findAll = async () => {
        const employees: Employee[] = await Employee.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
        return employees;
    };

    findById = async (id: string) => {
        const existingEmployee: Employee | null = await Employee.findByPk(id, {
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });
        return existingEmployee;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain at least one property');
            }
            const employee = await Employee.create({ ...object });
            return employee;
        } catch (err) {
            throw err;
        }
    };

    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingEmployee = await this.findById(id);
        if (!existingEmployee) {
            throw new Error('employee_not_found');
        }

        try {
            await Employee.update(
                { ...object },
                {
                    where: { id },
                }
            );

            existingEmployee = await this.findById(id);
            return existingEmployee;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        let existingEmployee = await this.findById(id);
        if (!existingEmployee) {
            throw new Error('employee_not_found');
        }

        try {
            await existingEmployee.destroy();
        } catch (err) {
            throw err;
        }
    };
}

const employeeService = new EmployeeService();

export default employeeService;
