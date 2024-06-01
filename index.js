
// require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./src/db/index'); // Ensure the database connection is established
const authRoutes = require('./src/routes/authRoutes');
const protectedRoutes = require('./src/routes/protected');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
