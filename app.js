const express = require('express');
const publicRouter = require('./routes/PublicRoute');
const privateRouter = require('./routes/PrivateRoute,js');

const app = express();
const port = 3000;
app.use('/public', publicRouter);
app.use('/private', privateRouter);


app.use(express.static('public'));
app.listen(port, () => {
    console.error(`Server is running on http://localhost:${port}`);
});
