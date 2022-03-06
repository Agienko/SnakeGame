import { snake } from "./snake.js"
import { step } from "./keyManager.js"
import { stone } from "./stone.js"
import { food } from "./food.js"
import { bonusSound } from "./audio.js"

export const bonusFood = {
    bonusFoodOne: document.createElement('div'),
    clearTimeout: '',
    cords: [],
    randomCoords(){
        do { 
            this.cords[0] = Math.floor(Math.random()*23)*step;
            this.cords[1] = Math.floor(Math.random()*35)*step;
            } while(this.inSome(snake.body) || this.inSome(stone.cords) || this.inSome(food.cords) || this.inSome(this.cords)) 
    },
    inSome(someCoords){//проверка на попадание на какой-либо объект
        for (let coord of someCoords) {
            if (coord[0] === this.cords[0] && coord[1] === this.cords[1]) return true;   
        } return false;
    },
    draw(){
        bonusSound.play()
        this.clearTimeout = setTimeout(() => this.removeBonusFood(), 3000 + 40*speed.value)
        this.bonusFoodOne.className = 'bonusFood'
        this.randomCoords()
        this.bonusFoodOne.style.left = `${this.cords[0]}px`
        this.bonusFoodOne.style.top = `${this.cords[1]}px`
        gameSquare.append(this.bonusFoodOne)
    },
    removeBonusFood(){
    this.bonusFoodOne.remove()
    this.cords = []
    }
}

