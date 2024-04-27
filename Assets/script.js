var menuBtn = document.querySelector("#buttons");
var nav = document.querySelector("#menu");
var flag = 1;
menuBtn.addEventListener("click", () => {
  if (flag === 1) {
    menuBtn.style.transform = "rotate(90deg)";
    nav.style.left = "20px";
    flag = 0;
  } else {
    nav.style.left = "-999px";
    menuBtn.style.transform = "rotate(0deg)";
    flag = 1;
  }
});

gsap.from("#hero-img", {
  opacity: 0,
  duration: 1,
  y: 100,
  delay: 0.4,
});
gsap.from("li", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0.4,
});
gsap.from("#logo h1", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0.4,
});
gsap.from("#hero-data h1", {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 0.4,
});
gsap.from("#hero-data p", {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 0.4,
});
gsap.from("#hero-btns", {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 0.4,
});
gsap.from("#care-top h1", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0,
  scrollTrigger: {
    trigger: "#care-top h1",
    scroller: "body",
    start: "bottom 70%",
    end: "bottom 50%",
  },
});
gsap.from("#care-img", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0,
  scrollTrigger: {
    trigger: "#care-top h1",
    scroller: "body",
    start: "bottom 70%",
    end: "bottom 50%",
  },
});
gsap.from("#care-box", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0,
  scrollTrigger: {
    trigger: "#care-top h1",
    scroller: "body",
    start: "bottom 70%",
    end: "bottom 50%",
  },
});
gsap.from("#prd-top h1", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0,
  scrollTrigger: {
    // markers: true,
    trigger: "#prd-top h1",
    scroller: "body",
    start: "bottom 90%",
    end: "bottom 50%",
  },
});
gsap.from("#prd-box", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0,
  scrollTrigger: {
    // markers: true,
    trigger: "#prd-box",
    scroller: "body",
    start: "bottom 110%",
    end: "bottom 50%",
  },
});
gsap.from("#cnt-wrapper", {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 0.1,
  delay: 0,
  scrollTrigger: {
    // markers: true,
    trigger: "#cnt-wrapper",
    scroller: "body",
    start: "top 90%",
    end: "bottom 90%",
  },
});
// gsap.from("#footer", {
//   opacity: 0,
//   duration: 1,
//   y: 100,
//   stagger: 0.1,
//   delay: 0,
//   scrollTrigger: {
//     // markers: true,
//     trigger: "#footer-dets",
//     scroller: "body",
//     start: "top 100%",
//     end: "bottom 40%",
//   },
// });
