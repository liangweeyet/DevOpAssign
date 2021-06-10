"stricter mode"

//base
/*
var exp = [4000,5000,6500,5000,2800,3500]
exp.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
*/
//with interest
//var exp = [4000,5000,6500,5000,2800,3500]
//exp.forEach(print1);

/*
//function print1(item, index) {
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
  }

*/



var exp = [4000,5000,6500,5000,2800,3500]

const calcInterest=function(exp){
    return exp>4000?exp*0.02:exp*0
}

const interest = [calcInterest(exp[0]),calcInterest(exp[1]),calcInterest(exp[2]),calcInterest(exp[3]),calcInterest(exp[4]),calcInterest(exp[5])];

const totals = [exp[0]+interest[0],exp[1]+interest[1],exp[2]+interest[2],exp[3]+interest[3],exp[4]+interest[4],exp[5]+interest[5]]

totals.forEach(print)

function print(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}


/*
function totals(item, index) {
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
  }


//sample
/*

const calcTip=function(bill){
    return bill>=50&&bill<=300?bill*0.15:bill*0.2
}

//const calcTip=bill=>bill>=50&&bill<==300?bill*0.15:bill*0.2

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(bills,tips);
console.log(totals)
*/