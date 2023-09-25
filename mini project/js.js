// JavaScript for form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Implement your form validation logic here
    // You can check if the fields are not empty and meet the required criteria
    // Display error messages if needed
});

// JavaScript for banner auto-slide
const banner = document.getElementById('banner');
const bannerImages = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image URLs
let currentImageIndex = 0;

function changeBannerImage() {
    banner.style.backgroundImage = `url(${bannerImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
}

setInterval(changeBannerImage, 5000); // Change image every 5 seconds
