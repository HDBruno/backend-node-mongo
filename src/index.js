const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//importo el router y se lo asigno a una ruta.
const v1RouterIndex = require('./v1/routes/index');
const v1RouterLogin = require('./v1/routes/login');
app.use('/api/v1', v1RouterIndex);
app.use('/api/v1', v1RouterLogin);

app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}...`)
});