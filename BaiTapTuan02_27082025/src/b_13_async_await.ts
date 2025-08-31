function checkEvenNum(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`${num} is an even number`)
        } else {
            reject(`${num} is not an even number`)
        }
    })
}

async function runCheckEvenNum(num: number) {
    try {
        const res = await checkEvenNum(num)
        console.log(res)
    } catch (err) {
        console.error(err)
    }
}

runCheckEvenNum(23)