document.getElementById('btn-withdraw').addEventListener('click', function () {
    const userWithdrawString = document.getElementById('withdraw-field');
    const userwithdrawAmount = userWithdrawString.value;
    const userwithdraw = parseFloat(userwithdrawAmount);

    const currentWithdrawstring = document.getElementById('withdraw-total');
    const currentWithdrawAmount = currentWithdrawstring.innerText;
    const currentWithdraw = parseFloat(currentWithdrawAmount)

    const totalWithdraw = currentWithdraw + userwithdraw;
    currentWithdrawstring.innerText = totalWithdraw;

    const userTotalBalanceString = document.getElementById('total-amount');
    const userTotalBalanceAmount = userTotalBalanceString.innerText;
    const userTotalBalance = parseFloat(userTotalBalanceAmount)

    const currentTotalBalance = userTotalBalance - currentWithdraw;
    userTotalBalanceString.innerText = currentTotalBalance;

    userWithdrawString.value = ""

})