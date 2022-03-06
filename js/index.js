import { keyManager } from './game/keyManager.js'
import { newGame } from './menu/newGameBtn.js'
import { registrationForm } from './menu/registrationForm.js'
keyManager() //Управление клавиатурой

setTimeout(()=> document.body.style.opacity = '1', 200)//Прозрачное появление сайта
    
newGameBtn.onclick = newGame
registrationForm()

  
 