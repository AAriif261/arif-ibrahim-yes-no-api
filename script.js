let redCorner=document.querySelector(".fighter1");
let blueCorner=document.querySelector(".fighter2");
let fightList;


function chooseFighter(num) {
    alert("You selected Fighter " + num + "!");
}

fetch("fight.json")
  .then(function(response) {
    return response.json();
  }) 
  .then(function(data) {
    console.log (data); 
    fightList=data;
    
   redCorner.innerHTML = `<img src="${fightList[0].redCorner.image}" alt="${fightList[0].redCorner.name}"><p>${fightList[0].redCorner.name}</p>`});
   fetch("fight.json")
  .then(function(response) {
    return response.json();
  }) 
  .then(function(data) {
    console.log (data); 
    fightList=data;
    
   blueCorner.innerHTML = `<img src="${fightList[0].blueCorner.image}" alt="${fightList[0].blueCorner.name}"><p>${fightList[0].blueCorner.name}</p>`});