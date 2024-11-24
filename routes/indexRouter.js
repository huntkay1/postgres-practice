const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    console.log('usernames will be logged here')
})

indexRouter.get('/new', (req, res) => {
    res.render('form')
})

indexRouter.post('/new', (req, res) => {
    console.log('usernmae to be saved: ', req.body.username)
})

module.exports = indexRouter;