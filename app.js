window.addEventListener('scroll', unmask);
function unmask(){
     let unmask = document.querySelectorAll('.unmask');

     for(let i = 0; i < unmask.length; i++) { 
          let height = window.innerHeight;
          let top = unmask[i].getBoundingClientRect().top;
          let point = 190;
         
          if(top < height - point){
               unmask[i].classList.add('unmask-active');
          }
     }
     };







    