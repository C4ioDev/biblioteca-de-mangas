import { Autor } from '../models/Index.js'
export async function listarAutores(req,res) {
    const autores = await Autor.findAll();
    res.json(autores)
}