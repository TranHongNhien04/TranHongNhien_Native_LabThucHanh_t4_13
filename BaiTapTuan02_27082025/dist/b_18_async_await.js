"use strict";
// type task = {
//     id: number;
//     name: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
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
// runFetchUser()
