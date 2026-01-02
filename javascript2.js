let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove+
  
  ('active');
}
 
const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
sr.reveal('.home-text',{delay: 200, origin: 'top'})
sr.reveal('.heading',{delay: 200, origin: 'top'})
sr.reveal('.about-text',{delay: 200, origin: 'left'})
sr.reveal('.about-text',{delay: 200, origin: 'left'})
sr.reveal('.reviews-container',{delay: 200, origin: 'top'})
sr.reveal('.parts-container .box',{delay: 200, origin: 'left'})
sr.reveal('.blog-container .box',{delay: 200, origin: 'right'})
sr.reveal('.footer-box',{delay: 200, origin: 'top'})

