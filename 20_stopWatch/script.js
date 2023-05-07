let s = 1;
let m = 0;
let h = 0;
let hr = document.querySelector('#hr')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
let play;
flag = 1;

//START FUNCTION
function start() {
    if( flag == 1){
        play = setInterval(function() {
            if(s < 10) {
                s = `0${s}`;
                sec.innerHTML = s;
            } else {
                sec.innerHTML = s;
            }
            s++;
            if(s == 60) {
                m++;
                if(m < 10) {
                    m = `0${m}`;
                    min.innerHTML = m;
                } else {
                    min.innerHTML = m;
                }  
                s = 0;
            }
            if(m == 60) {
                h++;
                if(h < 10) {
                    h = `0${h}`;
                    hr.innerHTML = h;
                } else {
                    hr.innerHTML = h;
                }  
                m = 0;
            }
        }, 1000);
        flag = 0;
    }
    document.querySelector('#start').innerHTML = "Start"
}

// STOP FUNCTION 
function stopp() {
    document.querySelector('#start').innerHTML = "Resume"
    clearInterval(play);
    flag = 1;
}

// RESET FUNCTION 
function reset() {
    s = 1;
    m = h = 0;
    clearInterval(play);
    hr.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    document.querySelector('#start').innerHTML = "Start"
    flag = 1;
}
