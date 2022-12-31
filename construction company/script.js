document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.add('nav-show');
  document.querySelector('.nav-control').classList.add('nav-control-show');
})

// nav control
document.querySelector('.nav-control').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.remove('nav-show');
  document.querySelector('.nav-control').classList.remove('nav-control-show');
})
