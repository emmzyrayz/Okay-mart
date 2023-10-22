// JavaScript to calculate age
const birthdate = new Date('2003-04-15'); // Replace with your birthdate
const currentDate = new Date();

const age = currentDate.getFullYear() - birthdate.getFullYear();
document.getElementById('age').textContent = age + ('yrs');

// JavaScript to toggle project descriptions on click
const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
    title.addEventListener('click', () => {
        const projectDescription = title.nextElementSibling;
        const isActive = title.classList.contains('active');
        
        // Toggle the 'active' class on the title
        title.classList.toggle('active', !isActive);
        
        // Toggle the display of the description
        projectDescription.style.display = isActive ? 'none' : 'block';
    });
});