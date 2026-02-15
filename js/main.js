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
    const codeElements = document.querySelectorAll('.product-code');

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

function changeMainImageProduct() {
    const imgMain = document.querySelector('.product-card__img img');
    const imgs = document.querySelectorAll('.product-card__gallery-items img');

    if ( imgMain && imgs.length > 0 ) {
        imgs.forEach(element => {
            element.addEventListener('click', (e) => {
                const newSrc = e.currentTarget.src;

                if ( imgMain.src === newSrc ) return;

                imgMain.classList.add('is-switching');

                setTimeout(() => {
                    imgMain.src = newSrc;

                    imgMain.onload = () => {
                        imgMain.classList.remove('is-switching');
                    };

                    if (imgMain.complete) {
                        imgMain.classList.remove('is-switching');
                    }
                }, 200); 
            })
        });
    }
}
changeMainImageProduct();

const delay = ms => new Promise(res => setTimeout(res, ms));

function initTabsProduct() {
    const tabs = document.querySelectorAll('.product-info__tab');
    const contents = document.querySelectorAll('.product-info__tab-content');

    if (tabs.length == 0 && contents.length == 0) return;

    tabs.forEach(tabBtn => {
        tabBtn.addEventListener('click', async (e) => {
            const currentBtn = e.currentTarget; 
            
            const targetId = currentBtn.dataset.tab;
            const targetContent = document.getElementById(targetId);

            if (!targetContent || currentBtn.classList.contains('active')) return;

            document.querySelector('.product-info__tabs').style.pointerEvents = 'none';

            tabs.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            await delay(200);

            contents.forEach(content => content.classList.remove('show'));

            currentBtn.classList.add('active');
            targetContent.classList.add('show');

            await delay(50); 

            targetContent.classList.add('active');

            document.querySelector('.product-info__tabs').style.pointerEvents = 'auto';
        });
    });

    tabs[0].click();
}
initTabsProduct();

function initSimilarNews() {
    const slider = document.querySelector('.similar-news .swiper')    

    if (slider) {
        new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 24,
            loop: true,
            speed: 600,

            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                }
            }   
        }) 
    }
}
if ( window.matchMedia("(max-width: 1000px)").matches ) {
    initSimilarNews();
}

function initSimilarProducts() {
    const slider = document.querySelector('.similar-products .swiper')    

    if (slider) {
        new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            loop: true,
            speed: 600,

            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            }   
        }) 
    }
}
if ( window.matchMedia("(max-width: 1600px)").matches ) {
    initSimilarProducts();
}