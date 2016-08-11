
function js_test(){

    prom_no_return()
        .then(prom_with_return)
        .then(pass_though)
        .then(prom_with_pass_through)
        .then(combi)
        .then(end_success,end_error);

}

function prom_no_return(){
    return new Promise(function(resolve,reject){
        console.log("prom_no_return called");
        resolve();
    });
}

function prom_with_return() {
    return new Promise(function (resolve, reject) {
        // do a thing, possibly async, then…
        console.log("prom_with_return called");
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
}

function pass_though(val) {
    console.log("pass_through called:, val: ", val);
    return val
}

function prom_with_pass_through(val){
    return new Promise(function(resolve,reject){
        console.log("prom_with_pass_through called, val: ", val);
        resolve(val);
    });
}

function combi(val){
    console.log("combi called");
    return prom_with_pass_through(val).then(pass_though);
}


function end_success(result) {
    console.log("End result: ",result); // "Stuff worked!"
}
function end_error(err) {
    console.log("End error: ",err); // Error: "It broke"
}