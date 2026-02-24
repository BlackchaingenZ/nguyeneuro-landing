const elements = document.querySelectorAll('.fade');

function reveal() {
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

function openModal(){
  document.getElementById("installModal").style.display = "block";
}

function closeModal(){
  document.getElementById("installModal").style.display = "none";
}

window.onclick = function(event) {
  let modal = document.getElementById("installModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}