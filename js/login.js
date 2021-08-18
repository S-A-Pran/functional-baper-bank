document.getElementById('login-submit').addEventListener('click', function(event){
    const userMail = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    if(userMail == 'user' && password == '12345'){
        window.location.href = '../banking.html';
    }
    else{
        alert('wrong user or password');
    }
});
