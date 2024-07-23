const btn = document.getElementById("not")
const msg = document.getElementById("not-allowed")

const notAllowedDiv = document.getElementById("not-allowed");
function handleNo() {
    notAllowedDiv.style.display = 'block';
    btn.setAttribute("hidden", "hidden")
}