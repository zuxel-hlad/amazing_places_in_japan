let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vh-menu', `${vh}px`);
let ww = window.innerWidth;

window.addEventListener('resize', () => {
    ww = window.innerWidth;

    if (ww <= 1200) {
        return
    }

    setTimeout(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 0)
}, true)


window.addEventListener('resize', () => {
    ww = window.innerWidth;

    setTimeout(() => {

        let vhMenu = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh-menu', `${vhMenu}px`);
    }, 0) 
}, true)

window.addEventListener("orientationchange", () => {
    setTimeout(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vh-menu', `${vh}px`);
    }, 500)
})
