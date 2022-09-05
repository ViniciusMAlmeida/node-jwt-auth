const { User } = require('../db/models');
const UserService = require('../services/UserService');

module.exports = {
  async register(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
      const hashPassword = await UserService.generateHash(password);
      const user = await User.create({ name, email, password: hashPassword });

      res.json({ message: 'User registrado com sucesso!', data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Falha ao inserir usuário.' });
    }
  },

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      const usuarioNaoEncontrado = !user;
      const senhaInvalida = !(await UserService.compareHash(
        password,
        user.password
      ));

      if (usuarioNaoEncontrado || senhaInvalida) {
        return res.status(400).json({ error: 'Usuário ou senha inválida.' });
      }

      const token = UserService.generateToken(user);

      return res.json({
        message: 'Usuário autenticado com sucesso!',
        user: user.name,
        token: token,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Falha ao autenticar usuário.' });
    }
  },

  async me(req, res) {
    try {
      const { userId } = req;

      const user = await User.findByPk(userId);

      return res.json({
        user: {
          name: user.name,
          email: user.email,
          since: user.createdAt,
        },
      });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Não foi possível obter informações deste usuário.' });
    }
  },
};
