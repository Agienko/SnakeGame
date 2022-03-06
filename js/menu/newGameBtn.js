import { snake } from "../game/snake.js"
import { setDelta, step } from "../game/keyManager.js"
import { menuWrapper } from "./registrationForm.js"
import { stopInterval, startGameBtnFunc } from "./startGameBtn.js"
import { stone } from "../game/stone.js"
import { levelValue } from "../game/level.js"
import { user } from "../user.js"
import { btnSound } from "../game/audio.js"

export function newGame(){
    btnSound.play()
    if(user.name) menuWrapper.forEach(menu => menu.style.opacity = '1')
    user.clearScore()
    clearInterval(stopInterval)
    setDelta(step, 0)
    gameSquare.innerHTML = ''

    snake.body = [[], [], []]
    snake.bodyRandom()
    snake.draw()
    startGameBtn.textContent = 'Старт'
    startGameBtnFunc()

    stone.clearArr()
    stone.createCordsArr(levelValue)
    stone.draw()
  }