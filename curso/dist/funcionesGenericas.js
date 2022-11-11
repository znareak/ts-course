"use strict";
const STATUS = true;
function saveDataIntoFile(path, data) {
    console.log("Save at: " + path);
    console.log(typeof data, data);
    return true;
}
saveDataIntoFile("./", [1, 2, 3, 4, 5]);
