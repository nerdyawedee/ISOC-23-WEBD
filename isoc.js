
// sticky navbar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// function to Toggle Light and Dark Mode 
var icon = document.getElementById("icon");
    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src = "Our Gallery/sun (1).png";
      }
      else{
        icon.src = "Our Gallery/moon.png";
      }
    }
    
let navbarMenu = document.querySelector('.navbar-menu');
let dropdownIsOpen = false;

// Handle dropdown menu toggle
navbarMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown-toggler')) {
    let target = document.querySelector(`#${event.target.dataset.dropdown}`);

    if (target) {
      if (target.classList.contains('show')) {
        target.classList.remove('show');
        dropdownIsOpen = false;
      } else {
        target.classList.add('show');
        dropdownIsOpen = true;
      }
    }
  }
});

// Handle closing dropdowns if a user clicks outside
document.body.addEventListener('click', (event) => {
  if (dropdownIsOpen) {
    navbarMenu.querySelectorAll('.dropdown').forEach((dropdown) => {
      let targetIsDropdown = dropdown == event.target;
      let clickedOnDropdownToggle = event.target.classList.contains('dropdown-toggler');

      if (clickedOnDropdownToggle) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
});

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (!navbarMenu.classList.contains('active')) {
      navbarMenu.classList.add('active');
    } else {
      navbarMenu.classList.remove('active');
    }
  });
}

handleSmallScreens();
