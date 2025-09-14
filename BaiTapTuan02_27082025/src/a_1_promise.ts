export const stringPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Hello Async')
    }, 2000)
});

// stringPromise.then((value) => {
//     console.log(value)
// });TranHongNhien_Native_LabThucHanh_t4_13/BaiTapTuan02_27082025/src/a_1_promise.ts