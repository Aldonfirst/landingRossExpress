document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const videoButton = document.querySelector('.section-first__video-button');
    const reservation = document.querySelector('.section-first__reservation');
    const personaly = document.querySelector('.section-first__personaly');
    let animated = { videoButton: false, reservation: false, personaly: false};
 

    function reveal() {
        for (let i = 0; i < elements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = elements[i].getBoundingClientRect().top;
            const elementVisible = 80;
    
            if (elementTop < windowHeight - elementVisible) {
                elements[i].classList.add('active');
                if (!animated.videoButton) {
                    setTimeout(() => videoButton.classList.add('active-fadeInUp'), 0);
                    animated.videoButton = true;
                }
                if (!animated.reservation) {
                    setTimeout(() => reservation.classList.add('active-fadeInUp'), 200); // Задержка в 200мс
                    animated.reservation = true;
                }
                if (!animated.personaly) {
                    setTimeout(() => personaly.classList.add('active-fadeInUp'), 400); // Задержка в 400мс
                    animated.personaly = true;
                }
            }
        }
        const images = document.querySelectorAll('.section-two__img, .section-two__img2');
        images.forEach((image, index) => {
            if (!image.classList.contains('active-fadeInUpImg')) {
                // Delays for each image may need to be adjusted
                setTimeout(() => image.classList.add('active-fadeInUpImg'), (index + 1) * 200);
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal();
});