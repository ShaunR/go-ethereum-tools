## Go Ethereum Tools

A collection of tools for go ethereum (geth).

## Loading the tools into geth

Before you can start using these tools you will need to load them first. This can be done in a few different ways.
```
geth --preload script.js attach
```
or
```
geth attach
> loadScript('script.js');
```

## Available Functions

### getBalances(unit)
Unit is optional but can be set to any valid Ethereum unit, for example if you set unit to "ether" the displayed balance values would be converted from wei to ether.
```
geth attach
> loadScript('getBalances.js');
true
> getBalances();
0x0000000000000000000000000000000000000001: 100 wei
0x0000000000000000000000000000000000000002: 200 wei
0x0000000000000000000000000000000000000003: 300 wei
Total Balance: 600 wei
```

### sendAllFromAddressToAddress(from, to)
This function can be used to send the entire balance from one wallet to another. This function assumes a gas limit of 21000, gets the gas price from the network, calculates the cost and subtracts that from the wallets balance. Whats left is whats sent.

Careful! This function gets the gas price from the network! If the gas price is ridiculously high you could end up paying a very high transaction fee!
```
geth attach
> loadScript('sendAllFromAddressToAddress.js');
true
> sendAllFromAddressToAddress('0x0000000000000000000000000000000000000001', '0x0000000000000000000000000000000000000002');
Sent 100 wei to 0x0000000000000000000000000000000000000002 from 0x0000000000000000000000000000000000000001, transaction hash is 0x0000000000000000000000000000000000000000000000000000000000000000
```


## Donate
If you found any of these tools useful and would like to show your appreciation you can do so using one of the following methods.

- Ethereum: 0xc0685c1221d97e062182c665930f713bd5b5c171
- Bitcoin: 39hZC4y1W5uLv4KDdV447xgMmAtXSHtzhi
- Litecoin: MNEFQnt8A44tMWnHtRnKxiQfzFiJfKDSNq
- BNB: 0xc0685c1221d97e062182c665930f713bd5b5c171
- BitcoinCash: qrypak5f3k6rjtg5sq3jxda2hd528un32c8zt5073f
