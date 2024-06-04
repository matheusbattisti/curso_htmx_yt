const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/carregar-conteudo", (req, res) => {
  res.send("<p>Este é o conteúdo carregado via hx-get</p>");
});

app.post("/enviar-formulario", (req, res) => {
  const { nome } = req.body;
  res.send(`<p>Formulário enviado. Nome: ${nome}</p>`);
});

app.get("/trocar-conteudo", (req, res) => {
  res.send("<p>Novo conteúdo trocado!</p>");
});

app.get("/especificar-alvo", (req, res) => {
  res.send("<p>Conteúdo inserido no alvo especificado.</p>");
});

app.post("/valores-adicionais", (req, res) => {
  const { valorExtra } = req.body;
  res.send(`<p>Valor adicional recebido: ${valorExtra}</p>`);
});

app.get("/tempo-servidor", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`<p>Hora atual do servidor: ${currentTime}</p>`);
});

app.post("/enviar-formulario-validacao", (req, res) => {
  const { username } = req.body;
  if (!username || username.length < 6) {
    res.send(
      `<p style="color: red;">Erro: O nome de usuário deve ter pelo menos 6 caracteres.</p>`
    );
  } else {
    res.send(
      `<p>Formulário enviado com sucesso. Nome de usuário: ${username}</p>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
