import simulateTask from "./a_5_promise";

const task1 = simulateTask(1000)
const task2 = simulateTask(2000)
const task3 = simulateTask(3000)

Promise.all([task1, task2, task3])
    .then((values) => {
        console.log(values)
    })