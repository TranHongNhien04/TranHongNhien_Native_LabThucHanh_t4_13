const stringPromise = new Promise<string>((resolve) => {
    setTimeout(()=>{
        resolve('Hello Async')
    }, 2000)
});

stringPromise.then((value) => {
    console.log(value)
});