import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.priceText = "€" + product.price.toFixed(2);
    this.imageSrc = "/assets/images/products/" + product.image;

    const item = `
    <div class="card">
        <div class="card__top">
            <img src="${this.imageSrc}" class="card__image" alt="product">
            <span class="card__price">${this.priceText}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    </div>
    `;

    this.elem = createElement(item);
    this.button = this.elem.querySelector(".card__button");
    this.button.addEventListener("click", () => {
      const event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
    });
  }
}
