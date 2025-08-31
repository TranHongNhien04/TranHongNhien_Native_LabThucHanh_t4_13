"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_1_promise_1 = require("./a_1_promise");
async function run() {
    try {
        const value = await a_1_promise_1.stringPromise;
        console.log("Ex11: ", value);
    }
    catch (err) {
        console.log("Err: ", err);
    }
}
run();
