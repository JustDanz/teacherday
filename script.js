// Vanta.js Birds Background
VANTA.BIRDS({
  el: ".hero", // Element that will have the background effect
  backgroundColor: 0x20232a, // Background color (dark)
  color1: 0xff6f61, // First bird color (light coral)
  color2: 0x4caf50, // Second bird color (green)
  quantity: 4, // Number of birds
  birdSize: 1.5, // Size of the birds
  wingSpan: 20, // Wing span of the birds
});

// GSAP Animasi Teks
gsap.from("#title", { y: -50, opacity: 0, duration: 1 });
gsap.from("#subtitle", { y: 50, opacity: 0, duration: 1.5, delay: 0.5 });

// Tombol Rayakan Bersama (Celebrate button functionality)
document.getElementById("celebrate").addEventListener("click", function () {
  Swal.fire({
    title: "Tulis Pesan untuk Saya", // Title of the popup
    input: "text", // Input type (text field)
    inputPlaceholder: "Tulis pesan spesial Anda di sini...", // Placeholder text
    showCancelButton: true, // Show cancel button
    confirmButtonText: "Kirim", // Confirm button text
    cancelButtonText: "Batal", // Cancel button text
    inputValidator: (value) => {
      if (!value) {
        return "Pesan tidak boleh kosong!"; // Validation message if input is empty
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const message = result.value;
      const whatsappLink = `https://api.whatsapp.com/send?phone=nowakalian&text=${encodeURIComponent(
        "Pesan untuk Dani: " + message
      )}`; // Create WhatsApp link with the message
      window.open(whatsappLink, "_blank"); // Open WhatsApp with the message
    }
  });
});

// Zoom Effect for Images
const zoomableImages = document.querySelectorAll(".zoomable"); // Select all zoomable images
const zoomModal = document.createElement("div"); // Create the zoom modal
zoomModal.id = "zoom-modal"; // Set the ID for the modal
document.body.appendChild(zoomModal); // Append the modal to the body

// Create an image element inside the modal
const zoomedImage = document.createElement("img");
zoomedImage.id = "zoomed-image"; // Set the ID for the zoomed image
zoomModal.appendChild(zoomedImage); // Append the image to the modal

// Add event listeners to each zoomable image
zoomableImages.forEach((image) => {
  image.addEventListener("click", function () {
    openModal(image); // Open modal when image is clicked
  });
});

// Function to open the modal and display the clicked image
function openModal(image) {
  const modal = document.getElementById("zoom-modal");
  const zoomedImage = document.getElementById("zoomed-image");
  zoomedImage.src = image.src; // Set the src of the zoomed image to the clicked image's src
  modal.style.display = "flex"; // Show the modal
}

// Function to close the modal when clicked outside the image
zoomModal.addEventListener("click", function (event) {
  if (event.target === zoomModal) {
    closeModal(); // Close the modal if the user clicks outside the image
  }
});

// Function to hide the zoom modal
function closeModal() {
  const modal = document.getElementById("zoom-modal");
  modal.style.display = "none"; // Hide the modal
}
