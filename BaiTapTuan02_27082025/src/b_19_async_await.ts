import { fetchUser, user } from "./b_18_async_await";

async function fetchUers(ids: number[]): Promise<user[]> {
    const promises = ids.map(id => fetchUser(id))
    return Promise.all(promises)
}

async function runFetchUsers() {
    console.log("Fetching...")
    const users = await fetchUers([1, 2, 3, 4, 5])
    console.log("Fetched: ", users)
}

runFetchUsers()