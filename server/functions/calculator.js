
const rate = 3.5;
const n = 12;
const t = 1/365;
exports.func = () => {
    return { 
        compoundInterest: (p) => {
            let b = (1+(rate/n));
            let e = n*t
            console.log(`b====>>>${b} e=====>>>>${e}`)
            var a = Math.pow(b,e)
            var amount = p*a;
            console.log("amount=========>>",a)
            return amount
        },
        simpleInterest: (p) => {
            let amount = (p*rate*t)/100;
            amount = amount.toPrecision(3);
            return amount;
        }
    } 
}