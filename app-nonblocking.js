const app = require('express')();
const { fork } = require('child_process');
app.get('/isPrime', (req, res) => {
    console.log(req.query.number);
    const childProcess = fork('./PrimeCheck.js');
    childProcess.send({"number" : parseInt(req.query.number)})
    childProcess.on("message", message => res.send(message));
});
app.listen(8000, () => console.log("server is listening............"));