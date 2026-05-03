alert("Portfolio under construction.");

function toggleMenu() {
    const item = document.getElementById('mobileMenu');
    const item2 = document.getElementById('mobileIcon');
    
    item.classList.toggle('open');
    item2.classList.toggle('active');

    if (item2.classList.contains('active')) {
        item2.innerHTML = "&#10006;";
    } else {
        item2.innerHTML = "&#9776;";
    }
}

document.querySelector('.navbar-toggle').addEventListener('click', toggleMenu);