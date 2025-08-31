function simulateTask(ms: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task - 2s")
        }, ms)
    })
}

async function runSimulateTask() {
    try {
        const res = await simulateTask(2000)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

runSimulateTask()