const express = require("express"); // Importa o módulo Express
const app = express(); // Inicia o Express

// Rota 1: Página Inicial
app.get("/", function(req, res) {
    res.send("<h1>Bem vindo à Página Do Banguela!</h1><p>Nova Informação, ele é pretot</p>");
});

// Rota 2: Sobre
app.get("/banguela", function(req, res) {
    res.send("<h1>Sobre Banguela</h1><p>Banguela é um gatinho preto muito fofo, e peludo</p>");
});

// Rota 3: Contato
app.get("/fotos", function(req, res) {
    res.send("<h1>Fotos do Banguela</h1><button>Troca pagina</button><p>Galeria de fotos</p>");
});

// Inicia o servidor na porta 3000
app.listen(5435, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor iniciado na porta 5435");
    }
});
