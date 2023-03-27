import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const product = db.define(
    "product",
    {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
    },
    {
        freexeTableName: true,
    }
);

export default product;

(async () => {
    await db.sync();
})();