import { Pause } from "phosphor-react";

export function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
    document.getElementById('btn-play').style.display = 'none'
    document.getElementById('btn-pause').style.display = 'block'
     
    
}
export function pauseAudio() {
    let x = document.getElementById("myAudio");
    x.pause();
    document.getElementById('btn-pause').style.display = 'none'
    document.getElementById('btn-play').style.display = 'block'
    
}  