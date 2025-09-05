// Smooth Scrolling
document.addEventListener('DOMContentLoaded',()=>{
    const navLinks = document.querySelectorAll('nav ul li a, .footer-links li a');
    navLinks.forEach(link=>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) targetElement.scrollIntoView({behavior:'smooth'});
        });
    });

    // Gallery Tab Functionality
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab=>{
        tab.addEventListener('click', ()=>{
            tabs.forEach(t=>t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(c=>c.classList.remove('active'));
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });
});

// EmailJS Contact Form
(function(){ emailjs.init('LIyW5ilfH6JzF8_Hc'); })();
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData={from_name:contactForm.name.value,from_email:contactForm.email.value,message:contactForm.message.value};
    emailjs.send('service_15i8wvf','template_a3kk19i',formData)
        .then(response=>{ alert('Message sent successfully!'); contactForm.reset();})
        .catch(error=>{ alert('Failed to send message. Please try again.'); });
});
