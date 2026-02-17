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

function initPopups() {
    const triggers = document.querySelectorAll('.trigger-popup');
    const body = document.body;

    if ( triggers.length > 0 ) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const popupSelector = trigger.dataset.popup;
                const popupEl = document.querySelector(popupSelector);

                if (!popupEl) return;

                body.classList.add('popup-open');
                popupEl.classList.add('active');

                const closeBtn = popupEl.querySelector('.popup__close');
                const closeBtnСompleted = popupEl.querySelector('.popup__completed');

                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        popupEl.classList.remove('active');
                        body.classList.remove('popup-open');
                    });
                }

                if (closeBtnСompleted) {
                    closeBtnСompleted.addEventListener('click', () => {
                        popupEl.classList.remove('active');
                        body.classList.remove('popup-open');
                    });
                }
            });
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            e.target.classList.remove('active');
            body.classList.remove('popup-open');
        }
    });
}
initPopups();

function openModal(popupId) {
    const popupEl = document.querySelector(popupId);
    const body = document.body;

    if (!popupEl) return;

    body.classList.add('popup-open');
    popupEl.classList.add('active');

    const closeBtn = popupEl.querySelector('.popup__close');
    const closeBtnСompleted = popupEl.querySelector('.popup__completed');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popupEl.classList.remove('active');
            body.classList.remove('popup-open');
        });
    }

    if (closeBtnСompleted) {
        closeBtnСompleted.addEventListener('click', () => {
            popupEl.classList.remove('active');
            body.classList.remove('popup-open');
        });
    }
}

function closeModal(popupId) {
    const popupEl = document.querySelector(popupId);
    const body = document.body;

    if (!popupEl) return;

    popupEl.classList.remove('active');
    body.classList.remove('popup-open');
}

function initSearchMain() {
    const btn = document.querySelectorAll('.header__search-btn');
    const searchMain = document.querySelector('.search-main');
    const body = document.body;

    if ( btn.length == 0 && !searchMain ) return;

    btn.forEach(element => {
        element.addEventListener('click', () => {
            searchMain.classList.add('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('search-main')) {
            e.target.classList.remove('active');
            body.classList.remove('popup-open');
        }
    });
}
initSearchMain();

function initMobileMenu() {
    const btn = document.querySelector('.header__menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMobileMenu = document.querySelector('.mobile-menu__close');

    if ( !btn || !mobileMenu || !closeMobileMenu ) return;

    btn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    })

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    })
}
initMobileMenu();

function initListLocations() {
    const btns = document.querySelectorAll('.header__location-current');
    const lists = document.querySelectorAll('.header__location-list');

    btns.forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const parent = e.target.closest('.header__location');
            const list = parent.querySelector('.header__location-list');

            lists.forEach(el => {
                if (el !== list) el.classList.remove('active');
            });

            list.classList.toggle('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__location-current') && !e.target.closest('.header__location-list')) {
            lists.forEach(element => {
                element.classList.remove('active');
            });
        }
    });
}
initListLocations();