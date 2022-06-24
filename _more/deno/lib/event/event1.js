const target = new EventTarget();
target.addEventListener("foo", (event) => {
  console.log(event);
});
target.dispatchEvent(new Event("foo"));