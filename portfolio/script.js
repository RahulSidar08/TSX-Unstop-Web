// Optional: Highlight active section dynamically

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    this.reset();
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });
});
