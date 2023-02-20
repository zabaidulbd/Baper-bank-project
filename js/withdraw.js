document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('user-withdraw');
    const withdrawAmount = withdrawField.value;
    const withdrawTotal = parseFloat(withdrawAmount);

    const afterWithdraw = document.getElementById('withdraw-total');
    const afterWithdrawAmount = afterWithdraw.innerText;
    const afterWithdrawTotal = parseFloat(afterWithdrawAmount);

    const totalWithdraw = withdrawTotal + afterWithdrawTotal;
    afterWithdraw.innerText = totalWithdraw;

    const amountBalance = document.getElementById('balance-amount');
    const newAmountBalance = amountBalance.innerText;
    const newTotalAmountBalance = parseFloat(newAmountBalance);

    const totalNewBalance = newTotalAmountBalance - totalWithdraw;
    amountBalance.innerText = totalNewBalance;
    withdrawField.value = '';


})