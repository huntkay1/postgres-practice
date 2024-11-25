const { Router } = require('express');
const { getUsernames, createUsernameGet, createUsernamePost} = require('../controllers/indexController')

const indexRouter = Router();

indexRouter.get('/', getUsernames)

indexRouter.get('/new', createUsernameGet)

indexRouter.post('/new', createUsernamePost)


module.exports = indexRouter;