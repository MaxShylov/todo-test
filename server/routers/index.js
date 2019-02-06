const escapeRegExp = require('lodash').escapeRegExp;
const isEmpty = require('lodash').isEmpty;
const jwt = require('jsonwebtoken');

const UsersModel = require('../db/models/users.model');


const createToken = (body) => {
  return jwt.sign(
    body,
    process.env.SECRET,
    { expiresIn: process.env.EXPIRES_IN }
  );
};


module.exports = (app) => {

  app.post('/login', async (req, res, next) => {
    try {
      let user = await UsersModel
        .findOne({
          username: {
            $regex: escapeRegExp(req.body.username),
            $options: 'i'
          }
        })
        .lean()
        .exec();

      if (!isEmpty(user) && req.body.password === user.password) {
        const token = createToken({ id: user._id, username: user.username });

        user.token = token;

        UsersModel.findOneAndUpdate(user.id, user, { upsert: true }, async (err) => {
          if (err) return next(err);
        });

        res.status(200).send({ token, message: 'Logout login success.' })
      } else {
        res.status(400).send({ message: 'Logout not exist or password not correct.' })
      }
    } catch (e) {
      console.log('Login error:', e);
      res.status(500).send({ message: 'Some error' });
    }
  });

  app.get('/tasks', async (req, res) => {
    try {
      let user = await UsersModel
        .findOne({ token: req.header('Authorization').split('Token ')[1] })
        .lean()
        .exec();

      if (!isEmpty(user)) {
        res.send({ data: user.tasks, updateAt: user.updateAt })
      } else {
        res.status(400).send({ message: 'Token isn\'t correct' })
      }
    } catch (e) {
      console.log('Check token error:', e);
      res.status(500).send({ message: 'Some error' });
    }
  });

  app.post('/tasks', async (req, res, next) => {
    try {
      let user = await UsersModel
        .findOne({ token: req.header('Authorization').split('Token ')[1] })
        .lean()
        .exec();

      if (!isEmpty(user)) {
        user.tasks = req.body.tasks;
        user.updateAt = new Date().toISOString();

        await UsersModel.findOneAndUpdate(user.id, user, { upsert: true }, async (err) => {
          if (err) return next(err);
        });

        res.sendStatus(200);
      } else {
        res.status(400).send({ message: 'Token isn\'t correct' })
      }
    } catch (e) {
      console.log('Check token error:', e);
      res.status(500).send({ message: 'Some error' });
    }
  });

};
