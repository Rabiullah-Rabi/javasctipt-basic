const str = "This is a basic sentence. We will apply some string operation to this sentence. By the way, JavaScript didn't know that is sentence. But he knows string. And this is a string variable."

// const sentence = str.split('.');
// console.log(sentence);
// const word = str.split(' ');
// console.log(word);
// const later = str.split('');
// console.log(later);

// const slice = str.slice(0, 50);
// console.log(slice);


const sentences = ['This is a basic sentence',
    ' We will apply some string operation to this sentence',
    " By the way, JavaScript didn't know that is sentence",
    ' But he knows string',
    ' And this is a string variable',
    ''];

// const sentence = str.split('.');
console.log(sentences);
const join = sentences.join('. ');
console.log(join);

