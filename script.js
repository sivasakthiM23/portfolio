// Scroll animation script

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

}
//  resume button click alert
const resumeBtn = document.querySelector('.resume-btn');

if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    console.log('Resume download started!');
    // alert('Downloading resume...'); // Uncomment if you want popup
  });
}
// Contact form confirmation message (for mailto)
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function () {
    alert("Opening your email app to send the message. Please confirm and send!");
  });
}
// Typed.js effect for Hero Section
const typed = new Typed("#typed-text", {
  strings: [
    "Full Stack Developer",
    "Data Analytics",
    "Python & Java Enthusiast",
    "Tech Explorer",
  ],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
});
