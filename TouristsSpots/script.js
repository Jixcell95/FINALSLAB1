document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionID = event.target.getAttribute('href').substring(1);
            document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
