document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Here you can handle the form data as needed (e.g., store it, validate it)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simulate a successful submission
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Show success message
  document.getElementById("successMessage").style.display = "block";

  // Optionally, reset the form
  document.getElementById("contactForm").reset();
});
