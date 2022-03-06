import { step } from "./keyManager.js";
import { snake } from "./snake.js";

export const stone = {
    cords: [],
    randomCoords(){
           let x = Math.floor(Math.random()*23)*step;
           let y = Math.floor(Math.random()*35)*step;
           return [x, y] 
    },
    isSameSnake(cordArr){
        for (let coord of snake.body) {
            if ((coord[0] === cordArr[0] || coord[0]  === cordArr[0] - step) //проверка по координатам + пространство в 1 шаг по оси х
            && coord[1] === cordArr[1] ) return true;   
        } return false;
    },
    isSameSelf(cordArr){
        for (let coord of this.cords) {
            if (coord[0] === cordArr[0] && coord[1] === cordArr[1]) return true;   
        } return false;
    },
    createCordsArr(level){
        while(this.cords.length <= (level - 1)*7) {
            let newCord = this.randomCoords()
            if(!this.isSameSelf(newCord) && !this.isSameSnake(newCord)) {
              this.cords.push(newCord)      
            }
        } 
    },
    clearArr(){
        this.cords =[]
    },
    draw(){
        this.cords.forEach(cord => {
            const stoneOne = document.createElement('div')
            stoneOne.className = 'stone'
            stoneOne.style.transform = `translate(${ cord[0]}px, ${ cord[1]}px)`;
            gameSquare.append(stoneOne)
        }) 
    },
}




