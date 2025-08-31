"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringPromise = void 0;
exports.stringPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
});
// stringPromise.then((value) => {
//     console.log(value)
// });
