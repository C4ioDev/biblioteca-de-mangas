import { DataTypes } from "sequelize";
import sequelize from "../database";

const Manga = sequelize.define('livro',{
    titulo: { type: DataTypes.STRING, allowNull: false},
    genero: { type: DataTypes.STRING},
    ano:{ type: DataTypes.INTEGER},
    disponivel: {type: DataTypes.BOOLEAN, defaultValue: true},
}, {tableName: 'livros'});

export default Manga;