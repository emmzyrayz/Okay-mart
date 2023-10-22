// Randomly position the rocket
const rocket = document.querySelector('.rocket');
rocket.style.left = Math.random() * (window.innerWidth - rocket.offsetWidth) + 'px';
rocket.style.top = Math.random() * (window.innerHeight - rocket.offsetHeight) + 'px';