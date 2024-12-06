// Sélectionne le bouton burger et les liens de navigation
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

// Ajoute un gestionnaire d'événement pour afficher/masquer le menu
burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerMenu.classList.toggle("open");
});
