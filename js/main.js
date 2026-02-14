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

    if ( video && btn ) {
        video.addEventListener('click', () => {
            btn.classList.toggle('active');

            if ( video.paused ) {
                video.play();
            } else {
                video.pause();
            }
        })
    }
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

function initCounterProduct() {
    const remove = document.querySelectorAll('.product-count .remove');
    const add = document.querySelectorAll('.product-count .add');

    remove.forEach(element => {
        element.addEventListener('click', (e) => {
            const wrapper = e.currentTarget.closest('.product-count');
            if (!wrapper) return;

            const input = wrapper.querySelector('input[name=count-product]');
            if (!input) return;

            let currentValue = parseInt(input.value) || 0;

            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        })
    });

    add.forEach(element => {
        element.addEventListener('click', (e) => {
            const wrapper = e.currentTarget.closest('.product-count');
            if (!wrapper) return;

            const input = wrapper.querySelector('input[name=count-product]');
            if (!input) return;

            let currentValue = parseInt(input.value) || 0;

            if (currentValue >= 1) {
                input.value = currentValue + 1;
            }
        })
    });
}
initCounterProduct();

function initProductCodeCopy() {
    const codeElements = document.querySelectorAll('.product-item__code');

    codeElements.forEach(el => {
        el.addEventListener('click', async (e) => {
            const textToCopy = e.currentTarget.textContent.trim();

            try {
                await navigator.clipboard.writeText(textToCopy);
                
                el.classList.add('is-copied');
                setTimeout(() => el.classList.remove('is-copied'), 200);

            } catch (err) {
                console.error('Не удалось скопировать:', err);
            }
        });
    });
}
initProductCodeCopy();