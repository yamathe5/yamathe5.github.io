let timeframe = 'weekly' //deafult value
const container = document.querySelector('.grid-layout')
let regularCards; //place holder for all cards (work, play, study, etc)

// 1. Initialize Menu
const menu = document.querySelectorAll('.menu-link');

menu.forEach(element => {
  element.addEventListener('click', menuOnClick);
});

// 2. Get JSON
let data = {};
fetch('data.json')
  .then(resp => resp.json())
  .then(jsonData => {
    //CREATE CARDS
    //console.log(jsonData) //ESTO SE USO PARA VER SI FUNCIONABA EL ARCHIVO -> imprime el array del json
    jsonData.forEach(element => {
      container.insertAdjacentHTML('beforeend', 
        createRegularCard(element, timeframe))
    })
    //CONVERT ARRAY TO DICT
    jsonData.forEach(element => {
      data[element.title] = element.timeframes
    })
    //I WANT TO HAVE REFERENCE TO CREATE CARDS ??
    regularCards = document.querySelectorAll('.card')
    //console.log(regularCards)
});

  
//EL HOVER EN MOVIL FUNCIONA TMB COMO ACTIVE, ASI QUE NO ES NECSRIO HACER ESTO PERO SI QUEREMOS QUE 
//PUEDA HACERSE EN EL NAVEGADOR SI LO NECESITAMOS

function menuOnClick(event){
  //console.log('click', event.target.innerText.toLowerCase()) PARA VER SI FUNCIONA
  menu.forEach(element => {
        element.classList.remove('menu-active');
    });
    event.target.classList.add('menu-active');
    timeframe = event.target.innerText.toLowerCase();
    
    updateCards(timeframe);
    //console.log(event) //ES PONITER EVENT, un evento, PERO NO ES NINGUN ELEMENTO
    //console.log(timeframe)//es la informacion
}

function updateCards(timeframe){
  regularCards.forEach(card => {
    updateCard(card, timeframe)
  }) 
}

function updateCard(card, timeframe){
  //console.log('update') // imprime update 6 veces xq son 6 card
  const title = card.querySelector('.card-subject').innerText
  const current = data[title][timeframe]['current']
  const previous = data[title][timeframe]['previous']
  //console.log(title)

  const timeframeMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  }

  const hoursElement = card.querySelector('.card-time')
  hoursElement.innerText = `${current}hrs`
  const msgElement = card.querySelector('.card-module')
  msgElement.innerText = `${timeframeMsg[timeframe]} - ${previous}hrs`
}


function createRegularCard(element, timeframe){
  let title = element['title']
  let current = element['timeframes'][timeframe]['current']
  let previous = element['timeframes'][timeframe]['previous']

  const timeframeMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'

  }
  //console.log(title,current,previous)
  
  return `
<div class="card c1 ${title.toLowerCase().replace(/\s/g, "")}">    
  <img class="card-img" src="/time-tracking-dashboard/images/icon-${title.toLowerCase().replace(/\s/g, '')}.svg" alt="">
  <div class="card-content">
    <div class="card-content-text card-content-1">
      <p class="card-subject">${title}</p>
      <img src="/images/icon-ellipsis.svg" alt="">
    </div>
    <div class="card-content-text card-content-2">
      <p class="card-time">${current}hrs</p>
      <p class="card-module">${timeframeMsg[timeframe]} - ${previous}hrs</p>
    </div>
  </div>
</div>`
}//.replace(/\s/g. '') ====>>>>>>> SIRVE PARA ELIMINAR LOS ESPACIOS DE UN STRING
