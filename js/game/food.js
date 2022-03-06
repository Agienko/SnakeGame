import { snake } from "./snake.js";
import { step } from "./keyManager.js";
import { stone } from "./stone.js";

export const food = {
    foodOne: document.createElement('div'),
    cords: [],
    randomCoords(){
        do { 
            this.cords[0] = Math.floor(Math.random()*23)*step;
            this.cords[1] = Math.floor(Math.random()*35)*step;
            } while(this.inSome(snake.body) || this.inSome(stone.cords)) 
    },
    inSome(someCoords){//проверка на попадание на какой-либо объект
        for (let coord of someCoords) {
            if (coord[0] === this.cords[0] && coord[1] === this.cords[1]) return true;   
        } return false;
    },
    draw(){
        this.foodOne.className = 'food'
        this.randomCoords()
        this.foodOne.style.transform = `translate(${ this.cords[0]}px, ${ this.cords[1]}px)`;
        gameSquare.append(this.foodOne)
    },
}

