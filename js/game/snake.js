import { food } from "./food.js"
import { bonusFood } from "./bonusFood.js"
import { stopInterval } from "../menu/startGameBtn.js"
import { step } from "./keyManager.js"
import { throughWalls } from './throughTheWalls.js'
import { stone } from "./stone.js"
import { user } from '../user.js'
import { goSound, eatSound, crashSound, bonusTakeSound } from "./audio.js"

export const snake ={
    deadTitle:  document.createElement('h1'),
    isAlive: true,
    body: [[], [], []], // массив с координатами тела змейки
    end(){
        this.isAlive = false
        this.deadTitle.className ='modalWrapper'
        this.deadTitle.innerHTML = `
            <h2 class ="endGame">Игра оконечна.</h2> 
            <p class ="endGame">Набрано очков: ${user.score}. </p>
            <p class ="endGame">Длинна змейки: ${user.maxSnakeLength}</p>
    `
        document.body.append(this.deadTitle)
        setTimeout(()=> this.deadTitle.style.opacity = '1', 0 )
        const handler =() =>{
            this.deadTitle.removeEventListener('click', handler)
            this.deadTitle.style.opacity = '0'
            setTimeout(()=> this.deadTitle.remove(), 200)
            }
        this.deadTitle.addEventListener('click', handler)
    },
    head(){return this.body[0]},
    bodyRandom(){//Вставляет начальную змейку рандомно по горизонтали(кроме последней колонки)
        this.body[0][0] = Math.floor(Math.random()*20 + 2)*step;
        this.body[0][1] = Math.floor(Math.random()*35)*step;
        this.body[1][1] = this.body[2][1] = this.body[0][1] 
        this.body[1][0] = this.body[0][0] - step 
        this.body[2][0] = this.body[0][0] - 2*step
    },
    draw(){     // Стирает и перерисовывает заново
        this.body.forEach((cord, index) => {
            const fragment = document.createElement('div')
            fragment.className = 'snake'
            if( index === 0) fragment.className += ' head'
            fragment.style.transform = `translate(${cord[0]}px, ${cord[1]}px)`
            gameSquare.append(fragment)
        })
    },
    crash(coord){ //Проверка на столкновение, внутрь передаются координаты обьектов столкновения
        for (let i = 1; i < coord.length; i++){
            if(this.head()[0] === coord[i][0] && this.head()[1] === coord[i][1]){
                this.end()
               return true
            }
        } return false
    },
    move(dx, dy){ // Движение змеи
        if(this.crash(this.body) || this.crash(stone.cords)){// проверка на столкновение с собой и камнями
            clearInterval(stopInterval) 
            crashSound.play()
            this.end()
        } else {
            const fragments = document.querySelectorAll('.snake')
            fragments.forEach(fragment => fragment.remove())
            
            let cordX = this.body[0][0] + dx;
            let cordY = this.body[0][1] + dy;

            if (throughWalls){// сквозь стены
                if (!(cordX < 345 && cordX >= 0)) (cordX <= 0) ? cordX = 330 : cordX = 0;
                if (!(cordY < 525 && cordY >= 0)) (cordY <= 0) ? cordY = 510 : cordY = 0;
            } else {// если столкнулся со стеной
                
                if (!(cordX <= 330 && cordX >= 0)) {
                    crashSound.play()
                    clearInterval(stopInterval)
                } 
                if (!(cordY <= 510 && cordY >= 0)){
                    crashSound.play()
                    clearInterval(stopInterval)
                } 
            }
            // еда
            if (this.body[0][0] === food.cords[0] && this.body[0][1] === food.cords[1]) {
                eatSound.play()
                food.draw() 
                user.setScore()
            } else if(this.body[0][0] === bonusFood.cords[0] && this.body[0][1] === bonusFood.cords[1]) {
                bonusTakeSound.play()
                user.setBonusScore()
                bonusFood.removeBonusFood()
            }else {
                this.body.pop();
            }
            this.body.unshift([cordX, cordY])
            goSound.pause()
            goSound.currentTime = '0'
            goSound.play()

            this.draw()
        } 
    }
}


