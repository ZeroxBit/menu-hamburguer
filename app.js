const menu = document.getElementById("hamburger")

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.getElementById( "menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);