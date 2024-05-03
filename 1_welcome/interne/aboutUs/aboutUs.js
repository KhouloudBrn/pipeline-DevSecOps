const multipleText = document.querySelector('.multiple-text');
const words = ['by your side' , 'here to support you' , 'by your side' ,'here to provide a listening ear' , ' here to listen' , 'committed to being here for you'];

let index = 0;

function changeText() {
  multipleText.textContent = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeText, 2000); 



