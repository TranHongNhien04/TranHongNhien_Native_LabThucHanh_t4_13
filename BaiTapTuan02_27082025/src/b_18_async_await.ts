// type task = {
//     id: number;
//     name: string;
// }

// async function fetchTask(id: number): Promise<task> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id,
//                 name: `Task ${id}`
//             })
//         }, 1000)
//     })
// }

// async function runFetchTask() {
//     console.log("Fetching task.....")
//     const task = await fetchTask(1)
//     console.log("Task fetched:", task)
// }

// runFetchTask()

type user = {
    id: number;
    name: string;
}

async function fetchUser(id: number): Promise<user> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `User ${id}`
            })
        }, 1000)
    })
}

async function runFetchUser() {
    console.log("Fetching.....")
    const user = await fetchUser(1)
    console.log("Fetched:", user)
}

runFetchUser()