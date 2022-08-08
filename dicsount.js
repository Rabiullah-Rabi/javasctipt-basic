function ticketPrice(quantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (quantity <= 100) {
        const price = first100Rate * quantity;
        return price;
    }
    else if (quantity <= 200) {
        const price = (100 * first100Rate) + ((quantity - 100) * second100Rate);
        return price;
    }
    else {
        const price = (100 * first100Rate) + (100 * second100Rate) + ((quantity - 200) * restTicketRate);
        return price;
    }
}

console.log(ticketPrice(201));