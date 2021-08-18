document.getElementById('login-submit').addEventListener('click', function(event){
    const userMail = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    if(userMail == 'user' && password == '12345'){
        window.location.href = 'https://s-a-pran.github.io/functional-baper-bank/banking.html';
    }
    else{
        alert('wrong user or password');
    }
});
