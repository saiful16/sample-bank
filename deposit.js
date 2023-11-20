document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // const newDepositAmount = parseFloat(depositAmount)

    const depositTotalElement = document.getElementById("deposit-total");
    const perviousDepositTotal = parseFloat(depositTotalElement.innerText);

    const curretDepositTotal = perviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = curretDepositTotal;

    const balanceTotalElement = document.getElementById('total-amount')
    const priviousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const curretnBalanceTotal = priviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = curretnBalanceTotal;
    
    depositField.value = ''
}) 