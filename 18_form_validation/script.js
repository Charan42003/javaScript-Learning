let userName = document.querySelector('#userName')
let password = document.querySelector('#password')
let userError = document.querySelector('#user_error')
let passwordError = document.querySelector('#password_error')
let flag = 1;
console.log(userError)
validform = ()=> {
    if(userName.value == '') {
        userError.innerText = "User Name Empty"
        flag = 0;
    } else if(userName.value.length < 3) {
        userError.innerText = "User name must contain min 3 char"
        flag = 0;
    } else {
        userError.innerText = '';
        flag = 1;
    }

    if(password.value == '') {
        passwordError.innerText = "Password Empty"
        flag = 0
    } else if(password.value.length < 3) {
        passwordError.innerText = "Password must contain min 3 char"
        flag = 0;
    } else {
        passwordError.innerText = '';
        flag = 1;
    }

    if(flag == 0) {
        return false;
    }
    else if(flag == 1) {
        alert("form Submitted")
        return true;
    }
}