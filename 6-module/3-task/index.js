import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentIndex = 0;

    this.render();

    this.initEventListeners();
    this.update();
  }

  render() {
    this.elem = createElement(`<div class="carousel"></div>`);
    this.arrowRight =
      createElement(`<div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>`);
    this.arrowLeft =
      createElement(`<div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`);
    this.inner = createElement(`<div class="carousel__inner"></div>`);

    this.elem.append(this.arrowRight, this.arrowLeft, this.inner);
    this.renderSlides();

    return this.elem;
  }

  renderSlides() {
    this.inner.innerHTML = "";
    this.slides.forEach((slide) => {
      const slideElem = this.createSlide(slide);
      this.inner.append(slideElem);
    });

    this.firstSlide = this.inner.querySelector(".carousel__slide");
  }

  createSlide(slide) {
    const template = `
    <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
    </div>
      `;

    return createElement(template);
  }

  update() {
    if (this.slides.length <= 1) {
      this.arrowRight.style.display = "none";
      this.arrowLeft.style.display = "none";
      return;
    }

    if (!this.firstSlide) return;

    const slideWidth = this.firstSlide.offsetWidth;

    this.arrowRight.style.display = "";
    this.arrowLeft.style.display = "";

    if (this.currentIndex === 0) this.arrowLeft.style.display = "none";
    if (this.currentIndex === this.slides.length - 1)
      this.arrowRight.style.display = "none";

    this.inner.style.transform = `translateX(${-slideWidth * this.currentIndex}px)`;
  }

  initEventListeners() {
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest(".carousel__button")) {
        const slideId = event.target.closest(".carousel__slide").dataset.id;
        const customClick = new CustomEvent("product-add", {
          detail: slideId,
          bubbles: true,
        });
        this.elem.dispatchEvent(customClick);
      } else if (
        event.target.closest(".carousel__arrow_right") &&
        this.currentIndex < this.slides.length - 1
      ) {
        this.currentIndex += 1;
        this.update();
      } else if (
        event.target.closest(".carousel__arrow_left") &&
        this.currentIndex > 0
      ) {
        this.currentIndex -= 1;
        this.update();
      }
    });
  }
}
