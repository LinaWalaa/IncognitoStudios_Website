function openNav() {
  var x = document.getElementById("navbar");

  if (x.classList.contains("topnav")) {
    x.classList.remove("topnav");
    x.classList.add("sidenav");
  }

  // x.style.width = "260px"
  document.getElementById("sideMenuIcon").style.display = "none";
  document.getElementById("closeIcon").style.display = "inline-block";
}

function closeNav() {
  var x = document.getElementById("navbar");

  if (x.classList.contains("sidenav")) {
    x.classList.remove("sidenav");
    x.classList.add("topnav");
  }

  x.style.width = "0";
  document.getElementById("sideMenuIcon").style.display = "block";
}

// automatic slideshow
function showSlides() {
  var slideIndex = 0;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// not referenced by a function so I have to add it in the html file itself

// /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
// var dropdown = document.getElementsByClassName("drop_btn");
// var i;
//
// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }