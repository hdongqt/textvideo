const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modeText =$(".mode-text");
const control = $(".control");
const content = $(".content");
const r = $(":root");
const controlBtn = $(".control");


const handelMode = () =>{
    var audio = document.getElementById("audio");
    audio.play();
    let rs = getComputedStyle(r).getPropertyValue('--main');
    content.classList.toggle("active");
    switch (rs) {
        case 'black':
            r.style.setProperty('--main','white');
            modeText.innerText = "Light Mode";
            control.style.backgroundColor = "black";
            break;
         default:
            r.style.setProperty('--main','black');
            modeText.innerText = "Dark Mode";
            control.style.backgroundColor = "white";
            break;
 }
}
controlBtn.onclick = handelMode;



function play() {
  
  }