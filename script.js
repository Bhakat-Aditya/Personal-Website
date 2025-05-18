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
    const resumePath = 'resume.png'; // Correct PNG path
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Aditya_Bhakat_Resume.png'; // Better filename with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional nicer notification
    console.log('Resume download started');
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const messageDiv = document.getElementById('form-message');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
        // This is where you would normally make an AJAX call to your server
        // For demo purposes, we're just showing a success message
        
        // Reset form
        form.reset();
        
        // Show success message
        messageDiv.textContent = 'Your message has been sent successfully!';
        messageDiv.style.display = 'block';
        messageDiv.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
        messageDiv.style.color = '#2ecc71';
        messageDiv.style.border = '1px solid #2ecc71';
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }, 1500);
});

// Animation for contact section
document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-info-item, .contact-form');
    
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        contactObserver.observe(item);
    });
});