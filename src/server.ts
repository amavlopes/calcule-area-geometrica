import app from "./app";

const port = 3300;
app.listen(port, () =>
  console.log(`O servidor está rodando através da porta ${port}`)
);
