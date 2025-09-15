const modal = () => {
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            if (window.innerWidth > 768) {
                modal.style.opacity = '0';
                modal.style.display = 'block';
                let step = 0.1;

                let interval = setInterval( () =>{
                    if (modal.style.opacity >= 1)
                        clearInterval(interval);

                    step += 0.05;
                    modal.style.opacity = step.toString();

                    }, 100);

            } else {
                modal.style.display = 'block';
            }

        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') ||
            e.target.classList.contains('popup-close')){

            modal.style.display = 'none';
        }
    })
}

export default modal