const images = [
    'img/img1.jpeg',
    'img/img2.jpeg',
    'img/img3.jpeg',  // Add your image paths here
    'img/img4.jpeg',  
    'img/img5.jpeg',  
    'img/img6.jpeg',  
    'img/img7.jpeg',  
    'img/img8.jpeg',  
    'img/img9.jpeg',  
    'img/img10.jpeg' 
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const thumbnails = document.querySelectorAll('.thumbnail');

function updateImage(index) {
    galleryImage.src = images[index];
    currentIndex = index;
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});

// Event listeners for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateImage(index);
    });
});