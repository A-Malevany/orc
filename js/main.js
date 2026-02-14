function toggleSearch() {
}
toggleSearch();

function initSwiperPromo() {
    const slider = document.querySelector('.promo .swiper')

    if (slider) {
        new Swiper(slider, {
            loop: true,
            speed: 600,

            pagination: {
                el: slider.querySelector('.swiper-pagination')
            },

            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev')
            }
        }) 
    }
}
initSwiperPromo();

function initVideoFront() {
    const btn = document.querySelector('.video__play');
    const video = document.querySelector('.video video');

    video.addEventListener('click', () => {
        btn.classList.toggle('active');

        if ( video.paused ) {
            video.play();
        } else {
            video.pause();
        }
    })
}
initVideoFront();

function handleFileSelect() {
    const fileInput = document.querySelector('.calculation-form__file input[type=file]');
    const nameDisplay = document.querySelector('.calculation-form__file span');

    if ( fileInput && nameDisplay ) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];

            if (file) {
                nameDisplay.textContent = file.name;
            } else {
                nameDisplay.textContent = 'Прикрепить файл к заявке';
            }
        })
    }
}
handleFileSelect();