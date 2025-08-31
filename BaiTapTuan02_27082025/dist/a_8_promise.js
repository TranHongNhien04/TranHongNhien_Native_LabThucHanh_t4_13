"use strict";
function square(x) {
    return new Promise((resolve) => {
        resolve(x * x);
    });
}
function double(x) {
    return new Promise((resolve) => {
        resolve(x * 2);
    });
}
function add5(x) {
    return new Promise((resolve) => {
        resolve(x + 5);
    });
}
square(2)
    .then(res => {
    console.log("Square: ", res);
    return double(res);
})
    .then(res => {
    console.log("Double: ", res);
    return add5(res);
})
    .then(res => {
    console.log("Add 5: ", res);
});
