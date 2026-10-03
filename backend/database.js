import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'biblioteca.sqlite',
    logging: false
})

export default sequelize;