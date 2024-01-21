var rect = document.querySelector("#center");
if (rect) {
  rect.addEventListener("mousemove", function (details) {
    // console.log(details);
    // console.log(rect.getBoundingClientRect())
    const rectLocation = rect.getBoundingClientRect();
    const insideRectVal = details.clientX - rectLocation.left;
    let center = rectLocation.width / 2;

    if (insideRectVal < center) {
      //   console.log(gsap.utils.mapRange(0, center, 255, 0, insideRectVal));
      let redColor = gsap.utils.mapRange(0, center, 255, 0, insideRectVal);
      gsap.to(rect, {
        backgroundColor: `rgb(${redColor},0,0)`,
        ease: Power4,
      });
      // console.log("left");
    } else {
      //   console.log(gsap.utils.mapRange(center, 0, 255, 0, insideRectVal));
      let greenColor = gsap.utils.mapRange(
        center,
        center * 2,
        0,
        255,
        insideRectVal
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0,${greenColor},0)`,
        ease: Power4,
      });
      //   console.log("right");
    }
  });
}

rect.addEventListener("mouseleave", function (details) {
  gsap.to(rect, {
    backgroundColor: `rgb(0,0,150)`,
    ease: Power4,
  });
});
