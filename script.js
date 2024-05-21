
document.addEventListener("DOMContentLoaded", function() {
  // Get all the links
  var links = document.querySelectorAll("nav ul li a");

  // Add click event listeners to each link
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      // Remove the active class from all links
      links.forEach(function(item) {
        item.classList.remove("active-link");
      });

      // Add the active class to the clicked link
      this.classList.add("active-link");
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the phone icon element
  var phoneIcon = document.getElementById("phone-icon");

  // Add click event listener to the phone icon
  phoneIcon.addEventListener("click", function(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Copy the mobile number to the clipboard
    var mobileNumber = "+639363453116"; // Replace this with your actual mobile number
    navigator.clipboard.writeText(mobileNumber)
      .then(function() {
        // Alert the user that the number has been copied
        alert("Mobile number copied to clipboard: " + mobileNumber);
      })
      .catch(function(error) {
        console.error("Unable to copy mobile number: ", error);
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
const hamburgerMenu = document.getElementById("hamburger-menu");
const navToggle = document.getElementById("nav-toggle");
const navUl = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function() {
// Check if screen width is greater than 1200px
if (window.innerWidth > 1200) {
return; // Stop execution if screen width is above 1200px
}

if (navUl.style.display === "none" || navUl.style.display === "") {
navUl.style.display = "flex";
} else {
navUl.style.display = "none";
}
});
});

document.addEventListener("DOMContentLoaded", function() {
const navUl = document.querySelector("nav ul");

// Check screen width on page load
if (window.innerWidth > 1200) {
navUl.style.display = "flex";
}

// Check screen width on window resize
window.addEventListener("resize", function() {
if (window.innerWidth > 1200) {
navUl.style.display = "flex";
} else {
navUl.style.display = "none";
}
});
});

