if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.getElementById("favicon").href = "img/logo-white.png";
}
else {
    document.getElementById("favicon").href = "img/logo-color.png";
}

AOS.init({
    duration: 1500
});

let ownFiles = document.querySelectorAll(".own-file");
let nameOwnFiles = new Array();

if (ownFiles.length != 0) {
    ownFiles.forEach(ownFile => {
        nameOwnFiles.push(ownFile.dataset.nameFile);
    });
}
nameOwnFiles.push(`a Cati's project`);

const typed = new Typed('#file', {
    strings: nameOwnFiles,
    typeSpeed: 100,
    backDelay: 5000,
    loop: true
});