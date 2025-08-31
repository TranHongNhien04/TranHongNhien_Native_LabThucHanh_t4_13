type task = {
    id: number;
    name: string;
}

async function fetchTask(id: number): Promise<task> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `Task ${id}`
            })
        }, 1000)
    })
}

async function runFetchTask() {
    console.log("Fetching task.....")
    const task = await fetchTask(1)
    console.log("Task fetched:", task)
}

runFetchTask()