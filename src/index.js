const express = require('express');
const usersRoutes = require('./routes/Users');
const middlewareLogRequest = require('./middleware/log');
const app = express();
const port = 3000;

// Middleware untuk mengurai body JSON dalam permintaan POST
app.use(middlewareLogRequest.logRequest);
app.use(express.json());

// Menggunakan middleware yang valid
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server berhasil di running di port ${port}`);
});
