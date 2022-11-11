"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
var reverseString = function (s) { return s.split("").reverse().join(""); };
var solution1 = function (str) {
    var rgx = /\((.)+?\)+/g;
    var words = str
        .match(rgx)
        .map(function (s) { return s.slice(1, -1); })
        .join("");
    if (rgx.test(words))
        return solution(words);
    return words;
};
var solution = function (str) {
    var word = solution1(str);
    console.log(word);
    return word;
};
exports.solution = solution;
