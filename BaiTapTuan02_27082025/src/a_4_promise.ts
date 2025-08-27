function getRandomNo() : Promise<number>{
    return new Promise((resolve, reject) =>{
        const randomNo = Math.random(); 

        resolve(randomNo)
        // setTimeout(() => {
        //     reject(new Error("Err!!"))
        // }, 2000)
 
    })
}

getRandomNo()
    .then((value) => {
    console.log(value)
    })
    .catch(err => {
        console.log(err.message)
    })