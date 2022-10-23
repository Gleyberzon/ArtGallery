document.addEventListener('DOMContentLoaded', ()=>{
    const contactBlock = document.querySelector(".contact"),
          contactBtns = document.querySelectorAll(".contact_btn"),
          overlay = contactBlock.querySelector('.overlay'),
          contactForm = contactBlock.querySelector('form');
          contactClose = contactForm.querySelector('.close');
    contactBtns.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            contactBlock.classList.toggle("active");
            overlay.classList.toggle('active');
            contactForm.classList.toggle('active');
            console.log(contactForm);
        });
    });

    contactClose.addEventListener('click',(e)=>{
        e.preventDefault();
        contactBlock.classList.toggle("active");
        overlay.classList.toggle('active');
        contactForm.classList.toggle('active');
    });







});