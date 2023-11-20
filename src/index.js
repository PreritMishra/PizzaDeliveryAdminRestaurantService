const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(bodyParser.json());

// Use the admin routes
app.use('/admin', adminRoutes);

// Use the restaurant routes
app.use('/restaurants', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
