const app = require('express')();
const PrimeCheck = require('./PrimeCheck.js');
app.get('/isPrime', (req, res) => {
    console.log(req.query.number);
    const obj = PrimeCheck(parseInt(req.query.number));
    res.send(obj);
});
app.listen(8000, () => console.log("server is listening............"))