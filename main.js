// Toggle Navigation Menu
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");

  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
});

// Example Event Listener for Future Use
document.addEventListener("DOMContentLoaded", function() {
  const exampleButton = document.querySelector("#exampleButton");

  if (exampleButton) {
    exampleButton.addEventListener("click", function() {
      alert("Button clicked!");
    });
  }
});

// Placeholder Function to Load Videos
function loadVideos() {
  // Example code to load videos dynamically
  const videoSection = document.querySelector("#videoSection");
  if (videoSection) {
    videoSection.innerHTML = "<p>Loading videos...</p>";
    // Add your video loading logic here
  }
}

// Full-Screen Functionality
function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Event Listener for Full-Screen Button
document.addEventListener("DOMContentLoaded", function() {
  const fullScreenButton = document.querySelector("#fullScreenButton");
  const videoElement = document.querySelector("video");

  if (fullScreenButton && videoElement) {
    fullScreenButton.addEventListener("click", function() {
      toggleFullScreen(videoElement);
    });
  }
});
