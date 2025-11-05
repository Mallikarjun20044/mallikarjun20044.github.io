$(document).ready(function() {
    // Progress bar on scroll
    $(window).scroll(function() {
        const winScroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const scrolled = (winScroll / height) * 100;
        $('#progress-bar').css('width', scrolled + '%');
    });

    // Animate skill tags on hover
    $('.skill-tag').hover(
        function() {
            $(this).css('background', 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)');
        },
        function() {
            $(this).css('background', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        }
    );

    // Download button click handler
    $('#downloadResume').click(function(e) {
        e.preventDefault();
        alert('In a real implementation, this would download a PDF version of the resume.\n\nFor now, you can print this page as PDF using your browser\'s print function (Ctrl+P or Cmd+P).');
    });

    // Contact form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        
        alert(`Thank you ${name}!\n\nYour message has been received. In a real application, this would send an email.\n\nSubject: ${subject}`);
        
        // Reset form
        this.reset();
    });

    // Add smooth animations to cards on page load
    $('.content-card').each(function(index) {
        $(this).css('animation-delay', (index * 0.1) + 's');
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $('.nav-links a').each(function() {
        const href = $(this).attr('href');
        if (href === currentPage) {
            $(this).css('color', '#667eea');
        }
    });
});
```

## How to Run on Your Laptop:

### **Folder Structure:**
```
my-resume-website/
├── index.html
├── resume.html
├── biodata.html
├── contact.html
├── style.css
└── script.js