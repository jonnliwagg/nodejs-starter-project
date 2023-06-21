import { Model, Sequelize, DataTypes } from 'sequelize';
import { QueryHandlingAttributes } from '../attributes';

class QueryHandling extends Model implements QueryHandlingAttributes {
    id!: string;
    subDate!: Date;
    customerId!: string;
    employeeId!: string;
    resDate!: Date;
    status!: string;
    feedback!: number;
    queryText!: string;
    queryResponse!: string;

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'QID',
                },
                subDate: {
                    type: DataTypes.DATE,
                    field: 'Sub_Date',
                },
                customerId: {
                    type: DataTypes.STRING,
                    autoIncrement: false,
                    field: 'Cust_ID',
                },
                employeeId: {
                    type: DataTypes.STRING,
                    autoIncrement: false,
                    field: 'EmpID',
                },
                resDate: {
                    type: DataTypes.DATE,
                    field: 'Res_Date',
                },
                status: {
                    type: DataTypes.STRING,
                    field: 'Status',
                },
                feedback: {
                    type: DataTypes.NUMBER,
                    field: 'Feedback',
                },
                queryText: {
                    type: DataTypes.STRING,
                    field: 'Query_Text',
                },
                queryResponse: {
                    type: DataTypes.STRING,
                    field: 'Query_Response',
                },
            },
            {
                sequelize,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        );
    }
}

export default QueryHandling;
