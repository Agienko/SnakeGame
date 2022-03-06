import { bonusFood } from "./game/bonusFood.js";
export const user = {
    name: '',
    score: 0,
    maxSnakeLength: 3,
    setScore(){
        if(this.name){
            let speedVal = Math.round(5000/speed.value);
            let levelVal = +level.value + 1;
            let throughWallVal = Math.round(Boolean(throughTheWalls.value)) ? 0 : +(500/speed.value)*(+level.value+1)
            this.score += Math.round(10 + speedVal +levelVal + throughWallVal);
            this.maxSnakeLength++
            score.textContent = ` Очки: ${this.score}`
            scoreSize.textContent = `Длинна: ${this.maxSnakeLength}`
            if(this.maxSnakeLength % 3 === 0 && Math.round(Math.random() + 0.1)) {
                bonusFood.draw()
            }
        } 
    },
    setBonusScore(){
        if(this.name){
            let speedVal = Math.round(5000/speed.value);
            let levelVal = +level.value + 1;
            let throughWallVal = Math.round(Boolean(throughTheWalls.value)) ? 0 : +(500/speed.value)*(+level.value+1)
            this.score += Math.round(10 + speedVal +levelVal + throughWallVal)*5;
            this.maxSnakeLength++
            score.textContent = ` Очки: ${this.score}`
            scoreSize.textContent = `Длинна: ${this.maxSnakeLength}`
            if(this.maxSnakeLength % 5 === 0) {
                bonusFood.draw()
            }
        } 
    },
    clearScore(){
        this.score = 0
        this.maxSnakeLength = 3
        score.textContent = ` Очки: ${this.score}`
        scoreSize.textContent = `Длинна: ${this.maxSnakeLength} `
    }
}
