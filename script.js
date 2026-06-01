function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Toggle image overlay on mobile/touch devices
document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', function(e) {
        this.classList.toggle('show-hover');
    });
});

// Close image overlay when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.image-container').forEach(container => {
        container.classList.remove('show-hover');
    });
});

// Prevent link navigation when image is clicked
// document.querySelectorAll('.project-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//         if (e.target.closest('.image-container')) {
//             e.preventDefault();
//         }
//     });
// });