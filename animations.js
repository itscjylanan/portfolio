document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', function() {
    const targetWindow = document.querySelector(`.${this.dataset.target}`);
    const currentWindow = document.querySelector('.main-window:not(.hidden)');
    
    // Hide the current window with a fade-down transition
    currentWindow.classList.add('fade-down');
    
    // Show the target window with a fade-up transition
    targetWindow.classList.remove('hidden');
    targetWindow.classList.add('fade-up');
    
    // Ensure the body does not scroll
    document.body.style.overflow = 'hidden';
    
    // Reset the scroll position
    window.scrollTo(0, 0);
    
    // Allow scrolling again after animation
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000); // Match this duration with your animation duration
  });
});

document.querySelectorAll('.folderback-button, .folderback-icon, .photography-back-icon, .musician-back-icon, .business-back-icon, .travel-back-icon').forEach(button => {
  button.addEventListener('click', function() {
    const targetWindow = document.querySelector('.main-window');
    const currentWindow = document.querySelector('.folder-window:not(.hidden)');
    
    // Hide the current window with a fade-down transition
    currentWindow.classList.add('fade-down');
    
    // Show the target window with a fade-up transition
    targetWindow.classList.remove('hidden');
    targetWindow.classList.add('fade-up');
    
    // Ensure the body does not scroll
    document.body.style.overflow = 'hidden';
    
    // Reset the scroll position
    window.scrollTo(0, 0);
    
    // Allow scrolling again after animation
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000); // Match this duration with your animation duration
  });
});
