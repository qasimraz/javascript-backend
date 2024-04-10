const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Open a database connection
const db = new sqlite3.Database('./mydatabase.db');  // Replace with your database file path

app.get('/json', (req, res) => {
    db.all('SELECT * FROM library_books', (err, rows) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);  // Internal Server Error
        } else {
            res.statusCode = 200;
            res.type('application/json');
            res.json(rows);  // Send the query results as JSON
        }
    });
});

// ... (rest of your Express.js code)
const port = process.env.PORT || 3000;  // Use environment variable for port or default to 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;



