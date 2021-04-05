const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    // Assign initial css classes for gallery and nav items
    setInitialState() {
        this.carouselArray[0].classList.add('gallery-item-first');
        this.carouselArray[1].classList.add('gallery-item-previous');
        this.carouselArray[2].classList.add('gallery-item-selected');
        this.carouselArray[3].classList.add('gallery-item-next');
        this.carouselArray[4].classList.add('gallery-item-third');
        this.carouselArray[5].classList.add('gallery-item-next');
        this.carouselArray[6].classList.add('gallery-item-next');
        this.carouselArray[7].classList.add('gallery-item-next');
        this.carouselArray[8].classList.add('gallery-item-next');
        this.carouselArray[9].classList.add('gallery-item-next');
        this.carouselArray[10].classList.add('gallery-item-last');

        document.querySelector('.gallery-nav').childNodes[0].className = 'gallery-nav-item gallery-item-first';
        document.querySelector('.gallery-nav').childNodes[1].className = 'gallery-nav-item gallery-item-previous';
        document.querySelector('.gallery-nav').childNodes[2].className = 'gallery-nav-item gallery-item-selected';
        document.querySelector('.gallery-nav').childNodes[3].className = 'gallery-nav-item gallery-item-next';
        document.querySelector('.gallery-nav').childNodes[4].className = 'gallery-nav-item gallery-item-third';
        document.querySelector('.gallery-nav').childNodes[5].className = 'gallery-nav-item gallery-item-next';
        document.querySelector('.gallery-nav').childNodes[6].className = 'gallery-nav-item gallery-item-next';
        document.querySelector('.gallery-nav').childNodes[7].className = 'gallery-nav-item gallery-item-next';
        document.querySelector('.gallery-nav').childNodes[8].className = 'gallery-nav-item gallery-item-next';
        document.querySelector('.gallery-nav').childNodes[9].className = 'gallery-nav-item gallery-item-next';
        document.querySelector('.gallery-nav').childNodes[10].className = 'gallery-nav-item gallery-item-last';
    }

    // Update the order state of the carousel with css classes
    setCurrentState(target, selected, previous, next, third, first, last) {

        selected.forEach(el => {
            el.classList.remove('gallery-item-selected');

            if (target.className == 'gallery-controls-previous') {
                el.classList.add('gallery-item-next');
            } else {
                el.classList.add('gallery-item-previous');
            }
        });

        previous.forEach(el => {
            el.classList.remove('gallery-item-previous');

            if (target.className == 'gallery-controls-previous') {
                el.classList.add('gallery-item-selected');
            } else {
                el.classList.add('gallery-item-first');
            }
        });

        next.forEach(el => {
            el.classList.remove('gallery-item-next');
            if (target.className == 'gallery-controls-previous') {
                el.classList.add('gallery-item-last');
            } else {
                el.classList.add('gallery-item-selected');
            }
        });

        third.forEach(el => {
            el.classList.remove('gallery-item-third');
            if (target.className == 'gallery-controls-previous') {
                el.classList.add('gallery-next');
            } else {
                el.classList.add('gallery-item-selected');
            }
        });

        first.forEach(el => {
            el.classList.remove('gallery-item-first');

            if (target.className == 'gallery-controls-previous') {
                el.classList.add('gallery-item-previous');
            } else {
                el.classList.add('gallery-item-last');
            }
        });

        last.forEach(el => {
            el.classList.remove('gallery-item-last');

            if (target.className == 'gallery-controls-previous') {
                el.classList.add('gallery-item-first');
            } else {
                el.classList.add('gallery-item-next');
            }
        });
    }

    // Construct the carousel navigation
    setNav() {
        galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

        this.carouselArray.forEach(item => {
            const nav = galleryContainer.lastElementChild;
            nav.appendChild(document.createElement('li'));
        });
    }

    // Construct the carousel controls
    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
        });

        !!galleryControlsContainer.childNodes[0] ? galleryControlsContainer.childNodes[0].innerHTML = this.carouselControls[0] : null;
        !!galleryControlsContainer.childNodes[1] ? galleryControlsContainer.childNodes[1].innerHTML = this.carouselControls[1] : null;
    }

    // Add a click event listener to trigger setCurrentState method to rearrange carousel
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];

        triggers.forEach(control => {
            control.addEventListener('click', () => {
                const target = control;
                const selectedItem = document.querySelectorAll('.gallery-item-selected');
                const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
                const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
                const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
                const lastCarouselItem = document.querySelectorAll('.gallery-item-last');

                this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.setNav();
exampleCarousel.setInitialState();
exampleCarousel.useControls();