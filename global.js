const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll(".image-slider img"); // ⬅ 修正這裡
const gallery = document.querySelector(".gallery");

// intersection observer：偵測圖片是否在畫面中
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetIndex = entry.target.dataset.index;
      if (targetIndex === undefined) return;

      if (entry.isIntersecting) {
        indicators.forEach((dot) => dot.classList.remove("active"));
        indicators[targetIndex].classList.add("active");
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

// 點圓點 → 滾動到對應圖片
indicators.forEach((element, index) => {
  element.addEventListener("click", () => {
    images[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  });
});

// 啟用觀察
images.forEach((element) => {
  observer.observe(element);
});

// 初始設 active（可選）
indicators[0].classList.add("active");
