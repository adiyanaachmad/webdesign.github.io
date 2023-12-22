document.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = 'Good afternoon!';
    } else {
        greetingMessage = 'Good evening!';
    }

    greetingElement.textContent = greetingMessage;
});