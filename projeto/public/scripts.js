document.addEventListener("htmx:afterOnLoad", function (evt) {
  if (evt.detail.requestConfig.verb === "POST") {
    document.querySelector("#todo-form").reset();
  }
});
