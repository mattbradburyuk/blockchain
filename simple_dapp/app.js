
// add in two public keys from your wallet
var addr_1 = "0x1f931a927a418a6d2b66f84057afe0101716347e";
var addr_2 = "0xfaf24b5df147e4c83b59b91e08e8effbc680019e";

window.onload = function() {
    console.log('onload called');
    update_account();
}


function update_account(){
    var account_element = document.getElementById("account");
    account_element.innerHTML = web3.eth.coinbase;
}

function check_bals(){
    console.log('check_bals called');
    
    // check wallet 1
    web3.eth.getBalance(addr_1,function(err,response){console.log("wallet 1 value: ",response.c[0]);} );

    // check wallet 2
    web3.eth.getBalance(addr_2,function(err,response){console.log("wallet 2 value: ",response.c[0]);} );

    update_account();
}

function send_eth(){
    console.log('send_eth called');
    update_account();

    var coin = web3.eth.coinbase;

    if (coin === addr_1) {
        // can only send from coinbase
        web3.eth.sendTransaction({from: web3.eth.coinbase , to: addr_2, value: web3.toWei('0.001', 'ether'), gas: '210000'}, logResponse);
    } else{
        console.log("coinbase !== wallet 1 address, change selected wallet ")
    }
}



// call back
function logResponse(err, response){
    if (err) {
        console.log('err: ',JSON.stringify(err));
    } else {
        console.log('response: ',JSON.stringify(response));
    }
}