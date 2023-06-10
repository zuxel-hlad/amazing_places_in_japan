import AOS from 'aos';
import './src/styles/style.scss';
import 'aos/dist/aos.css';
import './src/plugins/height';
import './src/components/header/header';

setTimeout(() => {
    AOS.init({
        duration: 700,
        easing: 'ease',
        once: false,
    });
}, 0);
