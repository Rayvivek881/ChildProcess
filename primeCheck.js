process.on("message", message => {
    const jsonobj = PrimeCheck(message.number);
    process.send(jsonobj);
    process.exit();
})
function PrimeCheck(params) {
    const obj = {
        isPrime : true,
        Number : params,
        Time : new Date()
    }
    for (let i = 3; i < params; i++) {
        if (params % i == 0) 
            obj.isPrime = false;
    }
    let val = new Date();
    obj.Time = val.getTime() - obj.Time.getTime();
    return obj;
}
// module.exports = PrimeCheck;