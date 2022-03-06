export let throughWalls = true;

const throughTheWalls = document.querySelector('#throughTheWalls')
throughTheWalls.onchange = ()=>{
    throughWalls = Boolean(event.target.value)
   if(!throughWalls) gameSquare.style.border = '3px solid rgba(15, 15, 15, 0.8)'
   if(throughWalls) gameSquare.style.border = '3px solid rgba(168, 168, 168, 0.671)'
}