const pool = require('../models/db');

const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addUser = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getUsers,
    addUser
};
