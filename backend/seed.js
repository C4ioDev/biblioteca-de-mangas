import{Autor, Manga} from './models/Index.js'

export default async function PreencherTabelas() {
    const kentarou = await Autor.create ({nome:'Kentarou Miura', genero:'m', idade: 50});
    const kouta = await Autor.create ({nome:'Kouta hirano', genero:'m', idade: 53});
    const kubo = await Autor.create ({nome:'Noriaki Kubo', genero:'m', idade: 49});

    await Manga.bulkCreate([
    {
        titulo: "Bleach",
        genero: "Shounen",
        ano: 2001,
        autorId: kubo.id,
        disponivel: true,
    },
    {
        titulo: "Hellsing",
        genero: "Dark Fantasy",
        ano: 1997,
        autorId: kouta.id,
        disponivel: true,
    },
    {
        titulo: "Berserk",
        genero: "horror",
        ano: 1989,
        autorId: kentarou.id,
        disponivel: true,
    },

    ])

    console.log("banco populado com 3 autores e 3 Mangas");
}