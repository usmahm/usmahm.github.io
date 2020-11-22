const DOMElements = {
    navCheckbox: document.getElementById('navi-toggle'),
    navLinks: document.querySelectorAll('.navigation__item')
}

const closeModal = () => {
    if (DOMElements.navCheckbox.checked) {
        DOMElements.navCheckbox.checked = false;
    }
}

DOMElements.navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeModal)
})