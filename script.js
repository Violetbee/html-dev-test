document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("product-list");
  const sl = document.getElementById("slider");

  let pos = { left: 0, x: 0, y: 0 };

  const sliderButtonOnClickHandler = (e) => {
    pos = {
      left: el.scrollBy(25, 0),
    };
  };

  const mouseMoveHandler = (e) => {
    // Avoid copy while mouse down
    e.preventDefault();

    // Calculates pixels
    const tx = e.clientX - pos.x;

    // Scroll the element
    el.scrollLeft = pos.left - tx;
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  const mouseDownHandler = (e) => {
    pos = {
      left: el.scrollLeft,
      // Current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  sl.addEventListener("click", sliderButtonOnClickHandler);
  el.addEventListener("mousedown", mouseDownHandler);
});
