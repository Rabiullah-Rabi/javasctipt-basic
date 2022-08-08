
    const mobiles = [
        { brand: 'oppo', price: 20000, color: 'black' },
        { brand: 'vivo', price: 20000, color: 'black' },
        { brand: 'xiaomi', price: 15000, color: 'black' },
        { brand: 'nokia', price: 5000, color: 'black' }
    ];

    function chipest(mobile) {
        let cheapest = mobile[0];
        for (let i = 0; i < mobile.length; i++) {
            const element = mobile[i];
            if (element.price < cheapest.price)
                cheapest = element;
            //if element.price <= mobile[i].price;
        }
        return cheapest;
    }
    console.log(chipest(mobiles));