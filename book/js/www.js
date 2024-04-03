'use strict'

let i = 0;

window.addEventListener('load', function () {
    const sectionAll = document.querySelectorAll('main, article:not(#contents)');
    function thisSection() {
        for (const sectionThis of sectionAll) {
            sectionThis.hidden = true;
        }
        sectionAll[i].hidden = false;
    };

    const navBtu = document.querySelector('footer nav');
    const next = document.querySelector('#next');
    const past = document.querySelector('#past');
    navBtu.hidden = false;

    next.addEventListener('click', function () {
        if (i == 0) {
            i++;
            video.hidden = true;
            video.pause();
        } else if (i == 1) {
            i++;
        } else if (i < sectionAll.length - 1) {
            i++;
        } else if (i == sectionAll.length - 1) {
            i = 0;
            video.hidden = false;
            video.play();
        }
        thisSection();
    }, false)

    past.addEventListener('click', function () {
        if (i == 0) {
            i = sectionAll.length - 1;
            video.hidden = true;
            video.pause();
        } else if (i == 1) {
            i--;
            video.hidden = false;
            video.play();
        } else if (i < sectionAll.length - 1) {
            i--;
        } else if (i == sectionAll.length - 1) {
            i--;
            video.hidden = true;
            video.pause();
        }
        thisSection();
    }, false)

    thisSection();
});