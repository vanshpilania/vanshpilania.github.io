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

    document.querySelectorAll('header h1').forEach(function(header) {
        header.innerHTML = `<span class="greeting">${greeting}</span> Welcome to My Website`;
    });
});
