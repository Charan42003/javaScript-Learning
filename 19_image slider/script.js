let flag = 0;
let slide = document.querySelectorAll('.wrap');

slideShow(flag);
function control(i) {
    flag += i;
    if(flag < 0){
        flag = slide.length-1; 
    }
    if(flag > slide.length-1) {
        flag = 0;
    }
    slideShow(flag);
}

function slideShow(e) {
    console.log(e)
    for (let x of slide) {
        x.style = "";
    }
    slide[e].style.display = "block";

}