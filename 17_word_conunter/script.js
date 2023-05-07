let text = document.querySelector('#text_box');
let char = document.querySelector('#character');
let word = document.querySelector('#word');

text.addEventListener('input', function() {
    let value = this.value;
    let array = value.split(' ');
    let word_count = [];
    array.forEach(element => {
        if(element !== ""){
            word_count.push(element);
        }
    });
    char.textContent = value.length;
    word.textContent = word_count.length;

})