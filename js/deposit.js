document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('user-deposit');
    const depositValue = depositField.value;
    const previousDepositValue = parseFloat(depositValue);

    const depositAmount = document.getElementById('deposit-amount');
    const depositTotal = depositAmount.innerText;
    const afterDepositTotal = parseFloat(depositTotal);

    const totalDepositAmount = previousDepositValue + afterDepositTotal;
    depositAmount.innerText = totalDepositAmount;
    depositField.value = '';

    const balanceAmount = document.getElementById('balance-amount');
    const balanceTotal = balanceAmount.innerText;
    const afterBalanceTotal = parseFloat(balanceTotal);

    const totalBalance = previousDepositValue + afterBalanceTotal;
    balanceAmount.innerText = totalBalance;


})