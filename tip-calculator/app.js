let a = document.querySelector('.bill')
a.addEventListener('keyup', intoInt)
var b = document.querySelector('.numPeople')
b.addEventListener('keyup', intoInt)
var c = document.querySelector('.custom')
c.addEventListener('keyup', intoInt)
var reset = document.querySelector('.reset')
reset.addEventListener('click', resetValues)


var five = document.querySelector('.five')
five.addEventListener('click', change5)
var ten = document.querySelector('.teen')
ten.addEventListener('click', change10)
var fifteen = document.querySelector('.fifteen')
fifteen.addEventListener('click', change15)
var twentyFive = document.querySelector('.twentyFive')
twentyFive.addEventListener('click', change25)
var fifty = document.querySelector('.fifty')
fifty.addEventListener('click', change50)

function change5(){
    c.value = number1*0.05;
    intoInt()
}
function change10(){
    c.value = number1*0.1;
    intoInt()
}
function change15(){
    c.value = number1*0.15;
    intoInt()
}
function change25(){
    c.value = number1*0.25;
    intoInt()
}
function change50(){
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

function resetValues(){
    a.value = 0;
    b.value = 0;
    c.value = 0;
}