// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

var string = 'This is a string';
var number = 33;
var bool = true;
console.log(typeof (string));
console.log(typeof (number));
console.log(typeof (bool));


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।
const gharTera = 'Ami ghar tera. Ami kemon achi temon e thakmu. change korte parbi na amaare.';
console.log(gharTera);
let valo = 'ami valo.';
console.log(valo);
valo = 'ami valo, amake change kora jay';
//gharTera = 'ami to change hobo na.';
console.log(valo);


// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।
const a = 5; b = 10;
const add = a + b;
const sub = a - b;
const mul = a * b;
const devide = a / b;
const mod = a % b;
console.log("sum of " + a, '& ' + b + ' is: ', add);
console.log("Sub of " + a, '& ' + b + ' is: ', sub);
console.log("mul of " + a, '& ' + b + ' is: ', mul);
console.log("devide of " + a, '& ' + b + ' is: ', devide);
console.log("mod of " + a, '& ' + b + ' is: ', mod);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।
{
    const a = 3; b = 9;
    console.log(a + ' is less than ' + b, a < b);
    console.log(a + ' is greater than ' + b, a > b);
    console.log(a + ' is equals to ' + b, a == b);
    console.log(a + ' is not equals to ' + b, a != b);
    console.log(a + ' is greater than or equals to ' + b, a >= b);
    console.log(a + ' is Less than or equals to ' + b, a <= b);
}

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
const gradute = false; job = false;
if ((gradute == true) && (job == true)) {
    console.log("biyer somoy hoise");
}
else if ((gradute == true) || (job == true)) {
    console.log("kichu ekta to kom ache, biyer jonno graduate o hoite hobe sathe job o thakte hobe.")
}
else {
    console.log("tomar to babu biye hobe na");
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো
const money = 5000;
if (money >= 15000) {
    console.log("Cholona hoi udasi.Dure kothau ghure asi");
}
else {
    console.log("ghore bose e travel blog dekho");
}


// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
let i = 7;
while (i <= 19) {
    console.log(i);
    i = i + 2;
}




// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
const arr = [5, 9, 5, 64, 2, 3, 45, 5];
const arrLeng = arr.length;
console.log('Length of array is :', arrLeng);
arr[4] = 99;
console.log(arr);
arr.push(29, 96);
console.log(arr);
arr.pop();
console.log(arr);
// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
for (const element of arr) {
    console.log(element);
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
{
    const arr = [5, 9, 105, 64, 200, 80, 45, 5];

    const largerThan80 = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element >= 80) {
            largerThan80.push(element);
        }
    }
    console.log(largerThan80);
}

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
{
    const a = 2; b = 4; c = 1;
    function multiply(num1, num2, num3) {
        const result = num1 * num2 * num3;
        return result;
    }
    console.log("Multiplication of ", a + ' , ', b + ' & ', c + ' is: ', multiply(a, b, c));
}


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
const myself = {
    myName: 'Rabiullah',
    age: 25,
    address: "gazipur"
};
console.log(myself);
myself.age++;
myself.address = "Gazipur";
console.log(myself);
