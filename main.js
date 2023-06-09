import './src/styles/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './src/plugins/height';

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        AOS.init({
            duration: 700,
            easing: 'ease',
            once: false,
        });
    }, 0);

    const header = document.querySelector('header'),
        burger = document.querySelector('.burger'),
        close = document.querySelector('.close'),
        nav = document.querySelector('.nav'),
        links = document.querySelectorAll('.nav a');

    //header bg on scroll
    window.addEventListener('scroll', () => {
        let scrolledPixels = window.scrollY;

        if (!header) return;

        if (scrolledPixels > 0) {
            header.classList.add('dark-blue');
        } else {
            header.classList.remove('dark-blue');
        }
    });

    //open mobile menu function
    const handleOpenMobileMenu = e => {
        e.stopPropagation();

        if (nav && !nav.classList.contains('right-0')) {
            nav.classList.remove('-right-[100%]');
            nav.classList.add('right-0');
        }
    };

    //close mobile menu function
    const handleCloseMobileMenu = e => {
        e.stopPropagation();

        if (nav && nav.classList.contains('right-0')) {
            nav.classList.remove('right-0');
            nav.classList.add('-right-[100%]');
        } else return false;
    };

    //open mobile menu
    burger.addEventListener('click', handleOpenMobileMenu);

    //handle close mobile menu
    close.addEventListener('click', handleCloseMobileMenu);

    //handle close if click on a link at mobile menu
    links.forEach(link =>
        link.addEventListener('click', handleCloseMobileMenu)
    );
    //click outside
    window.addEventListener('click', handleCloseMobileMenu);
});
