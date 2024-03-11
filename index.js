const express = require('express');
const app = express();
const port = 4000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.post('/', (req, res) => {
    res.send('<h1>Got a POST request</h1>');
});


app.listen(port, () => {
    console.log(`Example app listerning on port ${port}`)
});
console.log('Erreur lors de la création du serveur');