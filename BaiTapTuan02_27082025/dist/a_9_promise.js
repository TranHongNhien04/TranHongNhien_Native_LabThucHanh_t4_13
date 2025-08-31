"use strict";
function filterEvenNum(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}
filterEvenNum([1, 2, 3, 6, 0, 1, 2, 10, 1, 1, 0])
    .then(res => {
    console.log("Even numbers: ", res);
});
