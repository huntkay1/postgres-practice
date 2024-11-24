const pool = require('./pool');

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

//the $1 is used to prevent sql injection. 
//the user input is passed into an array as the second argument and pg handles the rest
async function insertUsername(username) {
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

module.exports = { getAllUsernames, insertUsername };

