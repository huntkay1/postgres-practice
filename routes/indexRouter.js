const { Router } = require('express');
const { getUsernames, createUsernameGet, createUsernamePost, deleteAllUsers} = require('../controllers/indexController')

const indexRouter = Router();

indexRouter.get('/', getUsernames)

indexRouter.get('/new', createUsernameGet)

indexRouter.post('/new', createUsernamePost)

indexRouter.get('/delete', deleteAllUsers)


module.exports = indexRouter;