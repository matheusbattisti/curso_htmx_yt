document.body.addEventListener("htmx:configRequest", function (event) {
  const form = event.target;
  const username = form.querySelector("#username").value;
  const errorDiv = form.querySelector("#username-error");

  if (username.length < 3) {
    event.preventDefault();
    errorDiv.innerText = "O nome de usuário deve ter pelo menos 3 caracteres.";
  } else {
    errorDiv.innerText = "";
  }
});
