function simulateTask(time : number){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done")
        }, time)
    })
 }

 simulateTask(5000).then((value)=>{
    console.log(value)
 })