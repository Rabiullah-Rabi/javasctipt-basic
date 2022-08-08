
const shoppingCart = [
    { name: 'shoe', price: 200, quantity: 1 },
    { name: 'shirt', price: 300, quantity: 3 },
    { name: 'pant', price: 700, quantity: 2 },
    { name: 'belt', price: 100, quantity: 1 },
];

function total(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        const element = items[i];

        totalPrice = totalPrice + (element.price * element.quantity);
    }
    return totalPrice;
}
console.log(total(shoppingCart));