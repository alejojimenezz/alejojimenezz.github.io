//alert("Portfolio under construction.");

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

// function openWork(evt, category) {

//     var i, tabcontent, tablinks;

//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(category).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// function openQRioso() {
//     const element = document.getElementById("QRiosoDialog");
//     const elementText = document.getElementById("QRiosoButton")
//     elementText.classList.toggle("bold-text");
//     if (element.open == true) {
//         element.open = false;
//     } else {
//         element.open = true;
//     }
// }

const projects = {
    qrioso: {

        title: "QRioso",

        description:
            "Desktop application for QR generation.",

        technologies: [
            "Python",
            "Tkinter"
        ],

        github:
            "https://github.com/alejojimenezz/QRioso"
        
        // download:
        //     "./assets/qrioso.exe"
    },

    nfc: {

        title: "NFC Reader / Writer",

        description:
            "Arduino UNO based NFC reader and writer.",

        technologies: [
            "Arduino UNO",
            "C++",
            "NFC"
        ],

        github:
            "https://github.com/alejojimenezz/ArduinoNFC-Reader-Writer"
    },

    vscextension: {

        title: "Reminder Pop-up VSC extension",

        description:
            "Visual Studio Code for notification reminders.",
        
        technologies: [
            "Javascript"
        ],

        github:
            "https://github.com/alejojimenezz/Reminder-POP-UP"
    },

    lsc: {

        title: "LSC recognition",

        description:
            "Colombian sign language alphabet recognition.",
        
        technologies: [
            "Python",
            "OpenCV",
            "Mediapipe"
        ],

        github:
            "https://github.com/alejojimenezz/Academic-Projects/tree/main/reconLSC"
    },

    pid: {

        title: "PID controllers",

        description:
            "PID signal controllers applied to microcontrollers.",
        
        technologies: [
            "C++",
            "Python",
            "Arduino",
            "ESP32"
        ]
    },

    eniq: {

        title: "Programming sessions",

        description:
            "Teaching sessions directed towards university students.",
        
        technologies: [
            "Python",
            "Git",
            "Github"
        ]
    }
};

function showCategory(evt, categoryId){

    document
        .querySelectorAll(".project-list")
        .forEach(item => {
            item.classList.remove("active");
        });

    document
        .querySelectorAll(".category")
        .forEach(item => {
            item.classList.remove("active");
        });

    document
        .getElementById(categoryId)
        .classList.add("active");

    evt.currentTarget
        .classList.add("active");
}

function showProject(projectId){

    const project = projects[projectId];

    document.getElementById("placeholder")
            .style.display = "none";

    document.getElementById("projectContent")
            .style.display = "block";

    document.getElementById("projectTitle")
            .textContent = project.title;

    document.getElementById("projectDescription")
            .textContent = project.description;

    const githubContainer = document.getElementById("githubContainer");
    const githubLink = document.getElementById("projectGithub");

    if(project.github){
        githubContainer.style.display = "block";
        githubLink.href = project.github;
    } else{
        githubContainer.style.display = "none";
        githubLink.href = "";
    }

    const downloadContainer = document.getElementById("downloadContainer");
    const downloadLink = document.getElementById("projectDownload");

    if(project.download){
        downloadContainer.style.display = "block";
        downloadLink.href = project.download;
    } else{
        downloadContainer.style.display = "none";
        downloadLink.href = "";
    }

    const technologies =
        document.getElementById("projectTechnologies");

    technologies.innerHTML = "";

    project.technologies.forEach(tech => {

        const li = document.createElement("li");

        li.textContent = tech;

        technologies.appendChild(li);

    });    
}