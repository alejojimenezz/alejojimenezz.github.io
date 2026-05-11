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

function openWork(evt, category) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
}