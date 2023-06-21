"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class QueryHandling extends sequelize_1.Model {
    static initModel(sequelize) {
        QueryHandling.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                autoIncrement: false,
                field: 'QID',
            },
            subDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Sub_Date',
            },
            customerId: {
                type: sequelize_1.DataTypes.STRING,
                autoIncrement: false,
                field: 'Cust_ID',
            },
            employeeId: {
                type: sequelize_1.DataTypes.STRING,
                autoIncrement: false,
                field: 'EmpID',
            },
            resDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Res_Date',
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Status',
            },
            feedback: {
                type: sequelize_1.DataTypes.NUMBER,
                field: 'Feedback',
            },
            queryText: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Text',
            },
            queryResponse: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Response',
            },
        }, {
            sequelize,
            tableName: 'QueryHandling',
            timestamps: false,
        });
    }
}
exports.default = QueryHandling;
