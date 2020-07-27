import {sort} from "./solution.js";
let json = require('./dataset.json');

const result = sort(json);
console.log("Sorted Results: \n" + JSON.stringify(result, null, '\t'));