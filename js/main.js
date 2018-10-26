'use strict';
/**
  * Main JS File
  *
  * @package  sfc
  * @author   Kabolobari Benakole <i@kb.life>
*/

// Definitions
const eyw = {
    body:           document.body, 
    mainbar:        document.querySelector('#mainbar'), 
    navToToggle:    document.querySelector('[navToOpen]'),
    navToggler:     document.querySelector('[togglenav]'),
    images:         document.querySelectorAll('.markdown p img')
}

const scrollTrigger = () => {
    window.onscroll = function(){
        if (document.body.scrollTop >= 10) {
            eyw.mainbar.classList.add('is-fixed');
        } else {
            eyw.mainbar.classList.remove('is-fixed');
        }
    }
}

// Replace img and iframe etc with html5 types...
eyw.replaceMedia = function () {
    let that = this;
    // Replacing all images with figure and caption...
    if (that.images) {
        that.images.forEach(el => {
            let parentImg = el.closest('p'),
                figure = document.createElement('figure');
            figure.innerHTML = `
                <img src="${el.src}" alt="${el.alt}">
                <figcaption>${el.alt}</figcaption>
            `;
            parentImg.parentNode.replaceChild(figure, parentImg);
        });
    }
    
    // Replacing all iframes with figure and figcaption...
    if (that.iframes) {
        that.iframes.forEach(el => {
            that.figure.classList.add('video-wrapper');
            that.figure.innerHTML = `
                <iframe src="${el.src}" frameborder="0" allowfullscreen></iframe>
            `;
            el.parentNode.replaceChild(that.figure, el);
        });
    }
};



eyw.toggleNav = function () {
    let navEl = document.querySelector('[toggle-nav]'),
        toggler = document.querySelector('[nav-toggler]'),
        underNavBody = document.getElementById('under-nav-body');

    document.addEventListener('click', function (e) {
        if (e.target.matches('[nav-toggler]')) {
            navEl.classList.contains('is-active') ? navEl.classList.remove('is-active') : navEl.classList.add('is-active');
            e.target.classList.contains('is-clicked') ? e.target.classList.remove('is-clicked') : e.target.classList.add('is-clicked');
        } else {
            navEl.classList.remove('is-active');
            toggler.classList.remove('is-clicked');
        }
    }, false);
};


// Calls
scrollTrigger();
eyw.toggleNav();
eyw.replaceMedia();



// create the container
var paragraphs = document.querySelectorAll('.markdown > p')
var listContainer = document.querySelectorAll('.markdown ul')
var listItems = document.querySelectorAll('.markdown ul li')
var listImages = document.querySelectorAll('.markdown ul li figure')

// apply class to container div
listImages.forEach(element => {
    listItems.forEach(element => {
        if (element.contains(element)) {
            element.setAttribute('class', 'markdown-images');
        }
    });
});
paragraphs.forEach(element => {
    element.setAttribute('class', 'markdown-paragraphs');
});
listImages.forEach(element => {
    listContainer.forEach(element => {   
        if (element.contains(element)) {
            element.setAttribute('class', 'markdown-images-container');
        }
    });
});

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3
}).mount();

 