document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('hero-modal');
    const modalHeroName = document.getElementById('modal-hero-name');
    const modalHeroImg = document.getElementById('modal-hero-img');
    const closeBtn = document.querySelector('.close-btn');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const heroName = button.getAttribute('data-hero');
            const heroImg = button.getAttribute('data-img');
            modalHeroName.textContent = heroName;
            modalHeroImg.src = heroImg;
            modalHeroImg.alt = heroName;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
