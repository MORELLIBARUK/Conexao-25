
document.addEventListener('DOMContentLoaded', () => {
  const thunderSound = document.getElementById('thunder-sound');
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');

  const video = document.getElementById('intro-video');
video.playbackRate = 0.5;
  thunderSound.play();

  setTimeout(() => {
    intro.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 4000);
});
