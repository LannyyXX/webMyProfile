// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Modal functionality
const viewProjectLinks = document.querySelectorAll('.view-project');

viewProjectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = document.getElementById('myModal');
        const modalContent = modal.querySelector('.modal-content');
        const modalImages = modalContent.querySelector('#modal-images');
        const modalTitle = modalContent.querySelector('h2');
        const modalDescription = modalContent.querySelector('p');
        
        modalTitle.textContent = this.previousElementSibling.previousElementSibling.textContent;
        modalDescription.textContent = this.previousElementSibling.textContent;
        
        // Clear previous images
        modalImages.innerHTML = '';
        
        // Retrieve and add new images
        const images = JSON.parse(this.getAttribute('data-images'));
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Project Image';
            modalImages.appendChild(img);
        });
        
        // Display the modal
        modal.style.display = 'block';
        
        // Close modal functionality
        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
