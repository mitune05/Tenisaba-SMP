window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("コピーしました: " + text);
  });
}

function showToast(message) {
  const toast = document.createElement("div");

  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "rgba(0,0,0,0.85)";
  toast.style.color = "#00f0ff";
  toast.style.padding = "10px 15px";
  toast.style.border = "1px solid #00f0ff";
  toast.style.borderRadius = "8px";
  toast.style.zIndex = "9999";

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2000);
}