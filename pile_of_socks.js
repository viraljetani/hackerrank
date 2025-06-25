'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
function sockMerchant(n, ar) {
    // Write your code here
    var pair = 0;
    ar.sort(function (a, b) { return a - b; });
    for (var i = 0; i < ar.length - 1; i++) {
        if (ar[i] === ar[i + 1]) {
            pair++;
            i++; // Skip the second sock of the pair
        }
    }
    return pair;
}
function main() {
    var ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    var n = parseInt(readLine().trim(), 10);
    var ar = readLine().replace(/\s+$/g, '').split(' ').map(function (arTemp) { return parseInt(arTemp, 10); });
    var result = sockMerchant(n, ar);
    ws.write(result + '\n');
    ws.end();
}
