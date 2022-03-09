const router = require('express').Router();
const { User } = require('../db/models');
const { Sock } = require('../db/models');
const { Favour } = require('../db/models');
const { Cart } = require('../db/models');

router.get('/signup', (req, res) => {
  res.render('signupPage');
});

router.post('/signup', async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.userEmail = user.email;
    req.session.userName = user.name;
    req.session.userId = user.id;
    res.redirect('/user/profile');
  } catch (error) {
    console.log(error);
  }
});

router.get('/signin', (req, res) => {
  res.render('signinPage');
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    if (user.password === password) {
      req.session.userName = user.name;
      req.session.userEmail = user.email;
      req.session.userId = user.id;
      res.redirect('/user/profile');
    } else {
      res.send('wrong password');
    }
  } else {
    res.redirect('/user/signup');
  }
});

router.get('/profile', async (req, res) => {
  const user = await User.findByPk(req.session.userId);
  res.render('profile', { user });
});

router.get('/favour', async (req, res) => {
  let favourSocks;
  try {
    favourSocks = await Favour.findAll({ include: Sock, where: { user_id: req.session.userId } });
    // favourSocks = await Favour.findAll(res.locals.userid);
    console.log('======>', favourSocks);
  } catch {
    console.log('Не удалось получить записи из базы данных');
  }
  return res.render('favour', { favourSocks });
});

router.post('/addtofavour', async (req, res) => {
  try {
    const newFavour = await Favour.create({
      user_id: req.session.userId,
      sock_id: req.body.socksid2,
    });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

router.post('/addtocart', async (req, res) => {
  try {
    const newCart = await Cart.create({
      user_id: req.session.userId,
      sock_id: req.body.socksid1,
    });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

router.get('/cart', async (req, res) => {
  const user = await User.findByPk(req.session.userId);
  res.render('cart', { user });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

router.delete('/delete_fav/:id', async (req, res) => {
  console.log('00000',req.params);
  try {
    await Favour.destroy({ where: { sock_id: Number(req.params.id) } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
