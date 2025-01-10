// ========== SCROLL TO TOP BUTTON ========== //
var scrollToTopBtn = document.getElementById("back_to_top_btn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 || 
    document.documentElement.scrollTop > 20
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// ========== THEME TOGGLER ========== //
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// ========== YEAR IN FOOTER ========== //
document.getElementById('year').textContent = new Date().getFullYear();

// ========== COLLAPSIBLE CONTACT FORM ========== //
const toggleContactFormBtn = document.getElementById('toggleContactFormBtn');
const contactFormContainer = document.getElementById('contactFormContainer');
const thankYouMessage = document.getElementById('thankYouMessage');
const toggleArrow = document.querySelector('.toggle-arrow');

// Keep track of open/closed state
let formOpen = false;

toggleContactFormBtn.addEventListener('click', () => {
  formOpen = !formOpen;
  // Flip arrow icon
  toggleArrow.textContent = formOpen ? 'expand_less' : 'expand_more';

  // If opening, set a large max-height + fade in
  if (formOpen) {
    contactFormContainer.style.maxHeight = '1000px';
    contactFormContainer.style.opacity = '1';
    thankYouMessage.style.display = 'none';
  } else {
    contactFormContainer.style.maxHeight = '0';
    contactFormContainer.style.opacity = '0';
  }
});

// ========== FORM SUBMISSION ========== //
document.getElementById("emailForm").addEventListener("submit", function(event) {
  // Optionally handle it manually:
  // event.preventDefault();

  let form = event.target;
  // Hide the form fields
  form.style.display = 'none';
  
  // Show the "Thank You" message
  thankYouMessage.style.display = 'block';
});

// ========== SMOOTH SCROLL & AUTO-OPEN FORM FOR CONTACT NAV LINK ========== //
const contactNavLink = document.getElementById('contactNavLink');
if (contactNavLink) {
  contactNavLink.addEventListener('click', (e) => {
    e.preventDefault(); // prevent jump
    // Scroll smoothly to #contactSection
    document.querySelector('#contactSection').scrollIntoView({
      behavior: 'smooth'
    });
    // If form is not open, open it
    if (!formOpen) {
      toggleContactFormBtn.click();
    }
  });
}
