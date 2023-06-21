import { Model, Sequelize, DataTypes } from 'sequelize';
import { ProductAttributes } from '../attributes';

class Product extends Model implements ProductAttributes {
    id!: string;
    name!: string;
    baseCost!: number;

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'ProdID',
                },
                name: {
                    type: DataTypes.STRING,
                    field: 'ProdName',
                },
                baseCost: {
                    type: DataTypes.NUMBER,
                    field: 'Base_Cost',
                },
            },
            {
                sequelize,
                tableName: 'Product',
                timestamps: false,
            }
        );
    }
}

export default Product;
