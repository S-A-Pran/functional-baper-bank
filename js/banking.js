function updateValue(currentFieldId,inputFieldId,isTrue){
    const currentBalance = document.getElementById("account-balance").innerText;
    const currentBalanceAmount = parseFloat(currentBalance);
    const previousTotal = document.getElementById(currentFieldId).innerText;
    const newInput = document.getElementById(inputFieldId).value;
    if(isTrue == true){
        if(parseFloat(newInput)>0){
            const updateTotal = parseFloat(previousTotal) + parseFloat(newInput);
            document.getElementById(currentFieldId).innerText = updateTotal;
        }
        else{
            alert('Wrong Input');
        }
    }
    else{
        if(currentBalanceAmount > parseFloat(newInput) && parseFloat(newInput)>0){
            const updateTotal = parseFloat(previousTotal) + parseFloat(newInput);
            document.getElementById(currentFieldId).innerText = updateTotal;  
        }
        else{
            alert('Wrong Input');
        }
    }
}

function balanceUpdate(currentBalance,inputFieldId,isTrue){
    //debugger;
    const newInput = document.getElementById(inputFieldId).value;
    if(isTrue == true){
        if(parseFloat(newInput)>0){
            updateBalance = parseFloat(currentBalance) + parseFloat(newInput);
            document.getElementById('account-balance').innerText = updateBalance;
        }
    }
    else{
        if(parseFloat(newInput)<parseFloat(currentBalance) && parseFloat(newInput)>0){
            updateBalance = parseFloat(currentBalance) - parseFloat(newInput);
            document.getElementById('account-balance').innerText = updateBalance;
        }
    }
    document.getElementById(inputFieldId).value = '';
}

//deposit btn field data handling
document.getElementById("deposit-btn").addEventListener('click',function(event){
    updateValue('deposit-total','deposit-input',true);
    //updating Balance
    const currentBalance = document.getElementById('account-balance').innerText;
    balanceUpdate(currentBalance,'deposit-input',true);
});

//withdraw btn handler
document.getElementById("withdraw-btn").addEventListener('click', function(event){
    updateValue('withdraw-amount','withdraw-input',false);
    //updating Balance
    const currentBalance = document.getElementById('account-balance').innerText;
    balanceUpdate(currentBalance,'withdraw-input',false);
});