let fightNum = fightList;
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
    
   redCorner.innerHTML = `<img src="${fightList[fightList].redCorner.image}" alt="${fightList[fightList].redCorner.name}"><h2>${fightList[fightList].redCorner.name}</h2><p>Record: ${fightList[fightList].redCorner.record}</p>`});
   fetch("fight.json")
  .then(function(response) {
    return response.json();
  }) 
  .then(function(data) {
    console.log (data); 
    fightList=data;
    
   blueCorner.innerHTML = `<img src="${fightList[fightList].blueCorner.image}" alt="${fightList[fightList].blueCorner.name}"><h2>${fightList[fightList].blueCorner.name}</h2><p>Record: ${fightList[fightList].blueCorner.record}</p>`});
