/* Hamburger menu */ 

let datasetName;

function cross(e) {
    let hambMenu = document.getElementById('menu-hamb-icon');
    datasetName = e;
    if (e.dataset.name === 'menu') {
        datasetName.dataset.name = "xmark";
        hambMenu.classList.remove('fa-bars');
        hambMenu.classList.add('fa-xmark');
        openHamb();
    } else if (e.dataset.name === 'xmark') {
        datasetName.dataset.name = "menu";
        hambMenu.classList.remove('fa-xmark');
        hambMenu.classList.add('fa-bars');
        closeHamb();
    }
}

function openHamb(){
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('hidden');
}

function closeHamb() {
    let sidebar = document.getElementById('sidebar');
    let hambMenu = document.getElementById('menu-hamb-icon');

    sidebar.classList.add('hidden');
    hambMenu.classList.remove('fa-xmark');
    hambMenu.classList.add('fa-bars');
    datasetName.dataset.name = "menu";
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

/* Slider gallery script */

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper-custom .image-list-custom");
    const slideButtons = document.querySelectorAll(".slider-wrapper-custom .slide-button");
    const sliderScrollbar = document.querySelector(".container-custom .slider-scrollbar-custom");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb-custom");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        })
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener('scroll', () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

window.addEventListener("load", initSlider);

/* Select img change */

const changeImage = () => {
    const selectElement = document.getElementById('machine-list');
    const imgMachine = document.getElementById('img-machine');
    const selectedValue = selectElement.value;
    if (selectedValue === 'Incline Press') {
        imgMachine.src = './img/iso-lateral-super-incline-press-v02bf.jpg';
    } else if (selectedValue === 'Chest Press') {
        imgMachine.src = './img/seated-leg-extension-v23.jpg';
    } else if (selectedValue === 'Seated Biceps') {
        imgMachine.src = './img/seated-biceps-v05bf.jpg';
    } else if (selectedValue === 'Lateral Leg Press') {
        imgMachine.src = './img/lateral-leg-press-v04bf.jpg';
    } else if (selectedValue === 'Bench Press') {
        imgMachine.src = './img/iso-lateral-bench-press-v01bf.jpg';
    } else if (selectedValue === 'Linear Leg Press') {
        imgMachine.src = './img/linear-leg-press-v10bf.jpg';
    } else {
        console.log('Something is wrong!')
    }
}