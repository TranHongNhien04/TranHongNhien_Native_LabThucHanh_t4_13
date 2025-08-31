function task(success: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Task completed successfully")
        } else {
            reject("Task failed")
        }
    })
}

task(true)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => {
        console.log("Done")
    })

// task(false)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error(err)
//     })
//     .finally(() => {
//         console.log("Done")
//     })