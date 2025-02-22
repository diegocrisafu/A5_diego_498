// Define 16 slides, each with an image path, sound path, and an animal phrase.
const slides = [
  {
    image: "Images/animal_010.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "1. Zuurak: 'I hunger for the rain.'"
  },
  {
    image: "Images/animal_013.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "2. Gruln: 'The wind whispers secrets.'"
  },
  {
    image: "Images/animal_024.png",
    sound: "Sound/imagined_animal_sound_3.wav",
    phrase: "3. Kukul: 'The jungle sings softly.'"
  },
  {
    image: "Images/animal_049.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "4. Nukur: 'Shadows dance in the rain.'"
  },
  {
    image: "Images/animal_050.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "5. Xorak: 'The earth murmurs in twilight.'"
  },
  {
    image: "Images/animal_003.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "6. Krura: 'Echoes of distant thunder.'"
  },
  {
    image: "Images/animal_004.png",
    sound: "Sound/imagined_animal_sound_3.wav",
    phrase: "7. Ulreth: 'Moonlight guides my roar.'"
  },
  {
    image: "Images/animal_047.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "8. Fezzik: 'Gentle winds carry my call.'"
  },
  {
    image: "Images/animal_043.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "9. Grolth: 'Mossy stones speak my name.'"
  },
  {
    image: "Images/animal_003.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "10. Hurraak: 'I run with silent paws.'"
  },
  {
    image: "Images/animal_004.png",
    sound: "Sound/imagined_animal_sound_3.wav",
    phrase: "11. Daroon: 'Morning dew cloaks my presence.'"
  },
  {
    image: "Images/animal_010.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "12. Zirn: 'Clouds echo my heartbeat.'"
  },
  {
    image: "Images/animal_013.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "13. Tolreth: 'I whisper to the ancient trees.'"
  },
  {
    image: "Images/animal_024.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "14. Wuln: 'Crickets sing in my wake.'"
  },
  {
    image: "Images/animal_043.png",
    sound: "Sound/imagined_animal_sound_3.wav",
    phrase: "15. Zeln: 'Nightfall stirs my senses.'"
  },
  {
    image: "Images/animal_049.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "16. Quenra: 'The horizon trembles at dawn.'"
  }
];

// Keep track of the current slide index
let currentSlideIndex = 0;
let slideInterval;

// Grab references to HTML elements
const slideshowImage = document.getElementById("slideshow-image");
const slideshowAudio = document.getElementById("slideshow-audio");
const phraseContainer = document.getElementById("phrase");

// Function to update the slideshow content
function showSlide(index) {
  // Stop and reset any previously playing audio
  slideshowAudio.pause();
  slideshowAudio.currentTime = 0;

  // Load the new slide
  const slide = slides[index];
  slideshowImage.src = slide.image;
  slideshowAudio.src = slide.sound;
  phraseContainer.textContent = slide.phrase;

  // Attempt to auto-play audio
  // Note: Some browsers block auto-play unless user interacts with the page
  slideshowAudio.load();
  slideshowAudio.play().catch(err => {
    console.log("Auto-play was blocked or didn't work:", err);
  });
}

// Function to go to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Initialize the slideshow
function initSlideshow() {
  showSlide(currentSlideIndex);
  // Change slides every 10 seconds
  slideInterval = setInterval(nextSlide, 10000);
}

// Start the slideshow once the page loads
window.addEventListener("load", initSlideshow);
