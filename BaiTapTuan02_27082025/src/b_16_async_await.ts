function task11(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 - 1s")
        }, 1000)
    })
}
function task22(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 - 10s")
        }, 10000)
    })
}

async function runParallel() {
    try {
        const res = await Promise.all([task11(), task22()])
        console.log(res[0])
        console.log(res[1])
    } catch (err) {
        console.error(err)
    }
}

runParallel()