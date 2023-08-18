document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    console.log(newWithdrawAmount);

    const previousWithdrawTotalElement = document.getElementById('withdraw-total') ;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalElement.innerText);
    console.log(previousWithdrawTotal);

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    console.log(currentWithdrawTotal)

    // set the total withdraw 
    previousWithdrawTotalElement.innerText = currentWithdrawTotal;

     // get balance current total
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      // calculate current total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set the balance 
    balanceTotalElement.innerText = newBalanceTotal;
    
    // clear the input field
    withdrawField.value = '';
    
})