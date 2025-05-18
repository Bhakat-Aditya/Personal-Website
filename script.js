function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Simple animation for qualification cards when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.qualification-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

function downloadMarksheet(type) {
    // Replace these with the actual paths to your PDF files
    const pdfFiles = {
        'class10': 'class10_marksheet.jpg',
        'class12': 'class12_marksheet.jpg',
        'college': 'college_marksheet.jpg'
    };

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfFiles[type];

    // Set the download attribute with a proper filename
    link.download = `Aditya_${type}_marksheet.jpg`;

    // Append to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Add a notification
    const notifications = {
        'class10': 'Downloading Class 10 Marksheet...',
        'class12': 'Downloading Class 12 Marksheet...',
        'college': 'Downloading College Marksheet...'
    };
    alert(notifications[type]);
}
// Projects section functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and buttons
    const modal = document.getElementById('demo-modal');
    const demoButtons = document.querySelectorAll('.view-demo-btn');
    const closeBtn = document.querySelector('.close');
    const iframe = document.getElementById('demo-iframe');

    // Open modal when demo button is clicked
    demoButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectUrl = this.getAttribute('data-src');
            iframe.src = projectUrl;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            iframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Animation for project cards
    const projectCards = document.querySelectorAll('.project-card');

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        projectObserver.observe(card);
    });
});

function downloadResume() {
    // Replace with the actual path to your resume PDF
    const resumePath = 'resume.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumePath;
    
    // Set the download attribute with a proper filename
    link.download = 'Resume.pdf';
    
    // Append to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Add a notification
    alert('Downloading resume...');
}