"use strict";
// type task = {
//     id: number;
//     name: string;
// }
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `User ${id}`
            });
        }, 1000);
    });
}
async function runFetchUser() {
    console.log("Fetching.....");
    const user = await fetchUser(1);
    console.log("Fetched:", user);
}
runFetchUser();
