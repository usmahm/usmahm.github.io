const DOMElements = {
    navCheckbox: document.getElementById('navi-toggle'),
    navLinks: document.querySelectorAll('.navigation__item'),
    introSection: document.getElementById('intro'),
    mobileNavWrapper: document.querySelector('.navigation .wrapper')
}

const closeModal = () => {
    if (DOMElements.navCheckbox.checked) {
        DOMElements.navCheckbox.checked = false;
    }
}

DOMElements.navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeModal)
})

// Get and set Heigth of display window  as height of Intro section
const windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
DOMElements.introSection.style.height = `${windowHeight}px`;

// Set heigth for navigation wrapper on screen width less than 600px
const mediaQuery = window.matchMedia("(max-width: 600px)");
if (mediaQuery.matches) {
    DOMElements.mobileNavWrapper.style.height = `${windowHeight}px`;
}