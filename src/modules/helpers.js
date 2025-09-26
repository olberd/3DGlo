const animate = (modal) => {
    if (window.innerWidth > 768) {
        modal.style.opacity = '0';
        modal.style.display = 'block';
        let step = 0.5;

        let interval = setInterval( () =>{
            if (modal.style.opacity >= 1)
                clearInterval(interval);

            step += 0.1;
            modal.style.opacity = step.toString();

        }, 100);

    } else {
        modal.style.display = 'block';
    }
};

export { animate };