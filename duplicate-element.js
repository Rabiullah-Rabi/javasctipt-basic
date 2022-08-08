const nemes = ['robi', 'kobi', 'chobi', 'robi', 'kobi', 'chobi', 'robi'];
function sort(names) {
    let sortlist = [];
    for (let i = 0; i < names.length; i++) {
        if ((sortlist.includes(names[i])) === false) {
            sortlist.push(names[i]);
        }
    }
    return sortlist;
}
console.log(sort(nemes));