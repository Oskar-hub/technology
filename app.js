const phone = document.querySelector('.app-container');
const input = document.querySelector('input');

input.addEventListener('input', () => {
     console.log(input.value);
     phone.style.background = `linear-gradient(0 deg, ${input.value} 0%, rgba(0,0,0,1) 100% )`
});