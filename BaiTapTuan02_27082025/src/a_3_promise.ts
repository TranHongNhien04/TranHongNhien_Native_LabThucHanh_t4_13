function getReject() : Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        // resolve("Done!")
        reject(new Error("Something went wrong"))
    }, 1000)
    })
}

getReject()
// .then((value) =>{
//     console.log(value)
// })
.catch( err => {
    console.error(err.message)
})