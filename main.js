// Smooth scrolling and interactive components for AtendaFlow landing page
document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion handling - close others when one opens
    const faqDetails = document.querySelectorAll('.faq-item');
    faqDetails.forEach(detail => {
        detail.addEventListener('toggle', (e) => {
            if (detail.open) {
                faqDetails.forEach(otherDetail => {
                    if (otherDetail !== detail && otherDetail.open) {
                        otherDetail.removeAttribute('open');
                    }
                });
            }
        });
    });

    // Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
