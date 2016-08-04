# Simple Dapp

1) Need to have MEtaMask installed in chrome + 

* Pointed to the geth you want (eg Dockerised local geth)
* Have created two accounts + 
* Funded the first account with a few ether (do in geth console)

2) Copy this directory files to a local directory

3) Change to that directory

4) Change the first two lines of app.js to be the addresses in the wallet  eg: 
```node
var addr_1 = "0x1f931a927a418a6d2b66f84057afe0101716347e"; 
```
(needs to be all lowercase - MM might kick out mixed case, can get by web3.eth.coinbase from console )

4) run $ sh start_local_server.sh (starts a local python server to serve up the web page) 

5) open localhost:8000 

6) you can check the two account balances + send 0.001 ether between accounts -> watch the consol output

(remember to be mining on geth)