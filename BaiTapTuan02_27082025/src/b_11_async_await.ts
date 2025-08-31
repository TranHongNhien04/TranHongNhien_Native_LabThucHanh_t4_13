import { stringPromise } from "./a_1_promise";

async function run() {
    try {
        const value = await stringPromise;
        console.log("Ex11: ", value)
    } catch (err) {
        console.log("Err: ", err)
    }
}
run()