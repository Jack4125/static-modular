// header
document.querySelector('.header-hamburger').addEventListener('click', () => {
  document.querySelector('.header-link-list-wrapper').classList.toggle('header-toggle');
});

document.querySelector('.header-link-list-wrapper').addEventListener('click', () => {
  document.querySelector('.header-link-list-wrapper').classList.toggle('header-toggle');
});

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  document.querySelector('.header-link-list-wrapper').classList.remove('header-toggle');
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-200px";
  }
  prevScrollPos = currentScrollPos;
}


// contact info
const email = document.querySelectorAll('.business-email');
const phone = document.querySelectorAll('.business-phone');

const cryptOne = ['mai', 'l:', 'email', '1-2222'];
const cryptTwo = ['te', 'lto:', '(999) 11', '@gmail.com'];

email.forEach(item => {
  item.innerHTML = `${cryptOne[2]}${cryptTwo[3]}`;
  item.href = `${cryptOne[0]}${cryptTwo[1]}${cryptOne[2]}${cryptTwo[3]}`;
});
phone.forEach(item => {
  item.innerHTML = `${cryptTwo[2]}${cryptOne[3]}`;
  item.href = `${cryptTwo[0]}${cryptOne[1]}${cryptTwo[2]}${cryptOne[3]}`;
});