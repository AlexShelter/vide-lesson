'use strict'

$(document).ready(function () {
  $('body').vide({
    mp4: 'mountain/coverr-aerial-view-of-rocky-mountains-1585320758193.mp4',
    webm: 'mountain/coverr-aerial-view-of-rocky-mountains-1585320758193.webm',
    ogv: 'mountain/coverr-aerial-view-of-rocky-mountains-1585320758193.ovg',
    poster: 'mountain/coverr-aerial-view-of-rocky-mountains-1585320758193.jpg'
  }, {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true
  });
});