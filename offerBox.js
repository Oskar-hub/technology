let btn = document.querySelectorAll('.click');
let div = document.querySelectorAll('.info');
let div2 = document.querySelectorAll('.text');
let arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    div[i].classList.toggle('active');
    div2[i].classList.toggle('show');
    arrow[i].classList.toggle('a-arrow');
  });
}

btn.addEventListener('click', () =>{
    div.classList.toggle('active');
    div2.classList.toggle('show');
    arrow.classList.toggle('a-arrow');
})