module.exports = function check(str, bracketsConfig) {
    let arrStack = [];
    let arrToCheck = str.split('');
    for (i = 0; i < arrToCheck.length; i += 1) {
        for (j = 0; j < bracketsConfig.length; j += 1) {
            if (bracketsConfig[j].includes(arrToCheck[i])) {
                arrStack.push(arrToCheck[i]);
            }
            if (arrStack.length >= 2 && arrStack[arrStack.length - 2] === bracketsConfig[j][0] && arrStack[arrStack.length - 1] === bracketsConfig[j][1]) {
                arrStack.pop();
                arrStack.pop();
            }
        }
    }
    let result;
    if (arrStack.length === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
