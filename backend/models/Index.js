import sequelize from "../database.js";
import Manga from   "./Manga.js";
import Autor from "./autor.js";

Autor.hasMany(Manga, {foreignKey: 'autorId', as: 'manga'});
Manga.belongsTo(Autor, {foreignKey: 'autorId', as: 'autor'});

export {sequelize, Autor, Manga};