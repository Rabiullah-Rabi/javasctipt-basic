//একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

const friends = ['Ratan tata', "Mukhes ambanii", 'kaamlesh khan ', 'Jhon china china'];
//method 1

function bestFriend(names) {
    let longName = ' ';
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name.length > longName.length) {
            longName = name;
        }
    }
    return longName;
}
const longName = bestFriend(friends);
//console.log(longName);

//Method two, if one or more name have same length
// friends = ['Ratan tata', "Mukhes ambanii", 'kaamlesh khan ', 'Jhon chinaa clinaa'];

function bestFriends(names) {
    let longNames = [''];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        if (longNames[0].length < name.length) {
            longNames.pop(0);
            longNames[0] = name;
        }
        else if ((longNames[0].length === name.length)) {
            longNames.push(name);
        }
        console.log(names[i], names[i].length);
    }
    return longNames;
}
const longNameArray = bestFriends(friends);
for (let i = 0; i < longNameArray.length; i++) {
    const names = longNameArray[i];
    console.log(names);

}