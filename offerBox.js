let btn = document.querySelectorAll('.click');
let div = document.querySelectorAll('.info');
let div2 = document.querySelectorAll('.text');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    div[i].classList.toggle('active');
    div2[i].classList.toggle('show');
  });
}

btn.addEventListener('click', () =>{
    div.classList.toggle('active');
    div2.classList.toggle('show');
})