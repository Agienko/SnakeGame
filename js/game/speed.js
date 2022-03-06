export let speedValue = 500

const speed = document.querySelector('#speed')
speed.addEventListener('change', function(){
  speedValue = event.target.value
})