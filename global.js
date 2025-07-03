const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll(".image-slider img");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetIndex = entry.target.dataset.index;
      if (targetIndex === undefined) return;

      if (entry.isIntersecting) {
        indicators.forEach((dot) => dot.classList.remove("active"));
        indicators[targetIndex].classList.add("active");
        currentIndex = Number(targetIndex); // 更新目前索引
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

// 初始索引值
let currentIndex = 0;

// 共用函式：切換到指定圖片
function goToImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  images[index].scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
}

// 點圓點 → 切換圖片
indicators.forEach((element, index) => {
  element.addEventListener("click", () => {
    goToImage(index);
  });
});

// 左右箭頭
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

if (leftArrow && rightArrow) {
  leftArrow.addEventListener("click", () => {
    goToImage(currentIndex - 1);
  });

  rightArrow.addEventListener("click", () => {
    goToImage(currentIndex + 1);
  });
}

// 啟用 observer
images.forEach((element) => {
  observer.observe(element);
});

// 初始化
indicators[0].classList.add("active");
