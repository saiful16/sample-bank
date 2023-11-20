// add event hander with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 get the email address 
    // always remember to use .value to get value from input field

    const emailField = document.getElementById('user-email')
    const email = emailField.value
    // console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    if(email === 'abc@gmail.com' && password === 'secret'){
        window.location.href='bank.html'
    }else{
        alert('You are not a valid user')
    }

})