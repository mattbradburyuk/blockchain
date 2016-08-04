# Using Meta Mask

## What do we need to run Dapps in Chrome/MetaMask

Actions from js running in the Dapp:

* Call web3 methods on remote geth?
* Call web3 methods on MetaMask (eg web3.eth.coinbase returns wallet coinbase not geth's - what gets passed through)

* Call smart contract methods
* Call smart contract methods with args

* Send ether
* Send transaction to smart contract
* Send transaction to smart contract with Args

* Listen to events??

* Able to change coinbase programatically (not sure this can be done, security???)

What do we need to be able to use Dapps with Chrome/Meta mask

* A way to serve the files of the Dapp to chrome (without a remote centralised server)
* Promise framework to wait for ethereum events before taking an action
* Way to get the accounts into the js (could always use web3.eth.coinbase, is this enough



##Notes

web3.eth.accounts only returns the current Wallet selected account

web3.eth.coinbase returns the selected wallet account not the geth coinbase

python local server from : https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally


How to move a private key into geth: 
    1) Get private key (eg from MetaMask)
    2) Save private key to a file in same directory as geth (no "" or 0x)
    3) $ geth account import <filename>
    4) This will create a key file in .ethereum/keystore

Keys are not case sensitive however strings Meta Mask spits out random capitalisation (something to do with a check sum)

