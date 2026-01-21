function initCarousel() {
  const inner = document.querySelector(".carousel__inner");
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const slide = document.querySelector(".carousel__slide");
  const slideWidth = slide.offsetWidth;
  const slidesCount = 4;
  let currentIndex = 0;

  updateCarousel();

  function updateCarousel() {
    inner.style.transform = `translateX(${slideWidth * -currentIndex}px)`;
    arrowRight.style.display = "";
    arrowLeft.style.display = "";
    if (currentIndex === 0) arrowLeft.style.display = "none";
    if (currentIndex === slidesCount - 1) arrowRight.style.display = "none";
  }

  arrowRight.addEventListener("click", () => {
    if (currentIndex < slidesCount - 1) currentIndex++;
    updateCarousel();
  });

  arrowLeft.addEventListener("click", () => {
    if (currentIndex > 0) currentIndex--;
    updateCarousel();
  });
}
