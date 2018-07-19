/*jslint browser, multivar, es6 */
/*global window */

window.onload = function () {
    'use strict';

    let audioObject = document.getElementById(`the-audio-element`),
        playButton = document.getElementById(`playButton`),
        stopButton = document.getElementById(`stopButton`),
        rewindButton = document.getElementById(`rewindButton`),
        fastForwardButton = document.getElementById(`fastForwardButton`),
        volumeReport = document.getElementById(`volume`),
        durationReport = document.getElementById(`duration`),
        raiseVolumeButton = document.getElementById(`raise-volume-button`),
        lowerVolumeButton = document.getElementById(`lower-volume-button`),
        playPauseIcon = document.getElementsByClassName(`fa-play`)[0],
        minutes = parseInt((audioObject.duration / 60).toString(), 10),
        seconds = (audioObject.duration % 60).toFixed(0);

    volumeReport.textContent = audioObject.volume.toString();
    durationReport.textContent = `${minutes}:${seconds}`;

    playButton.addEventListener(`click`, function () {
        if (audioObject.paused) {
            audioObject.play();
            playPauseIcon.classList.remove(`fa-play`);
            playPauseIcon.classList.add(`fa-pause`);
        } else {
            audioObject.pause();
            playPauseIcon.classList.remove(`fa-pause`);
            playPauseIcon.classList.add(`fa-play`);
        }
    }, false);

    stopButton.addEventListener(`click`, function () {
        if (audioObject.play()) {
            audioObject.pause();
            playPauseIcon.classList.remove(`fa-play`);
            playPauseIcon.classList.add(`fa-pause`);
            audioObject.currentTime = 0;
        }
    }, false);

    rewindButton.addEventListener(`click`, function () {
        audioObject.currentTime -= 10;
    }, false);

    fastForwardButton.addEventListener(`click`, function () {
        audioObject.currentTime += 10;
    }, false);

    raiseVolumeButton.addEventListener(`click`, function () {
        audioObject.volume += 0.1;
        volumeReport.textContent = audioObject.volume.toFixed(2);
    }, false);

    lowerVolumeButton.addEventListener(`click`, function () {
        audioObject.volume -= 0.1;
        volumeReport.textContent = audioObject.volume.toFixed(2);
    }, false);
};
