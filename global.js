const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll("img");
const gallery = document.querySelector(".gallery");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetIndex = entry.target.dataset.index;
      if (entry.isIntersecting) {
        indicators[targetIndex].classList.add("active");
      } else {
        indicators[targetIndex].classList.remove("active");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

indicators.forEach((element, index) => {
  element.addEventListener("click", () => {
    images[index].scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});

images.forEach((element) => {
  observer.observe(element);
});
