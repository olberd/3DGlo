const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const toggleMenu = () => {
        const handleMenu = () => {
            menu.classList.toggle('active-menu');
        }

        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('close-btn') || e.target.matches('.menu, .menu>img, .menu>small')) {
                handleMenu();
            } else {
                if(!e.target.closest('.menu')) {
                    menu.classList.remove('active-menu');
                }
            }
        });
    };

    toggleMenu();
}

export default menu
