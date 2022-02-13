
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let hoverEls = document.querySelectorAll(".hover-3d");
hoverEls.forEach((hoverEl) => {
  let btnInterval;
  var targetEl = hoverEl.querySelector(".hover-3d-target");
  hoverEl.addEventListener("mousemove", (e) => {
    var rect = targetEl.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    elWidth = rect.width;
    elHeight = rect.height;
    rotation = 10;
    scaleY = scale(x, 0, elWidth, -rotation, rotation);
    scaleX = scale(y, 0, elHeight, rotation, -rotation);
    targetEl.style.transform = `rotateY(${scaleY}deg) rotateX(${scaleX}deg) translateZ(0)`;
  });
  hoverEl.addEventListener("mouseleave", (e) => {
    targetEl.style.transform = `none`;
  });
});

