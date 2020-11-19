document.querySelector('.modal-1-open').addEventListener('click', ()=>{
  document.querySelector('.modal-1').classList.add('modal-show');
});

document.querySelector('.modal-1-close').addEventListener('click', ()=>{
  document.querySelector('.modal-1').classList.remove('modal-show');
});