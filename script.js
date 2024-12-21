// Smooth Scroll Animation for Hero Section
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero-text');
    const scrollPosition = window.scrollY;

    // Fade and slide effect
    if (scrollPosition > 50) {
        heroText.style.opacity = 1 - scrollPosition / 200;
        heroText.style.transform = `translateY(${scrollPosition / 4}px)`; // Adjust the sliding effect
    } else {
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
    }
});

// Mobile Navigation Toggle 
// -->  Highlight starts here  <--
const menuIcon = document.getElementById('menuIcon'); // This line needs to be updated
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});
// -->  Highlight ends here  <--

// Modal Functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");

// Get all grid items
const gridItems = document.querySelectorAll(".grid-item");

// Loop through grid items and add click event
gridItems.forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description"); // Get the description attribute

        openModal(img, title, description);
    });
});

// Function to open the modal and display the image and description
function openModal(image, title, description) {
    modal.style.display = "block"; // Show the modal
    modalImg.src = image.src; // Set the source of the modal image

    // Display title and description in the modal caption
    modalCaption.innerHTML = `<strong>${title}</strong><br>${description}`;

    // Reset any custom styles before applying new ones
    modalImg.style.position = "absolute"; // Ensure the image is absolutely positioned
    modalImg.style.width = "auto"; // Set a default width for all images
    modalImg.style.height = "auto"; // Ensure height resets
    modalCaption.className = "caption"; // Reset all specific styles

    // Apply specific styles based on the image title
    switch (title) {
        case "Bhairav":
            modalImg.style.width = "60vw"; // Resize the Bhairav image
            modalImg.style.height = "80vh"; // Using viewport height
            modalImg.style.top = "11vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('bhairav-description'); // Add class for Bhairav description
            break;

        case "Red Mustang":
            modalImg.style.height = "80vh"; // Resize the Red Mustang image
            modalImg.style.top = "11vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('red-mustang-description');
            break;

        case "Black Mustang":
            modalImg.style.height = "90vh"; // Resize the Black Mustang image
            modalImg.style.top = "10vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('black-mustang-description');
            break;

        case "Stupa":
            modalImg.style.width = "40vw"; // Resize the Stupa image
            modalImg.style.height = "62vh"; // Using viewport height
            modalImg.style.top = "15vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('stupa-description');
            break;

        case "Kuttumath":
            modalImg.style.width = "50vw"; // Resize the Kutumath image
            modalImg.style.height = "80vh"; // Using viewport height
            modalImg.style.top = "11vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('kuttumath-description');
            break;

        case "Goats":
            modalImg.style.height = "26vh"; // Resize the Goats image
            modalImg.style.width = "50vw"; // Set width for Goats image
            modalImg.style.top = "36vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('goats-description');
            break;

        case "Stucoo":
            modalImg.style.height = "65vh"; // Resize the Stucoo image
            modalImg.style.width = "30vw"; // Set width for Stucoo image
            modalImg.style.top = "11vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('stucoo-description');
            break;

        case "Raddish":
            modalImg.style.height = "65vh"; // Resize the Raddish image
            modalImg.style.width = "68vw"; // Set width for Raddish image
            modalImg.style.top = "11vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('raddish-description');
            break;

        case "Bells":
            modalImg.style.height = "90vh"; // Resize the Bells image
            modalImg.style.top = "10vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('bells-description');
            break;

        case "Matsyendra Nath":
            modalImg.style.height = "92vh"; // Resize the Matsyendra Nath image
            modalImg.style.top = "4.5vh"; // Adjust position using vh
            modalImg.style.left = "2.8vw"; // Adjust position using vw
            modalCaption.classList.add('matsyendra-nath-description');
            break;

        default:
            // Default case if title doesn't match
            modalImg.style.height = "auto"; // Reset height
            modalImg.style.width = "auto"; // Reset width
            modalImg.style.top = "15vh"; // Default top position in viewport height
            modalImg.style.left = "5vw"; // Default left position in viewport width
            break;
    }
}

if (window.innerWidth <= 600 && modalImg.clientHeight > window.innerHeight * 0.8) {
    modalImg.style.maxHeight = "80vh"; 
  }


// Close modal when clicking the close button
modalClose.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
});

// Close modal when clicking anywhere outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});

// Lazy Loading for Images
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});