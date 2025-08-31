"use strict";
function task1s() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1s");
        }, 1000);
    });
}
function task2s() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2s");
        }, 2000);
    });
}
function task3s() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3s");
        }, 3000);
    });
}
async function runForAwait() {
    const tasks = [task1s(), task2s(), task3s()];
    for await (const res of tasks) {
        console.log(res);
    }
}
runForAwait();
