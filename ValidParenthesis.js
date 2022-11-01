
// VALID PARENTHESIS


function isValid(str) {

    let result = [];
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            result.push(str[i])
        } else if (result[result.length - 1] === map[str[i]]) {
            result.pop()
        } else {
            return false
        }

    }

    return result.length === 0
}

console.log(isValid("()"))
console.log(isValid("(]"))