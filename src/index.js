require('dotenv').config()
const express = require('express');
const usersRoutes = require('./routes/Users');
const middlewareLogRequest = require('./middleware/log');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware untuk mengurai body JSON dalam permintaan POST
app.use(middlewareLogRequest.logRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

// Menggunakan middleware yang valid
app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'Upload berhasil'
  });
});

app.use((error, req, res, next) => {
  res.json({
    message: error.message
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
