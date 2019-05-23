/**
 * The getBalances function will display the balance of each account and a
 * total balance of all accounts. If a unit type of passed to the function
 * all balances will converted to that unit.
 *
 * Example: getBalances();
 * Example: getBalances("gwei");
 * Example: getBalance("ether");
 */
function getBalances(unit) {
	// Default unit is wei
	if (!unit) {
		unit = 'wei';
	}

	// Var to hold total balance of all accounts
	var totalBalance = new BigNumber(0);

	for (var accountNumber in eth.accounts) {

		// Account Address
		var account = eth.accounts[accountNumber];

		// Account Balance
		var balance = eth.getBalance(account);

		// display Account balance
		console.log(account + ': ' + web3.fromWei(balance, unit) + ' ' + unit);

		// Add to total balance
		totalBalance.add(balance);
	}

	// Display total balance
	console.log('Total Balance: ' + web3.fromWei(totalBalance, unit) + ' ' + unit);

};
