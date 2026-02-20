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