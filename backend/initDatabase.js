const pool = require('./models/db');

const initializeDatabase = async () => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100)
      );
    `);
        console.log('Database initialized');
    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        await pool.end();
        process.exit();
    }
};

initializeDatabase();
