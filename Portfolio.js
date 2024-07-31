document.addEventListener('DOMContentLoaded', () => {
    const mainWindow = document.querySelector('.main-window');
    const folderWindow = document.querySelector('.folder-window');
    const photographyWindow = document.querySelector('.photography-window');
    const musicianWindow = document.querySelector('.musician-window');
    const businessWindow = document.querySelector('.business-window');
    const travelWindow = document.querySelector('.travel-window');
    const logosWindow = document.querySelector('.logos-window');
    const socialMediaWindow = document.querySelector('.social-media-window');
  
    const showWindow = (windowToShow) => {
      mainWindow.classList.add('hidden');
      folderWindow.classList.add('hidden');
      photographyWindow.classList.add('hidden');
      musicianWindow.classList.add('hidden');
      businessWindow.classList.add('hidden');
      travelWindow.classList.add('hidden');
      logosWindow.classList.add('hidden');
      socialMediaWindow.classList.add('hidden');
      windowToShow.classList.remove('hidden');
    };
  
    document.querySelector('.webpreview-icon').addEventListener('click', () => showWindow(folderWindow));
    document.querySelector('.logopreview-icon').addEventListener('click', () => showWindow(logosWindow));
    document.querySelector('.smgpreview-icon').addEventListener('click', () => showWindow(socialMediaWindow));
  
    document.querySelector('.folderback-button').addEventListener('click', () => showWindow(mainWindow));
  
    document.querySelector('.photography-folder').addEventListener('click', () => showWindow(photographyWindow));
    document.querySelector('.musician-folder').addEventListener('click', () => showWindow(musicianWindow));
    document.querySelector('.business-folder').addEventListener('click', () => showWindow(businessWindow));
    document.querySelector('.travel-folder').addEventListener('click', () => showWindow(travelWindow));
  
    // Specific back button event listeners
    document.querySelector('.photography-back-icon').addEventListener('click', () => showWindow(folderWindow));
    document.querySelector('.musician-back-icon').addEventListener('click', () => showWindow(folderWindow));
    document.querySelector('.business-back-icon').addEventListener('click', () => showWindow(folderWindow));
    document.querySelector('.travel-back-icon').addEventListener('click', () => showWindow(folderWindow));
  
    document.querySelector('.logoback-icon').addEventListener('click', () => showWindow(mainWindow));
    document.querySelector('.smgback-icon').addEventListener('click', () => showWindow(mainWindow));
  
    // Initialize by showing the main window
    showWindow(mainWindow);

    // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial fade-up for the content
    document.querySelector('.content').classList.add('fade-in');
  
    // Function to handle the fade transition
    function handleFadeTransition(currentClass, targetClass) {
      const currentWindow = document.querySelector(`.${currentClass}`);
      const targetWindow = document.querySelector(`.${targetClass}`);
      
      if (currentWindow && targetWindow) {
        currentWindow.classList.add('fade-down');
        targetWindow.classList.remove('hidden');
        targetWindow.classList.add('fade-in');
        
        // Remove the fade-down class after animation ends
        currentWindow.addEventListener('animationend', () => {
          currentWindow.classList.add('hidden');
          currentWindow.classList.remove('fade-down');
        }, { once: true });
      }
    }
  
    // Event listeners for clickable elements
    document.querySelectorAll('.webpreview-icon, .logopreview-icon, .smgpreview-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-target');
        handleFadeTransition('main-window', target);
      });
    });
  
    document.querySelectorAll('.folderback-image, .logo-image, .SMG-image').forEach(backIcon => {
      backIcon.addEventListener('click', (e) => {
        const target = e.currentTarget.classList.contains('folderback-image') ? 'main-window' : '';
        handleFadeTransition(e.currentTarget.parentElement.classList[0], 'main-window');
      });
    });
  });
  function resetScrollPosition() {
    document.querySelector('.social-media-window').scrollTop = 0;
}
document.querySelector('.smgpreview-icon').addEventListener('click', function() {
  // Hide main window and show social-media-window
  document.querySelector('.main-window').classList.add('hidden');
  document.querySelector('.social-media-window').classList.remove('hidden');
  
  // Reset scroll position
  resetScrollPosition();
});

// Get all target elements
const images = document.querySelectorAll('.home-photography, .portrait-photography, .editorial-photography, .about-photography, .home-musician, .music-musician, .video-musician, .home-business, .popup-business, .checkout-business, .signin-business, .davao, .siargao');

// Function to toggle overlay visibility
function toggleOverlay(image) {
  const overlay = image.querySelector('.overlay');
  overlay.classList.toggle('active'); // Or use display: none/block if preferred
}

// Add event listeners to images
images.forEach(image => {
  image.addEventListener('touchstart', () => {
    toggleOverlay(image);
  });
});

// Handle clicks outside images
document.addEventListener('touchstart', event => {
  const isImageOrOverlay = event.target.closest('.image-wrapper, .overlay');
  if (!isImageOrOverlay) {
    // Remove all active overlays
    const overlays = document.querySelectorAll('.overlay.active');
    overlays.forEach(overlay => overlay.classList.remove('active'));
  }
});

  
  });
  