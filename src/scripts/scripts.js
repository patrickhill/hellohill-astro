
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

document.addEventListener("DOMContentLoaded", () => {
  let scrollItems = document.querySelectorAll(".lazy-load");
  let intersectionObserverSupported = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;

  if (intersectionObserverSupported) {
    let options = {
      root: null,
      rootMargin: "0px 0px 10%",
      threshold: 0,
    };
    let isIntersecting = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let item = entry.target;
          item.setAttribute("src", item.getAttribute("data-src"));

          if (item.nodeName === "VIDEO") {
            item.oncanplay = function () {
              item.parentElement.classList.remove("loading");
              item.classList.remove("blur");
            };
          } else {
            item.addEventListener("load", function () {
              item.parentElement.classList.remove("loading");
              item.classList.remove("blur");
            });
          }

          observer.unobserve(item);
        }
      });
    };
    let observer = new IntersectionObserver(isIntersecting, options);
    scrollItems.forEach((item) => {

      item.setAttribute("data-src", item.getAttribute("src"));
      item.removeAttribute("src");

      item.classList.add("blur");
      item.parentElement.classList.add("loading");

      observer.observe(item);
    });
  }
});
