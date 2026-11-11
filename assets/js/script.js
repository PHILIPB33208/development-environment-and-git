const messageButton = document.querySelector("#message-button");
const message = document.querySelector("#message");

messageButton.addEventListener("click", () => {
  message.textContent = "Thanks for visiting my semester project!";
});
