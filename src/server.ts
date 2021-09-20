import express from 'express';

// @types/express
const app = express();

/**
 * GET    => Busca de informações
 * POST   => Inserir ( criar ) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros:
 * 
 * Routes params => http://localhost:3000/produtos/965464984 -> id usado para a busca de algum item ou dado
 * 
 * Query params  => http://localhost:3000/produtos?name=teclado&description=teclado+bom
 * 
 * Body params   => {
 *     "name": "teclado",
 *     "desciption": "teclado bom"
 * }
 */

app.get('/test', ( request, response ) => {
    // request => Tudo que está entrando
    // response => tudo que está saindo

    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW - método post");
});

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));