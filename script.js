// Define 16 slides, each with an image path, sound path, and an animal phrase.
const slides = [
  {
    image: "Images/animal_010.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "1. Zuurak el duralal: 'I hunger for the rain.'"
  },
  {
    image: "Images/animal_013.png",
    sound: "Sound/imagined_animal_sound_5.wav",
    phrase: "2. Gruln al bok: 'The wind whispers secrets.'"
  },
  {
    image: "Images/animal_024.png",
    sound: "Sound/imagined_animal_sound_3.wav",
    phrase: "3. Kukul ku o: 'The jungle sings softly.'"
  },
  {
    image: "Images/animal_049.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "4. Nukur o le: 'Shadows dance in the rain.'"
  },
  {
    image: "Images/animal_050.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "5. Xorak xo pa: 'The earth murmurs in twilight.'"
  },
  {
    image: "Images/animal_003.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "6. Krur kura: 'Echoes of distant thunder.'"
  },
  {
    image: "Images/animal_004.png",
    sound: "Sound/imagined_animal_sound_3.wav",
    phrase: "7. Ulreth el lopa: 'Moonlight guides my roar.'"
  },
  {
    image: "Images/animal_047.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "8. Fezzik ta sa: 'Gentle winds carry my call.'"
  },
  {
    image: "Images/animal_043.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "9. Grolth oli ampinu: 'Mossy stones speak my name.'"
  },
  {
    image: "Images/animal_003.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "10. Hurraak tra la: 'I run with silent paws.'"
  },
  {
    image: "Images/animal_004.png",
    sound: "Sound/imagined_animal_sound_5.wav",
    phrase: "11. Daroon noono: 'Morning dew cloaks my presence.'"
  },
  {
    image: "Images/animal_010.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "12. Zirn la fa: 'Clouds echo my heartbeat.'"
  },
  {
    image: "Images/animal_013.png",
    sound: "Sound/imagined_animal_sound_1.wav",
    phrase: "13. Tolreth la so: 'I whisper to the ancient trees.'"
  },
  {
    image: "Images/animal_024.png",
    sound: "Sound/imagined_animal_sound_2.wav",
    phrase: "14. Wuln: pa lo 'Crickets sing in my wake.'"
  },
  {
    image: "Images/animal_043.png",
    sound: "Sound/imagined_animal_sound_5.wav",
    phrase: "15. Zeln chi ni: 'Nightfall stirs my senses.'"
  },
  {
    image: "Images/animal_049.png",
    sound: "Sound/imagined_animal_sound_4.wav",
    phrase: "16. Quenra la waq: 'The horizon trembles at dawn.'"
  }
];

// Global variable to track the current slide index
let currentSlideIndex = 0;
let slideInterval;

// Grab references to HTML elements
const slideshowImage = document.getElementById("slideshow-image");
const slideshowAudio = document.getElementById("slideshow-audio");
const phraseContainer = document.getElementById("phrase");

// Function to update the slideshow content and auto-play sound
function showSlide(index) {
  // Stop and reset any currently playing audio
  slideshowAudio.pause();
  slideshowAudio.currentTime = 0;

  // Update image, sound, and phrase based on the current slide
  const slide = slides[index];
  slideshowImage.src = slide.image;
  slideshowAudio.src = slide.sound;
  phraseContainer.textContent = slide.phrase;

  // Attempt to auto-play audio after a brief delay
  setTimeout(() => {
    slideshowAudio.play().catch(err => {
      console.log("Auto-play blocked:", err);
    });
  }, 500);
}

// Function to go to the next slide and stop previous audio
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Initialize the slideshow after user interaction
function initSlideshow() {
  showSlide(currentSlideIndex);
  // Change slides every 10 seconds
  slideInterval = setInterval(nextSlide, 10000);
}

// Wait for the user to click the "Start" button (to satisfy browser auto-play policies)
document.getElementById("startButton").addEventListener("click", function () {
  // Hide the start button
  this.style.display = "none";
  // Initialize the slideshow
  initSlideshow();
});
