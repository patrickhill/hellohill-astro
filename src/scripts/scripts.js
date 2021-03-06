const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let hoverEls = document.querySelectorAll(".hover-3d");
hoverEls.forEach((hoverEl) => {
  let btnInterval;
  var targetEl = hoverEl.querySelector(".hover-3d-target");
  hoverEl.addEventListener("mousemove", (e) => {
    var rect = targetEl.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let elWidth = rect.width;
    let elHeight = rect.height;
    let rotation = 10;
    let scaleY = scale(x, 0, elWidth, -rotation, rotation);
    let scaleX = scale(y, 0, elHeight, rotation, -rotation);
    targetEl.style.transform = `rotateY(${scaleY}deg) rotateX(${scaleX}deg) translateZ(0)`;
  });
  hoverEl.addEventListener("mouseleave", (e) => {
    targetEl.style.transform = `none`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let scrollItems = document.querySelectorAll(".lazy-load");
  let intersectionObserverSupported =
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype;

  if (intersectionObserverSupported) {
    let options = {
      root: null,
      rootMargin: "0px 0px 50%",
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
            };
          } else {
            item.addEventListener("load", function () {
              item.parentElement.classList.remove("loading");
            });
          }

          observer.unobserve(item);
        }
      });
    };
    let observer = new IntersectionObserver(isIntersecting, options);
    scrollItems.forEach((item) => {
      item.parentElement.classList.add("bg-white");
      item.parentElement.classList.add("loading");
      observer.observe(item);
    });
  }
});
