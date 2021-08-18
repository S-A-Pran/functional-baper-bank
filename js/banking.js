function updateValue(currentFieldId,inputFieldId){
    const previousTotal = document.getElementById(currentFieldId).innerText;
    const newInput = document.getElementById(inputFieldId).value;
    const updateTotal = parseFloat(previousTotal) + parseFloat(newInput);
    document.getElementById(currentFieldId).innerText = updateTotal;
    //clearing input field
    
}

function balanceUpdate(currentBalance,inputFieldId,isTrue){
    //debugger;
    const newDepositInput = document.getElementById(inputFieldId).value;
    if(isTrue == true){
        updateBalance = parseFloat(currentBalance) + parseFloat(newDepositInput);
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        updateBalance = parseFloat(currentBalance) - parseFloat(newDepositInput);
        document.getElementById('account-balance').innerText = updateBalance;
    }
    document.getElementById(inputFieldId).value = '';
}

//deposit btn field data handling
document.getElementById("deposit-btn").addEventListener('click',function(event){
    updateValue('deposit-total','deposit-input');
    //updating Balance
    const currentBalance = document.getElementById('account-balance').innerText;
    balanceUpdate(currentBalance,'deposit-input',true);
});


//withdraw btn handler

document.getElementById("withdraw-btn").addEventListener('click', function(event){
    updateValue('withdraw-amount','withdraw-input');
    //updating Balance
    const currentBalance = document.getElementById('account-balance').innerText;
    balanceUpdate(currentBalance,'withdraw-input',false);
});