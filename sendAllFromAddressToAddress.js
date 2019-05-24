function sendAllFromAddressToAddress(from, to) {
	var balance = eth.getBalance(from);
	if (balance <= 0) {
		console.log("Wallet " + from + " has a balance of " + balance);
		return;
	}
	// Gas Limit
	var gas = new BigNumber(21000);

	// Get Gas Price
	var gasPrice = web3.eth.gasPrice;

	// Calculate cost of gas
	var cost = gas.mul(gasPrice);

	// Calculate amount to send minus the cost of gas
	var amount = balance.sub(cost);

	// Send eth
	var tx = eth.sendTransaction({from: from, to: to, gas: gas, gasPrice: gasPrice, value: amount});

	// Display transaction information
	if (tx) {
		console.log("Sent " + amount + " wei to " + to + " from " + from + ", transaction hash is " + tx);
		return true;
	}

	// If we got here somthing went wrong
	console.log("Failed to send " + amount + " wei to " + to + " from " + from);
	return false;

};
