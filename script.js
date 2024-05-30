document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    let hour = today.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    document.querySelector('header h1').textContent = greeting + " Welcome to My Website";
});