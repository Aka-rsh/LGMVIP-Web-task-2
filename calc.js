let container = document.getElementById('cont');
let buttons = [...document.getElementsByClassName('btn')];

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                container.innerText = '';
                break;
            case '←':
                if (container.innerText) {
                    container.textContent = container.textContent.slice(0, -1);
                }
                break;
            case '=':
                try {
                    container.innerText = eval(container.innerText);
                } catch {
                    container.innerText = 'Syntax Error';
                }
                break;
            case '%':
                if (container.innerText) {
                    try {
                        container.innerText = eval(container.innerText + '/100');
                    } catch {
                        container.innerText = 'Syntax Error';
                    }
                }
                break;
            default:
                container.innerText += e.target.innerText;
        }
    });
});
