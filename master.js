// window.onload = function() {
// window.alert("hi")
// }

let btnAud = document.querySelector("#btnAud")
let btnAudI = document.querySelector("#btnAud i")
let aud = document.querySelector("audio")

btnAud.onclick = function () {
    if (btnAudI.classList.value === "fas fa-play") {
        aud.play()
        btnAudI.classList.remove('fas', 'fa-play')
        btnAudI.classList.add('fas', 'fa-pause')
    } else {
        aud.pause()
        btnAudI.classList.remove('fas', 'fa-pause')
        btnAudI.classList.add('fas', 'fa-play')
    }
};
let btnNav = document.querySelector("#btnNav")
let btnNavI = document.querySelector("#btnNav i")
let header = document.querySelector(".header")
let showCase = document.querySelector(".showcase")
let showCaseA = document.querySelectorAll("#pointer")
btnNav.onclick = function () {
    if (btnNavI.classList.value === "fas fa-bars") {
        btnNavI.classList.remove('fas', 'fa-bars');
        btnNavI.classList.add('fas', 'fa-ban');
        showCase.style.transition = "0.3s";
        showCase.style.opacity = "1";
        header.style.paddingRight = "300px";
        btnNav.style.marginLeft = "-60px"
        btnNav.style.color = "black"
        btnAud.style.cssText = "transform:translate(-166%, -170%) ";
        // showCase.style.display = "block";
        range.style.cssText = "transform:translate(-150%, -170%) "
            showCaseA[0].style.cursor = "pointer";
            showCaseA[1].style.cursor = "pointer";
            showCaseA[2].style.cursor = "pointer";
            showCaseA[0].style.display = "block";
            showCaseA[1].style.display = "block";
            showCaseA[2].style.display = "block";
    } else if (btnNavI.classList.value === "fas fa-ban") {
        btnNavI.classList.remove('fas', 'fa-ban')
        btnNavI.classList.add('fas', 'fa-bars')
        showCase.style.opacity = "0";
        // showCase.style.display = "none";
        header.style.paddingRight = "0"
        btnNav.style.marginLeft = "0"
        btnAud.style.cssText = "transform:translate(-50%, -170%) ";
        range.style.cssText = "transform:translate(-50%, -170%) ";
            showCaseA[0].style.cursor = "defult";
            showCaseA[1].style.cursor = "defult";
            showCaseA[2].style.cursor = "defult";
            showCaseA[0].style.display = "none";
            showCaseA[1].style.display = "none";
            showCaseA[2].style.display = "none";
    }
}
let music = new Audio()
let vU = document.querySelector("#vU")
let vL = document.querySelector("#vL")
let range = document.querySelector("#range")
console.log(range)
range.addEventListener('input', function (e) {
    aud.volume = range.value / 100;

}, false)

