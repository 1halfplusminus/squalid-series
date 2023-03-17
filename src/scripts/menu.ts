// Define the behaviour for our new type of HTML element.
class AstroMenu extends HTMLElement {
  constructor() {
    super();
    const buttons = this.querySelectorAll(".hamburger");
    // Handle clicks on each button.
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this
          ?.querySelector(".nav-links")
          ?.classList.toggle("expanded");
      });
    });
  }
}

// Tell the browser to use our AstroHeart class for <astro-heart> elements.
customElements.define("astro-menu", AstroMenu);
