const Web3 = require('web3');
const web3 = new Web3();
// const web3geth2 = new Web3();

setProvider(web3, '192.168.99.100', 8541);
// setProvider(web3geth2, '192.168.99.100', 8542);

function setProvider(web3, gethHost, gethPort) {
    var url = 'http://'+gethHost+':'+gethPort;
    console.log('web3 connect to:',url);
    web3.setProvider(new web3.providers.HttpProvider(url));
}

var coin = web3.eth.coinbase;
var addr_1 = "0x1F931a927A418a6D2b66f84057Afe0101716347E";
var addr_2 = "0xfaF24B5Df147e4c83B59b91e08E8effbC680019E";


web3.personal.unlockAccount(coin, "mattspass");
web3.personal.unlockAccount(addr_2, "newpass");


var v = web3.toWei('10', 'ether');

console.log("v:",v);

// web3.eth.sendTransaction({from:addr_2, to: addr_1, value: v });

// web3.eth.sendTransaction({from:coin, to: addr_2, value: v });

// send from coin to wallet 2
web3.eth.sendTransaction({from: coin, to: addr_1, value: web3.toWei('10', 'ether'), gas: '210000'}, logResponse);


// call back
function logResponse(err, response){
    if (err) {
        console.log('err: ',JSON.stringify(err));
    } else {
        console.log('response: ',JSON.stringify(response));
    }
}