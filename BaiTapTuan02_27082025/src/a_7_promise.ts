const promise1 = new Promise((resolve) => {
    setTimeout(() =>
        resolve("Promise1 - 3s")
        , 3000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() =>
        resolve("Promise2 - 1s")
        , 1000)
})

const promise3 = new Promise((resolve) => {
    setTimeout(() =>
        resolve("Promise3 - 2s")
        , 2000)
})

Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log("First: ", value)
    })