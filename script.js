document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".cylinder__inner img");
  const totalImages = images.length;
  const angle = 360 / totalImages;

  const img = document.querySelector(".cylinder__inner img");
  let imgWidth = window.getComputedStyle(img, null).getPropertyValue("width");

  images.forEach((img, index) => {
    img.style.transform = `rotateY(${
      index * angle
    }deg) translateZ(${imgWidth})`;
  });

  setTimeout(() => {
    const cylinderInner = document.querySelector(".cylinder__inner");
    cylinderInner.style.animation = "none"; // Stop the rotation animation

    images.forEach((img, index) => {
      img.style.transform = `rotateY(360deg) translateZ(0)`;
      img.style.position = `relative`;
    });
  }, 3000);
});
