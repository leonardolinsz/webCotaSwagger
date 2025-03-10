const express = require("express");
const { swaggerUi, specs } = require("./swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem de boas-vindas
 *     description: Testa se a API está funcionando
 *     responses:
 *       200:
 *         description: Sucesso!
 */
app.get("/", (req, res) => {
    res.send("API funcionando!");
});

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retorna a lista de usuários
 *     description: Retorna um array com todos os usuários cadastrados
 *     responses:
 *       200:
 *         description: Sucesso!
 */

app.get("/user", (req, res) => {
    res.json([{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }])});

// Adiciona a documentação do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
