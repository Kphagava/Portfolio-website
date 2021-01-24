const navigation = document.querySelector('nav');
const navigationOverlay = document.querySelector('.sidenav-overlay');
const burgerBtn = document.querySelector('.burger-menu');

function toggleMenuState() {
    burgerBtn.classList.toggle('active');
    navigation.classList.toggle('active');
    navigationOverlay.classList.toggle('active');
}

burgerBtn.addEventListener('click', toggleMenuState);
navigationOverlay.addEventListener('click', toggleMenuState)

