function task1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 - 1s")
        }, 1000)
    })
}
function task2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 - 2s")
        }, 2000)
    })
}

async function run() {
    try {
        const res1 = await task2()
        console.log(res1)

        const res2 = await task1()
        console.log(res2)
    } catch (err) {
        console.error(err)
    }
}

run()