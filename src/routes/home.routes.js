const { Router } = require('express');
const { renderHome } = require('../controllers/home.controller');

const router = Router();

router.get('/', renderHome);

module.exports = router;