# Interacting programatically

I have mostly been intereacting with Geth via mini node.js programs. 

For example, the following will interrogate the blockchain for block timing and difficulty on all blocks since genesis: 

```node
// uses web3 interface to get the timing and difficulty from all blocks
// (synchronous and very slow)

const Web3 = require('web3');
const web3geth1 = new Web3();
const web3geth2 = new Web3();

setProvider(web3geth1, '192.168.99.100', 8541);
setProvider(web3geth2, '192.168.99.100', 8542);

function setProvider(web3, gethHost, gethPort) {
    var url = 'http://'+gethHost+':'+gethPort;
    console.log('web3 connect to:',url);
    web3.setProvider(new web3.providers.HttpProvider(url));
}

var bn = web3geth1.eth.blockNumber

var i

for (i = 0; i <bn; i++) {

    var t0 = web3geth1.eth.getBlock(i).timestamp;
    var t1 = web3geth1.eth.getBlock(i +1).timestamp;
    var difficulty = web3geth1.eth.getBlock(i).difficulty;
    var miner = web3geth1.eth.getBlock(i).miner;

    console.log("block: ",i, "difficulty: ", difficulty, " Time: ", t0, " dif to last: ", t1 - t0, " mined by: ", miner);
}
```

I would run this from the command line: 
```
$ node web3_poke.js 
```

The output would log to the command line


## Using the APIs

Geth has the web3 javascript/node API and an JSON rpc API.

Web3 docs: https://github.com/ethereum/wiki/wiki/JavaScript-API

JSON rpc docs: https://github.com/ethereum/wiki/wiki/JSON-RPC


In order to use these geth must be started with the correct flags: 

```
 --rpc                                                                 Enable the HTTP-RPC server
 --rpcaddr "localhost"                                                 HTTP-RPC server listening interface
 --rpcport "8545"                                                      HTTP-RPC server listening port  --rpcapi "eth,net,web3"                                               API's offered over the HTTP-RPC interface
 --rpccorsdomain                                                       Domains from which to accept cross origin requests (browser enforced)
```

(Note, the web3 API seems to implement a subset of the rpc api commands so if web3 doesn;t have it rpc might)

There are also the doc for the management apis which provide interfaces beyond web3/eth: https://github.com/ethereum/go-ethereum/wiki/Management-APIs


## Interacting with the web3 API

From Node you can interact with geth via the web3 API

You will need to include the following code (or something similar) at the top of the node file. This will give you a web3 object which you can use to communicate with a geth instance

```node
// web3_setup.js

// require the Web3 module
const Web3 = require('web3');

// set up the web3 object for communication with the geth instance (at 192.168.99.100:8541)
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers - set to docker container's external ip:port
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.99.100:8541"));
}

// Test you get a response when using the web3 object
var res = web3.eth.coinbase;
console.log(res);
```

run this with: 

```node
$ node web3_setup.js
```

to give command line output of: 

``` 
0x04d6512f6d0d05af47095c52fb35fa00796d18ed
```
(ie my coinbase)



## Interacting with the rpc API

Similarly you can use the rpc API, the set up is as follows: 

```node.js
// rpc_setup.js

// require jayson module
var jayson = require('jayson');

// set up a client1 object for making json requests over http
var client1 = jayson.client.http('http://192.168.99.100:8541');

// test it works by calling eth_coinbase,  note asynchronous function call, requires a call back
var req1 = client1.request('eth_coinbase', [], logResponse);

// call back
function logResponse(err, response){
    if (err) {
        console.log('err: ',JSON.stringify(err));
    } else {
        console.log('response: ',JSON.stringify(response));
    }
}
```

run this with: 

```node
$ node rpc_setup.js
```

to get: 

```
response:  {"jsonrpc":"2.0","id":"182cc92a-ac30-4bf9-acf0-e39ccdaaaa71","result":"0x04d6512f6d0d05af47095c52fb35fa00796d18ed"}

```