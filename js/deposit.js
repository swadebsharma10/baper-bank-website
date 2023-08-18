document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-filed');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount =parseFloat(newDepositAmountString)
    // console.log(typeof newDepositAmount)
    

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // console.log(typeof previousDepositTotal)
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // console.log(currentDepositTotal, newDepositAmount,previousDepositTotal)
    depositTotalElement.innerText = currentDepositTotal;


    // get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;


    balanceTotalElement.innerText = currentBalanceTotal

    

    // clear the deposit field
    depositField.value = '';

})