document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('playButton');
  const audioElement = document.getElementById('audioElement');

  playButton.addEventListener('click', function() {
      if (audioElement.paused) {
          audioElement.play();
          playButton.innerText = '一時停止';
      } else {
          audioElement.pause();
          playButton.innerText = '再生';
      }
  });

  audioElement.addEventListener('ended', function() {
      playButton.innerText = '再生';
  });
});
