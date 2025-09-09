const checkInputs = () => {
    //const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount= document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    const form1 = document.querySelector('#form1');
    const form1Name = document.querySelector('#form1-name');
    const form1Email = document.querySelector('#form1-email');
    const form1Phone = document.querySelector('#form1-phone');

    const form2 = document.querySelector('#form2');
    const form2Name = document.querySelector('#form2-name');
    const form2Email = document.querySelector('#form2-email');
    const form2Phone = document.querySelector('#form2-phone');
    const form2Message = document.querySelector('#form2-message');

    const form3 = document.querySelector('#form3');
    const form3Name = document.querySelector('#form3-name');
    const form3Email = document.querySelector('#form3-email');
    const form3Phone = document.querySelector('#form3-phone');


    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    })

    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    })

    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    })

    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;

        if (!/[^а-яА-Я -]/g.test(form1Name.value) && form1Name.value !== ''){
            alert('В инпуте только кирилица')
        } else {
            isError = true;
        }

        if (/^[a-zA-Z0-9.!~*'_+-]+@[a-zA-Z0-9.!~*'_+-]+\.[a-zA-Z]{2,}$/g.test(form1Email.value) && form1Email.value !== ''){
            alert('В инпуте только e-mail')
        } else {
            isError = true;
        }

        if (/^[0-9()+\- ]+$/g.test(form1Phone.value) && form1Phone.value !== ''){
            alert('В инпуте только числа')
        } else {
            isError = true;
        }

        if (!isError){
            alert('Данные отправлены');

        }
    });

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;

        if (!/[^а-яА-Я -]/g.test(form2Name.value) && form2Name.value !== ''){
            alert('В инпуте только кирилица')
        } else {
            isError = true;
        }

        if (/^[a-zA-Z0-9.!~*'_+-]+@[a-zA-Z0-9.!~*'_+-]+\.[a-zA-Z]{2,}$/g.test(form2Email.value) && form2Email.value !== ''){
            alert('В инпуте только e-mail')
        } else {
            isError = true;
        }

        if (/^[0-9()+\- ]+$/g.test(form2Phone.value) && form2Phone.value !== ''){
            alert('В инпуте только числа')
        } else {
            isError = true;
        }

        if (!/[^а-яА-Я -]/g.test(form2Message.value) && form2Message.value !== ''){
            alert('В сообщении только кирилица, дефис и пробел')
        } else {
            isError = true;
        }

        if (!isError){
            alert('Данные отправлены');

        }
    });

    form3.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;

        if (!/[^а-яА-Я -]/g.test(form3Name.value) && form3Name.value !== ''){
            alert('В инпуте только кирилица')
        } else {
            isError = true;
        }

        if (/^[a-zA-Z0-9.!~*'_+-]+@[a-zA-Z0-9.!~*'_+-]+\.[a-zA-Z]{2,}$/g.test(form3Email.value) && form3Email.value !== ''){
            alert('В инпуте только e-mail')
        } else {
            isError = true;
        }

        if (/^[0-9()+\- ]+$/g.test(form3Phone.value) && form3Phone.value !== ''){
            alert('В инпуте только числа')
        } else {
            isError = true;
        }

        if (!isError){
            alert('Данные отправлены');

        }
    });

}

export default checkInputs;