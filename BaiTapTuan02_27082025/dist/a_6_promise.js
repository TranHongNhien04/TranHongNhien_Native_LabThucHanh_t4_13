"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_5_promise_1 = __importDefault(require("./a_5_promise"));
const task1 = (0, a_5_promise_1.default)(1000);
const task2 = (0, a_5_promise_1.default)(2000);
const task3 = (0, a_5_promise_1.default)(3000);
Promise.all([task1, task2, task3])
    .then((values) => {
    console.log(values);
});
