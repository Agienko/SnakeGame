import { newGame } from "../menu/newGameBtn.js";

export let levelValue = 0;
level.onchange = () =>{
    levelValue = event.target.value
    newGame() 
} 