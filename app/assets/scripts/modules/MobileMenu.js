class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
<<<<<<< HEAD
=======
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader =document.querySelector(".site-header")
>>>>>>> reveal-on-scroll
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }
<<<<<<< HEAD
    toggleTheMenu() {
        console.log("Hooray - the icon was clicked.")
=======

    toggleTheMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
>>>>>>> reveal-on-scroll
    }
}

export default MobileMenu