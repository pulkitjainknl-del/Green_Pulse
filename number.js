document.addEventListener("DOMContentLoaded", () => {

  const counter = document.getElementById("counter");
  const target = 120859;
  let started = false;

  function runCounter() {
    let current = 0;
    const speed = 100;

    function updateCounter() {
      const increment = target / speed;

      if (current < target) {
        current += increment;
        counter.innerText = Math.floor(current).toLocaleString() + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    }

    updateCounter();
  }


  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      runCounter();
      started = true;
    }
  });

  observer.observe(counter);

});