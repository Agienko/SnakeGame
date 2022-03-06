import { stopInterval } from "./startGameBtn.js"
import { newGame } from "./newGameBtn.js"
import { user } from "../user.js"
import { regText } from "./footer.js"
import { hello } from "../game/audio.js"
import { btnSound } from "../game/audio.js"

export const scoreMenu = document.querySelector('.menu_wrapper_score')
export const menuWrapper = document.querySelectorAll('.menu_wrapper')
const userMenu = document.querySelector('.menu_wrapper_user')

export function registrationForm(){
  registration.addEventListener('click', ()=>{//Открытие формы регистрации (кнопка)
    btnSound.play()
    if (document.forms[0].style.opacity === '1') {
      setTimeout(()=> document.forms[0].style.opacity = '0', 5)
      setTimeout(()=> document.forms[0].style.display = 'none' , 500)
      
      registration.textContent = 'Войти';
    } else {
      clearInterval(stopInterval)
      document.forms[0].style.display = 'block' 
      setTimeout(()=> document.forms[0].style.opacity = '1', 5)
      registration.textContent = 'Закрыть'
      if(startGameBtn.textContent !== 'Старт'){
        startGameBtn.textContent = 'Продолжить'
      }
    }
  })
  
  document.forms[0].children[1].childNodes[1].onclick = ()=>{
    event.preventDefault()
    user.name = document.forms[0].children[0].children[1].value
    if (user.name) {
      hello.play()
      regText.textContent = ''
      setTimeout(()=> registration.style.display = 'none', 5)
      userMenu.style.opacity  = '1'
      scoreMenu.style.opacity  = '1'
      userMenu.children[0].textContent =`${user.name}`
      setTimeout(()=> document.forms[0].style.opacity = '0', 0)
      setTimeout(()=> document.forms[0].style.display = 'none' , 500)
      newGame()
    }
  }
}

