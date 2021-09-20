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