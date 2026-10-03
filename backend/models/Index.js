import sequelize from "../database";
import Manga from   "./Manga";
import Autor from "./Autor";

Autor.hasmany(Manga, {foreignKey: 'autorId', as: 'livros'});
Manga.belongsTo(Autor, {foreignKey: 'autorId', as: 'autor'});

export {sequelize,Autor,Livro};