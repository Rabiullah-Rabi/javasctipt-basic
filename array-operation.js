const array = [5, 6, 4, 8, 9, 5, 9, 8, 5, 56, 6, 98];
const sliced = array.slice(3, 9);
//console.log(sliced);

const spliced = array.splice(3, 4, 101, 105, 122, 458, 445, 696);

//console.log(spliced);
//console.log(array);
const joint = sliced.concat(array);
console.log(joint);
