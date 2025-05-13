document.addEventListener('DOMContentLoaded', () => {
    const deliveryCard = document.getElementById('delivery-card');
    const wishCard = document.getElementById('wish-card');
    const package = document.getElementById('package');
    const heartsContainer = document.querySelector('.hearts-container');
    
    package.classList.add('bounce');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    package.addEventListener('click', () => {
        package.classList.remove('bounce');
        
        package.classList.add('scale-up');

        setTimeout(() => {
            deliveryCard.classList.add('hidden');
            deliveryCard.classList.remove('fade-out');
            wishCard.classList.remove('hidden');
            wishCard.classList.add('fade-in');
        }, 2000);
    });
});