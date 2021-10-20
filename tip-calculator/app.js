let a = document.querySelector('.bill')
a.addEventListener('keyup', intoInt)
var b = document.querySelector('.numPeople')
b.addEventListener('keyup', intoInt)
var c = document.querySelector('.custom')
c.addEventListener('keyup', intoInt)



var five = document.querySelector('.five')
five.addEventListener('click', cambiazo5)
var ten = document.querySelector('.teen')
ten.addEventListener('click', cambiazo10)
var fifteen = document.querySelector('.fifteen')
fifteen.addEventListener('click', cambiazo15)
var twentyFive = document.querySelector('.twentyFive')
twentyFive.addEventListener('click', cambiazo25)
var fifty = document.querySelector('.fifty')
fifty.addEventListener('click', cambiazo50)

function cambiazo5(){
    c.value = number1*0.05;
    intoInt()
}
function cambiazo10(){
    c.value = number1*0.1;
    intoInt()
}
function cambiazo15(){
    c.value = number1*0.15;
    intoInt()
}
function cambiazo25(){
    c.value = number1*0.25;
    intoInt()
}
function cambiazo50(){
    c.value = number1*0.5;
    intoInt()
}


var dollars = document.querySelector('.dollars')
var dollarsTip = document.querySelector('.dollarsTip')

let number1 = 0;
let number2 = 0;
let number3 = 0;
let total;
let perPerson;
let tipPerPerson;

function intoInt(){
    number1 = parseFloat(a.value);
    number2 = parseFloat(b.value); 
    number3 = parseFloat(c.value); 
    //number3 = number3/

    total = number1 + number3;
    tipPerPerson = number3/number2;
    perPerson = total/ number2;
    if(perPerson){
        dollars.textContent = `$ ${perPerson}`
    }
    if(tipPerPerson){
        dollarsTip.textContent = `$ ${tipPerPerson}`
    }
    //console.log(perPerson)
}
