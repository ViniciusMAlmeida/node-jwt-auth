const express = require('express');
const app = express();
const PORT = 3000;

const authMiddleware = require('./middlewares/auth');
const UserController = require('./Controllers/UserController');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Aula 6' });
});

app.post('/user/register', UserController.register);
app.post('/user/authenticate', UserController.authenticate);
app.get('/user/me', authMiddleware, UserController.me);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
