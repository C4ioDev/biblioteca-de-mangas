import { DataTypes } from "sequelize";
import sequelize from "../database";

const Autor = sequelize.define('Autor',{
    nome: { type: DataTypes.STRING, allowNull: false},
    genero: { type: DataTypes.STRING},
    idade:{ type: DataTypes.INTEGER},
}, {tableName: 'autores'});

export default Autor;