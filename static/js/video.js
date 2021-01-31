/// <reference path="./both.js" />

function initPlayer() {

var video = document.querySelector("#videoElement");
  var videoSrc = 'https://stream.stoveflix.com/hls/SCscvDSABKtqHT6.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play();
    });
  }

  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
  }

    let overlay = document.querySelector('#videoOverlay');
    overlay.onclick = () => {
        overlay.style.display = 'none';
        videoElement.muted = false;
    };
}
window.addEventListener("load", initPlayer);
