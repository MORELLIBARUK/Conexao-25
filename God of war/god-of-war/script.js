
document.addEventListener('DOMContentLoaded', () => {
  const thunderSound = document.getElementById('thunder-sound');
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');

  thunderSound.play();

  setTimeout(() => {
    intro.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 4000);
});
