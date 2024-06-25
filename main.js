function setCharAt(string, index, char){
    if(index >= string.length) return string;
    return string.substring(0, index) + char + string.substring(index + 1);
}

function capitalize(string){
    if(typeof string === 'string' || string instanceof String){
        if(string.charAt(0) >= 'a' && string.charAt(0) <= 'z'){
            return setCharAt(string, 0, String.fromCharCode(string.charCodeAt(0) - ("a".charCodeAt(0) - "A".charCodeAt(0))));
        }
    }

    return string;
}

function reverseString(string){
    if(typeof string === 'string' || string instanceof String){
        let result = "";
        for(let i = 0; i < string.length; i++){
            result = string.charAt(i) + result;
        }
        return result;
    } else {
        throw new TypeError("Given input is not a string!");
    }
}

const calculator = (function() {
    let add = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') return a + b;
        else throw new TypeError("Given input(s) is/are not a number")
    }
    
    let subtract = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') return a - b;
        else throw new TypeError("Given input(s) is/are not a number")
    }

    let multiply = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') return a * b;
        else throw new TypeError("Given input(s) is/are not a number")
    }

    let divide = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') 
            if(b !== 0) return a / b;
            else throw new Error("Division by zero is prohibited");
        else throw new TypeError("Given input(s) is/are not a number")
    }

    return {add, subtract, multiply, divide}
})()

