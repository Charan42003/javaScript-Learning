const c = document.querySelector('#far');
const f = document.querySelector('#cel');

c.addEventListener('input', function() {
    let cal = this.value;
    let far;
    far = (cal - 32) * (5/9);
    if(!Number.isInteger(far)) {
        far = far.toFixed(4);
    }
    f.value = far;
});

f.addEventListener('input', function() {
    let far = this.value;
    let cal;
    cal = (far * (9/5)) + 32;
    if(!Number.isInteger(cal)) {
        cal = cal.toFixed(4);
    }
    c.value = cal;
});