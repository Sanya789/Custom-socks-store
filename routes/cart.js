const router = require('express').Router();
const { Sock } = require('../db/models');
const { Cart } = require('../db/models');

router.get('/', async (req, res) => {
  console.log(req.session.userId);
  try {
    const socks = await Cart.findAll({ include: Sock, where: { user_id: req.session.userId } });
    console.log(socks);

    // const cartUser = await Cart.findAll({ include: Sock, where: { user_id: req.session.userId } });
    // let sum = 0;
    // for (let i = 0; i < socks.length; i += 1) {
    //   sum += socks[i].price;
    // }
    // socks.push(sum);
    // console.log(sum);

    res.render('cart', { socks });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
