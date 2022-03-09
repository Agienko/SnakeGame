import { food } from "../game/food.js"
import { snake } from "../game/snake.js"
import { deltaX, deltaY } from "../game/keyManager.js"
import { speedValue } from "../game/speed.js"
import { menuWrapper} from "./registrationForm.js"
import { regText } from "./footer.js"
import { user } from "../user.js"
import { btnSound } from "../game/audio.js"

export let stopInterval
export function startGameBtnFunc(){
    startGameBtn.onclick = start
    document.onkeydown = ()=> { if (event.keyCode === 32) start() }
  }

function start(){
  if(snake.isAlive){
    btnSound.play()
    switch(startGameBtn.textContent){
      case 'Старт': 
      if (user.name){
        regText.textContent = `
          Скорость: ${speed.options.selectedIndex+1},
          Уровень: ${level.value},
          Сквозь стены: ${throughTheWalls.options.selectedIndex ? 'Нет' : 'Да'}
        `
      }
        menuWrapper.forEach(menu => menu.style.opacity = '0')
        startGameBtn.textContent = 'Пауза'
        food.draw()
        snake.move(deltaX, deltaY)
        stopInterval = setInterval(() =>snake.move(deltaX, deltaY), speedValue);
        break;
      case 'Пауза': 
        startGameBtn.textContent = 'Продолжить'
        clearInterval(stopInterval)
        break;
      case 'Продолжить': 
        startGameBtn.textContent = 'Пауза'
        stopInterval = setInterval(() =>snake.move(deltaX, deltaY), speedValue);
        break;
    } 
  } 
}