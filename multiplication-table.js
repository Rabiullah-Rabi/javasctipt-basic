function multiplicationTable(number){
    for(i = 1; i <= 10; i++){
        result = i * number;
        console.log(i + ' X ' + number + ' = ' + result);
    }
}
multiplicationTable(13);