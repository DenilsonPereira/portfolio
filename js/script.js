// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 50);

    //remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
    // scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    //  typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};
      
// button dark mode
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
  
    darkModeToggle.addEventListener('click', toggleDarkMode);
  
    function toggleDarkMode() {

      darkModeToggle.classList.toggle('bxs-sun');
      darkModeToggle.classList.toggle('bxs-moon');
      
      document.body.classList.toggle('dark-mode');
    }
  });
 
  document.addEventListener("DOMContentLoaded", function () {
    const skills = [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "SQL", level: 80 },
      { name: "PHP", level: 75 },
      { name: "JavaScript", level: 70 }
    ];
  
    skills.forEach(skill => {
      const skillBar = document.getElementById(skill.name.toLowerCase());
      const bar = skillBar.querySelector(".bar");
      const percentage = skillBar.querySelector(".percentage");
  
      bar.style.width = `${skill.level}%`;
      percentage.textContent = `${skill.level}%`;
    });
  });