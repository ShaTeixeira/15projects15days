const buttonNotification = document.getElementById('buttonNotification');
const notification = document.getElementById('notification');

const messages = [
    'Primeira mensagem',
    'Obrigada por utilizar',
    'Volte sempre',
    'Ultima mensagem',
];

const types = ['info', 'success', 'error'];

buttonNotification.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const notify = document.createElement('div');
    notify.classList.add('notification');
    notify.classList.add(type ? type : getRandomType());

    notify.innerText = message ? message : getRandomMessage();

    notification.appendChild(notify);

    setTimeout(() => {
        notify.remove()
    }, 3000); //3s
}

function getRandomMessage() {
    return messages[
        Math.floor(
            Math.random() * messages.length
        )];
}

function getRandomType() {
    return types[
        Math.floor(
            Math.random() * types.length
        )];
}