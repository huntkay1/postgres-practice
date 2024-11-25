const create = require('prompt-sync');
const db = require('../db/queries');

async function getUsernames(req, res) {
    const search = req.query.search; // Get 'search' query parameter
    let usernames;
    if (search) {
        // If search is provided, fetch filtered results
        usernames = await db.getFilteredUsernames(search);
    } else {
        // Otherwise, fetch all usernames
        usernames = await db.getAllUsernames();
    }
    res.send(usernames.map(user => user.username).join(', '));
}

async function createUsernameGet(req, res) {
    res.render('form')
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

async function deleteAllUsers(req, res) {
    await db.deleteUsers();
    res.redirect('/')
}


module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteAllUsers
}