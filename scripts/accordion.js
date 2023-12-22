const accordionContent = document.querySelectorAll('.accordion__content');

for (const content of accordionContent) {
    content.addEventListener('click', () => {
        content.classList.toggle('active');
    });
}