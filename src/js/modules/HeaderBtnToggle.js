class HeaderBtnToggle {
  constructor() {
    this.burgerButtons = document.querySelectorAll('.js-header-toggle');
    this.body = document.body;

    this.burgerButtons.forEach((button) => {
      const headerNav = button.closest('.header').querySelector('.header__dropdown');
      const overlay = button.closest('.header').querySelector('.js-header-toggle-close');

      button.addEventListener('click', () => this.toggleMenu(button, headerNav, overlay));

      if (overlay) {
        overlay.addEventListener('click', () => this.closeMenu(button, headerNav, overlay));
      }
    });
  }
  
  toggleMenu(button, headerNav, overlay) {
    button.classList.toggle('is-active');
    this.body.classList.toggle('is-menu-opened');
    headerNav.classList.toggle('is-show');
    overlay.classList.toggle('is-visible');
  }

  closeMenu(button, headerNav, overlay) {
    button.classList.remove('is-active');
    this.body.classList.remove('is-menu-opened');
    headerNav.classList.remove('is-show');
    overlay.classList.remove('is-visible');
  }
}

export default HeaderBtnToggle;