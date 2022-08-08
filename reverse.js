const str = "This is a basic sentence"
function reverse_later(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        reversed = reversed + element;
    }
    return reversed;
}
function reverse_word(str) {
    const split = str.split(' ');
    //console.log(split);
    let reversed = [];
    for (let i = split.length - 1; i >= 0; i--) {
        const element = split[i];
        reversed.push(element);
        //reversed = reversed + ' ' + element;
        //console.log(element);
    }
    const join = reversed.join(' ');
    return join;
}

console.log(reverse_later(str));
console.log(reverse_word(str));