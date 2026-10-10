import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Manga = sequelize.define('manga',{
    titulo: { type: DataTypes.STRING, allowNull: false},
    genero: { type: DataTypes.STRING},
    ano:{ type: DataTypes.INTEGER},
    disponivel: {type: DataTypes.BOOLEAN, defaultValue: true},
}, {tableName: 'Mangas'});

export default Manga;