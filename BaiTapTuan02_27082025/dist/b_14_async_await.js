"use strict";
function numx3(num) {
    return new Promise((resolve) => setTimeout(() => {
        resolve(num * 3);
    }, 1000));
}
async function runNumx3(num) {
    try {
        const res = await numx3(num);
        console.log(res);
    }
    catch (err) {
        console.error(err);
    }
}
runNumx3(20);
