let hours = document.querySelector('.date');

function time(){
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes();
  
  document.querySelector(".date").innerHTML = time;
  setTimeout('time()', 100);
}

time();


let app = document.querySelectorAll(".app");
let strong  = document.querySelectorAll("strong");
let info = document.querySelectorAll('.switchON')
let circle = document.querySelectorAll('.switch');



for(let i = 0; i < app.length; i++){
  app[i].addEventListener('click', () => {
  circle[i].classList.toggle('switch-active');
  app[i].classList.toggle('app-active');
  strong[i].classList.toggle('strong-active');
  info[i].classList.toggle('switchON-active');
  }); 
}

app.addEventListener('click', () => {
  app.classList.toggle('app-active');
  strong.classList.toggle('strong-active');
  info.classList.toggle('switchON-active');
  circle.classList.toggle('switch-active');
})






