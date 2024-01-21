document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);

  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
// delegation is a pattern that efficiently handles the events. adding even to parent instead to every single elements

// benefits
// saves meemory by calling once also mitigates the performance bottleneck
// writing lesss code
// dom manipulation

// limitations
// all not bubbled up - scroll, blur, focus, resizing
// avoid using stoppropagation()
