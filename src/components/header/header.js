//selectors
const header = document.querySelector('header'),
    burger = document.querySelector('.burger'),
    close = document.querySelector('.close'),
    nav = document.querySelector('.nav'),
    links = document.querySelectorAll('.nav a'),
    anchorLinks = document.querySelectorAll('[data-anchor]');

//add header bg on scroll

const addHeaderBackgroundOnScroll = () => {
    let scrolledPixels = window.scrollY;

    if (!header) return;

    if (scrolledPixels > 0) {
        header.classList.add('dark-blue');
    } else {
        header.classList.remove('dark-blue');
    }
};

//scroll to sections
const scrollToAnchor = e => {
    e.preventDefault();
    const anchor = e.target.getAttribute('data-anchor');
    const element = document.getElementById(anchor);
    const elementOffsetTop = element.offsetTop;
    const desktop =
        element && elementOffsetTop >= 0 && window.innerWidth >= 768;
    const mobile = element && elementOffsetTop >= 0 && window.innerWidth < 768;

    const scrollFunc = customOffset => {
        window.scrollTo({
            top: elementOffsetTop - customOffset,
            behavior: 'smooth',
        });
    };

    if (desktop) {
        scrollFunc(131);
    } else if (mobile) {
        scrollFunc(64);
    }
};

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
    if (nav && nav.classList.contains('right-0') && e.target.tagName !== 'UL') {
        nav.classList.remove('right-0');
        nav.classList.add('-right-[100%]');
    } else return false;
};

//open mobile menu
burger.addEventListener('click', handleOpenMobileMenu);

//handle close mobile menu
close.addEventListener('click', handleCloseMobileMenu);

//handle close if click on a link at mobile menu
links.forEach(link => link.addEventListener('click', handleCloseMobileMenu));

//scroll to anchor listener
anchorLinks.forEach(link => link.addEventListener('click', scrollToAnchor));

//click outside
window.addEventListener('click', handleCloseMobileMenu);

//header bg on scroll
window.addEventListener('scroll', addHeaderBackgroundOnScroll);
