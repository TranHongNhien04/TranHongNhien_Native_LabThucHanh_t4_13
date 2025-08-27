"use strict";
const stringPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
});
stringPromise.then((value) => {
    console.log(value);
});
