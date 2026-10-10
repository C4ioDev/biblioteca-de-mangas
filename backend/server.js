import express from 'express';
import { sequelize, Sequelize } from './models/Index.js';
import PreencherTabelas from './seed.js';

const app = express();
const PORTA = 3000;
app.use(express.json());

app.get('/', (req,res) =>{
    res.json({api: 'Biblioteca Digital está funcionando'})
})

await sequelize.sync();
await PreencherTabelas()

app.listen(PORTA, () =>{
    console.log('API rodando em http://localhost:${PORTA}');
})