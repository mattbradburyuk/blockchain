# Quick demo on promises in javascript running in the browser

## To run:

1) start the local server by running: 

```bash
$ sh start_local_server.sh
```

2) in the browser go to: 

```http
http://localhost:8000/js_test.html
```

3) open up the console so you can see the logging

4) Hit the button to fire the js_test() function in the javascript


## What it does:

The code in js_test.js sets up a number of promises then fires them one after another:

```js
function js_test(){

    prom_no_return()
        .then(prom_with_return)
        .then(pass_though)
        .then(prom_with_pass_through)
        .then(combi)
        .then(end_success,end_error);
}
```


Looking at the code shows how promises can be chained together and you can pass values through the promise chain

The page i got most of this from is: http://www.html5rocks.com/en/tutorials/es6/promises/
