"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b_18_async_await_1 = require("./b_18_async_await");
async function fetchUserWithTimeout(id, timeout) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Request timed out after 2 seconds"));
        }, timeout);
        (0, b_18_async_await_1.fetchUser)(id)
            .then(user => {
            clearTimeout(timer);
            resolve(user);
        })
            .catch(err => {
            clearTimeout(timer);
            reject(err);
        });
    });
}
async function runFetchUser() {
    try {
        const userData = await fetchUserWithTimeout(1, 2000);
        console.log(userData);
    }
    catch (err) {
        console.error(err.message);
    }
}
runFetchUser();
