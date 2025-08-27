"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = simulateTask;
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(5000).then((value) => {
    console.log(value);
});
