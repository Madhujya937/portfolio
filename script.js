// script.js

// Smooth scroll to sections when nav links are clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent jump
  
      const targetId = this.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
  
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: Show an alert when someone clicks your email
  const email = document.querySelector('#contact p');
  if (email) {
    email.addEventListener('click', () => {
      alert("You clicked my email! Feel free to send a message.");
    });
  }
  document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
