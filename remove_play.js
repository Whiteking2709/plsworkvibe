const video = document.getElementById('myVideo');
const playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseButton.textContent = 'Pause';
  } else {
    video.pause();
    playPauseButton.textContent = 'Play';
  }
});