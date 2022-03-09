let isCreated = false
function createModal(player){
    isCreated = true
    const modal = document.createElement('div')
    modal.className ='modalWrapper'
    modal.innerHTML = `
        <div class="modal">
            <div class="modalHeader">
                <span> О программе </span> 
                <img src="../img/close.png" alt="Закрыть" id="closeModal" data-close="true">
            </div>
            <div class="modalContent">
                <div class="modalContentWrap">
                <h3>Игра Snake</h3>
                <p><strong>Управление:</strong> Стрелки на клавиатуре, либо клавиши w,a,s,d.</p>  
                <p><strong>Пауза/продолжить:</strong> "Пробел" или кнопка в верхнем меню</p> 
                <p><em>Разработка Агиенко Юрия в рамках учебного проэкта</em></p>
                <p class="center"><strong>2022 год</strong></p>
                </div>
            </div>
            <div class="modalFooter">
                <button data-close="true">Закрыть</button>
            </div>
        </div>
    `
    document.body.append(modal);
   
    setTimeout(()=>{
        modal.querySelector('.modal').style.transform = 'translateY(400px)'
        modal.style.opacity = '1'
    }, 0 )
    function handler(){
        if(event.target.dataset.close || event.target === modal) {
            modal.removeEventListener('click', handler)
            modal.querySelector('.modal').style.transform = 'translateY(-400px)'
            modal.style.opacity = '0'
            isCreated = false
            setTimeout(()=> modal.remove(), 200)
        } 
    }
    modal.addEventListener('click', handler)
}

info.addEventListener('click', ()=>{
    createModal()
})


