let btn = document.querySelectorAll('.drum');

// LOOP TO TARGET ALL THE ELEMENTS WITH THIS CLASS "drum"
for(let i = 0; i < btn.length; i++){

    // MOUSE CLICK FUNCTION
    btn[i].addEventListener('click', function() {
        //FUNCTION TO ANIMATE ON CLICK
        animationOnAction(btn[i]);
        //FUNCTION TO PLAY DRUM SOUND ON CLICK
        playAudio(this.innerText);
    })

    // KEYPRESS FUNCTION
    btn[i].addEventListener('keypress', function(e) {
        let key_val = e.key;
        // KEYPRESS ANIMATION
        let activeBtn = document.querySelector('.' + key_val);
        // FUNCTION TO ANIMATE ON KEYPRESS
        animationOnAction(activeBtn);
        //FUNCTION TO PLAY DRUM SOUND ON KEYPRESS
        playAudio(key_val);
    })
}

function playAudio(event) {
    let audio = new Audio();

    switch(event) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case "j":
            audio = new Audio('sounds/snare.wav');
            break;
        case "k":
            audio = new Audio('sounds/crash.mp3');
            break;
        case "l":
            audio = new Audio('sounds/kick-bass.wav');
            break;
        }
    audio.play();
}

function animationOnAction(e) {
    e.classList.add('pressed');
    setTimeout(function(){
        e.classList.remove('pressed');
    }, 100);
}