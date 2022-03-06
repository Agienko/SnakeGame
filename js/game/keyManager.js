export const step = 15;
export let deltaX = step;
export let deltaY = 0;

export const setDelta = (x, y) =>{
    deltaX = x;
    deltaY = y;
}

export function keyManager(){// управление клавиатурой
    document.addEventListener('keydown', () =>{
        switch(event.keyCode){
            case 38: //Стрелка вверх
                if (deltaY !== 15) setDelta(0, -step)
                break;
            case 87: //W вверх
                if (deltaY !== 15) setDelta(0, -step)
                break;
            case 40: //Стрелка вниз
                if (deltaY !== -15) setDelta(0, step)
                break;
            case 83: //S вниз
                if (deltaY !== -15) setDelta(0, step)
                break;
            case 37: // Стрелка влево
                if (deltaX !== 15) setDelta(-step, 0)
                break;
            case 65: //A влево
                if (deltaX !== 15) setDelta(-step, 0)
                break;
            case 39: // Стрелка вправо
                if (deltaX !== -15) setDelta(step, 0)
                break;
            case 68: //D вправо
                if (deltaX !== -15) setDelta(step, 0)
                break;
        }
    })
}