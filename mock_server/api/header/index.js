const {Router} = require('express');
const router = Router();

const createRouter = () => {
  return router.get('/api/header', (req, res) => {
    res.json([      
      {
        key: 2,
        menuHref: '/',
        menuItem: 'Home',
      },
      {
        key: 3,
        menuHref: '/about',
        menuItem: 'About Us',
      },
      {
        key: 4,
        menuHref: '/',
        menuItem: 'Products and Services',
      },
      {
        key: 5,
        menuHref: '/',
        menuItem: 'Contact Us',
      },
      {
        key: 6,
        menuHref: '/',
        menuItem: 'Admin',
      },
    ]);
  });
};

module.exports = createRouter;
