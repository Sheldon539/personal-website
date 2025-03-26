// Image error handling
document.addEventListener('DOMContentLoaded', function() {
    // Add fallback for images that fail to load
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'image-fallback';
            fallback.textContent = this.alt || 'Image not available';
            this.parentNode.insertBefore(fallback, this);
        };
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰ Menu';
    document.querySelector('header').prepend(menuToggle);
    
    const nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});