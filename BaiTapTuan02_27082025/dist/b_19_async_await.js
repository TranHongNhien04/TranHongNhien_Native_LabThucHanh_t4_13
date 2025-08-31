"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b_18_async_await_1 = require("./b_18_async_await");
async function fetchUers(ids) {
    const promises = ids.map(id => (0, b_18_async_await_1.fetchUser)(id));
    return Promise.all(promises);
}
async function runFetchUsers() {
    console.log("Fetching...");
    const users = await fetchUers([1, 2, 3, 4, 5]);
    console.log("Fetched: ", users);
}
runFetchUsers();
