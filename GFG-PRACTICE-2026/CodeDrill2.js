function areBracketsBalanced(str) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        if (bracketPairs.hasOwnProperty(char)) { // Check if it's an opening bracket
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) { // Check if it's a closing bracket
            if (stack.length === 0) {
                return false; // Closing bracket found without a corresponding opener
            }
            const lastOpener = stack.pop();
            if (bracketPairs[lastOpener] !== char) {
                return false; // Mismatch in bracket types
            }
        }
        // Ignore characters that are not brackets
    }

    return stack.length === 0; // Stack must be empty for all to be balanced
}

// Test cases
console.log(`"{([])}" is balanced: ${areBracketsBalanced("{([])}")}`); // true [1]
console.log(`"{([}])}" is balanced: ${areBracketsBalanced("{([}])}")}`); // false [1]
console.log(`"{([])" is balanced: ${areBracketsBalanced("{([])")}`); // false [1]
console.log(`"([{}])" is balanced: ${areBracketsBalanced("([{}])")}`); // true
console.log(`"()" is balanced: ${areBracketsBalanced("()")}`); // true
console.log(`"test(string)" is balanced: ${areBracketsBalanced("test(string)")}`); // true
