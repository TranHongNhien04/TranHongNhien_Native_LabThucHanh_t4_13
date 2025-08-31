import { fetchUser, user } from "./b_18_async_await";

async function fetchUserWithTimeout(id: number, timeout: number): Promise<user> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Request timed out after 2 seconds"));
        }, timeout);

        fetchUser(id)
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
    } catch (err: any) {
        console.error(err.message);
    }
}

runFetchUser();
