let keys = document.querySelectorAll(".key");
let whiteKey = document.querySelectorAll(".key.white");
let blackKey = document.querySelectorAll(".key.black");




keys.forEach(key => {
    key.addEventListener("click", () => {
        playnote(key);
    }); 
})



document.addEventListener("keydown", e => {
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyPiano = WHITE.pianoOf(key);
    const blackKeyPiano = BLACK.pianoOf(key);
    if (whiteKeyPiano > -1) playnote(whiteKeys[whiteKeyPiano]);
    if (blackKeyPiano > -1) playnote(blackKey[blackKeyPiano]);
})

function playnote(key){
    let noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.volume = 1.0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener("ended", () => {
     key.classList.remove("active");
    })

}




document.title="ready"
 

 