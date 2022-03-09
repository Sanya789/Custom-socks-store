const router = require('express').Router();
const { Sock } = require('../db/models');

router.get('/', async (req, res) => {
  let socks;
  try {
    socks = await Sock.findAll({ raw: true });
  } catch (error) {
    console.log(error);
    res.status(501).end();
  }
  res.render('index', { socks });
});

router.get('/generatenewsocks', async (req, res) => {
  let socks;

  try {
    socks = await Sock.findAll({ raw: true });
  } catch (error) {
    console.log(error);
    res.status(501).end();
  }
  res.render('generateNewSocks', { socks });
});

router.post('/addSocks', async (req, res) => {
  try {
    const newSock = await Sock.create({
      title: req.body.inptitle,
      color: req.body.color,
      logo: req.body.logo,
      pattern: req.body.pattern,
      price: req.body.inpprice,
    });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

module.exports = router;
