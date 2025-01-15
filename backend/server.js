// Glavna ulazna tačka za backend

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const playerRoutes = require('./routes/playerRoutes');
const sequelize = require('./config/database');

// Konfiguracija baze podataka
require('dotenv').config();
console.log('Varijable okruženja:', process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);

// Konfiguracija servera
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rute
app.use('/api/players', playerRoutes);

// Pokretanje servera
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server se pokreće na portu: ${PORT}`));
});