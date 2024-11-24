const { Pool } = require('pg');

module.exports = new Pool({
    host: 'localhost',
    user: 'Kayla.',
    database: 'top_users',
    password: 'Pickles98!',
    port: 5432
})