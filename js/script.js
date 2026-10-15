const input = document.querySelector(".form-input");
const button = document.querySelector(".form-btn");

button.addEventListener("click", () => {
  const inputEdited = input.value
    .split("\n")
    .map((link) => link.trim())
    .filter((link) => link !== "");

  inputEdited.forEach((link) => {
    window.open(link, "_blank");
  });

  window.focus();
});
