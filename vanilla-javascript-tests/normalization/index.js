import {normalizer} from "./solution.js";
import {blogPostEntries} from "./normalization.js";

const normalizedPosts = normalizer(blogPostEntries);
console.log("Normalizer Results: \n" + JSON.stringify(normalizedPosts, null, '\t'));